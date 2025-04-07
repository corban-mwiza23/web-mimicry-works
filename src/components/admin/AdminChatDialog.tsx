
import React, { useState, useRef, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useChatStore, ChatConversation } from '@/store/chatStore';
import { formatDistanceToNow } from 'date-fns';
import { User } from 'lucide-react';

interface AdminChatDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  conversation: ChatConversation;
}

const AdminChatDialog = ({ open, onOpenChange, conversation }: AdminChatDialogProps) => {
  const [reply, setReply] = useState('');
  const { markConversationAsRead, replyToUser } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Get the current conversation from the store to ensure we have the latest messages
  const { conversations } = useChatStore();
  const currentConversation = conversations.find(c => c.userId === conversation.userId) || conversation;

  useEffect(() => {
    if (open) {
      markConversationAsRead(conversation.userId);
      setTimeout(() => {
        scrollToBottom();
      }, 100);
    }
  }, [open, conversation.userId, markConversationAsRead, currentConversation.messages.length]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendReply = (e: React.FormEvent) => {
    e.preventDefault();
    if (reply.trim()) {
      replyToUser(conversation.userId, reply);
      setReply('');
      setTimeout(scrollToBottom, 100);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <User className="h-4 w-4 text-primary mr-2" />
            Chat with {currentConversation.userName || 'Unknown User'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-2 flex flex-col h-[400px]">
          <ScrollArea className="flex-1 pr-4">
            <div className="space-y-4">
              {currentConversation.messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      message.sender === 'admin' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {message.sender === 'user' && (
                      <div className="font-semibold text-xs text-primary mb-1 flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        {currentConversation.userName || 'Unknown User'}
                      </div>
                    )}
                    <div>{message.text}</div>
                    <div className="text-xs mt-1 opacity-70">
                      {formatDistanceToNow(new Date(message.timestamp), { addSuffix: true })}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSendReply} className="mt-4 flex gap-2">
            <Input
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="Type your reply..."
              className="flex-1"
            />
            <Button type="submit">Send</Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AdminChatDialog;
