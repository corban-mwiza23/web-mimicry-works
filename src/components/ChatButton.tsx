
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{sender: 'user' | 'admin'; text: string}[]>([
    { sender: 'admin', text: "Hello! How can I help you today?" }
  ]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      setMessages([...messages, { sender: 'user', text: message }]);
      setMessage("");
      
      // Simulate admin response after a short delay
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          sender: 'admin', 
          text: "Thanks for your message. Our team will get back to you shortly." 
        }]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 mb-4 shadow-lg animate-fade-in">
          <CardHeader className="bg-primary text-white p-4 flex flex-row justify-between items-center">
            <CardTitle className="text-sm font-medium">Chat with Admin</CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-6 w-6 text-white hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-3 max-h-80 overflow-y-auto">
            <div className="space-y-3">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                      msg.sender === 'user' 
                        ? 'bg-primary text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="p-3 border-t">
            <form onSubmit={handleSendMessage} className="flex w-full gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
              />
              <Button type="submit" size="sm">Send</Button>
            </form>
          </CardFooter>
        </Card>
      )}
      
      <Button
        onClick={toggleChat}
        className="rounded-full h-14 w-14 shadow-lg hover:shadow-xl transition-all bg-primary hover:bg-primary/90"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ChatButton;
