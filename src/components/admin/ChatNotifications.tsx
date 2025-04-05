
import React, { useState } from 'react';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { 
  Card, 
  CardContent 
} from '@/components/ui/card';
import { 
  MessageSquare, 
  Bell 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { useChatStore, ChatConversation } from '@/store/chatStore';
import { formatDistanceToNow } from 'date-fns';
import AdminChatDialog from './AdminChatDialog';

const ChatNotifications = () => {
  const { conversations } = useChatStore();
  const [selectedConversation, setSelectedConversation] = useState<ChatConversation | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const totalUnread = conversations.reduce((sum, conv) => sum + conv.unreadCount, 0);

  const handleConversationClick = (conversation: ChatConversation) => {
    setSelectedConversation(conversation);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedConversation(null);
  };

  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            {totalUnread > 0 && (
              <Badge 
                className="absolute -top-1 -right-1 px-1.5 py-0.5 min-w-[1.2rem] h-5 flex items-center justify-center bg-red-500 text-white border-0"
                variant="destructive"
              >
                {totalUnread}
              </Badge>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="end">
          <Card>
            <CardContent className="p-0">
              <div className="py-2 px-4 bg-primary text-primary-foreground font-medium">
                Messages ({totalUnread} unread)
              </div>
              <ScrollArea className="h-64">
                {conversations.length === 0 ? (
                  <div className="p-4 text-center text-gray-500">
                    No messages yet
                  </div>
                ) : (
                  <div className="divide-y">
                    {conversations.map((conversation) => {
                      const lastMessage = conversation.messages[conversation.messages.length - 1];
                      return (
                        <div 
                          key={conversation.userId}
                          className={`p-3 hover:bg-gray-50 cursor-pointer ${
                            conversation.unreadCount > 0 ? 'bg-blue-50' : ''
                          }`}
                          onClick={() => handleConversationClick(conversation)}
                        >
                          <div className="flex justify-between">
                            <div className="font-medium">{conversation.userName}</div>
                            <div className="text-xs text-gray-500">
                              {formatDistanceToNow(new Date(lastMessage.timestamp), { addSuffix: true })}
                            </div>
                          </div>
                          <div className="flex items-start mt-1">
                            <MessageSquare className="h-4 w-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                            <div className="text-sm text-gray-600 truncate max-w-[200px]">
                              {lastMessage.text}
                            </div>
                          </div>
                          {conversation.unreadCount > 0 && (
                            <div className="mt-1 flex justify-end">
                              <Badge className="bg-primary" variant="default">
                                {conversation.unreadCount} new
                              </Badge>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </ScrollArea>
            </CardContent>
          </Card>
        </PopoverContent>
      </Popover>

      {selectedConversation && (
        <AdminChatDialog
          open={isDialogOpen}
          onOpenChange={setIsDialogOpen}
          conversation={selectedConversation}
        />
      )}
    </>
  );
};

export default ChatNotifications;
