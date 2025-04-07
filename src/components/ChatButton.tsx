
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChatStore } from "@/store/chatStore";
import { useToast } from "@/hooks/use-toast";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" })
});

type FormValues = z.infer<typeof formSchema>;

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [hasProvidedName, setHasProvidedName] = useState(false);
  const { addMessage, conversations } = useChatStore();
  const { toast } = useToast();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: ""
    }
  });

  // Generate a persistent user ID for this session
  useEffect(() => {
    const storedUserId = sessionStorage.getItem("chatUserId");
    const storedUserName = sessionStorage.getItem("chatUserName");
    
    if (storedUserId && storedUserName) {
      setUserId(storedUserId);
      setUserName(storedUserName);
      setHasProvidedName(true);
    } else {
      // Generate a new ID if none exists
      const newUserId = "user-" + Math.random().toString(36).substring(2, 9);
      setUserId(newUserId);
    }
  }, []);

  // Get messages for this user
  const userConversation = conversations.find(conv => conv.userId === userId);
  const messages = userConversation?.messages || [];
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const onNameSubmit = (data: FormValues) => {
    setUserName(data.name);
    setHasProvidedName(true);
    
    // Store user info in session storage
    sessionStorage.setItem("chatUserId", userId);
    sessionStorage.setItem("chatUserName", data.name);
    
    // Add initial admin message
    addMessage({
      sender: 'admin',
      text: `Hello ${data.name}! How can I help you today?`,
      userId,
      userName: data.name,
      read: true,
    });
    
    toast({
      title: "Welcome to chat!",
      description: `Thanks ${data.name}, you can now start chatting with us.`,
    });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // Add the user message to the store
      addMessage({
        sender: 'user',
        text: message,
        userId,
        userName,
        read: false,
      });
      
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <Card className="w-80 mb-4 shadow-lg animate-fade-in">
          <CardHeader className="bg-primary text-white p-4 flex flex-row justify-between items-center">
            <CardTitle className="text-sm font-medium flex items-center">
              <User className="h-4 w-4 mr-2" />
              {hasProvidedName ? `Chat as ${userName}` : 'Start Chatting'}
            </CardTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleChat}
              className="h-6 w-6 text-white hover:bg-primary/90"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-3">
            {!hasProvidedName ? (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onNameSubmit)} className="space-y-4 pt-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Please enter your name to start chatting</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">Start Chatting</Button>
                </form>
              </Form>
            ) : (
              <>
                <div className="max-h-80 overflow-y-auto space-y-3">
                  {messages.length === 0 ? (
                    <div className="text-center text-gray-500 py-4">
                      Start a conversation with us!
                    </div>
                  ) : (
                    messages.map((msg, index) => (
                      <div 
                        key={msg.id || index} 
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div 
                          className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                            msg.sender === 'user' 
                              ? 'bg-primary text-white' 
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {msg.sender === 'admin' && (
                            <div className="font-semibold text-xs text-gray-600 mb-1">Admin</div>
                          )}
                          {msg.text}
                        </div>
                      </div>
                    ))
                  )}
                </div>
                <CardFooter className="p-3 border-t mt-3">
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
              </>
            )}
          </CardContent>
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
