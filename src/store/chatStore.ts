
import { create } from 'zustand';

export interface ChatMessage {
  id: string;
  sender: 'user' | 'admin';
  text: string;
  userId: string;
  userName: string;
  timestamp: Date;
  read: boolean;
}

export interface ChatConversation {
  userId: string;
  userName: string;
  messages: ChatMessage[];
  unreadCount: number;
  lastMessage?: ChatMessage;
}

interface ChatState {
  conversations: ChatConversation[];
  addMessage: (message: Omit<ChatMessage, 'id' | 'timestamp'>) => void;
  markConversationAsRead: (userId: string) => void;
  replyToUser: (userId: string, text: string) => void;
}

export const useChatStore = create<ChatState>((set) => ({
  conversations: [
    {
      userId: '1',
      userName: 'John Doe',
      unreadCount: 2,
      messages: [
        {
          id: '1',
          sender: 'user',
          text: 'Hello, I have a question about your services.',
          userId: '1',
          userName: 'John Doe',
          timestamp: new Date(Date.now() - 3600000),
          read: true,
        },
        {
          id: '2',
          sender: 'admin',
          text: 'Hello John, how can I help you today?',
          userId: '1',
          userName: 'John Doe',
          timestamp: new Date(Date.now() - 3500000),
          read: true,
        },
        {
          id: '3',
          sender: 'user',
          text: 'I would like to know more about your energy solutions.',
          userId: '1',
          userName: 'John Doe',
          timestamp: new Date(Date.now() - 1800000),
          read: false,
        },
        {
          id: '4',
          sender: 'user',
          text: 'Specifically, do you offer solar panel installation?',
          userId: '1',
          userName: 'John Doe',
          timestamp: new Date(Date.now() - 1700000),
          read: false,
        },
      ],
    },
    {
      userId: '2',
      userName: 'Sarah Smith',
      unreadCount: 1,
      messages: [
        {
          id: '5',
          sender: 'user',
          text: 'Hi, I\'m interested in your control systems.',
          userId: '2',
          userName: 'Sarah Smith',
          timestamp: new Date(Date.now() - 7200000),
          read: true,
        },
        {
          id: '6',
          sender: 'admin',
          text: 'Hello Sarah, thank you for your interest. What specific control systems are you looking for?',
          userId: '2',
          userName: 'Sarah Smith',
          timestamp: new Date(Date.now() - 7000000),
          read: true,
        },
        {
          id: '7',
          sender: 'user',
          text: 'I need an automated system for my warehouse.',
          userId: '2',
          userName: 'Sarah Smith',
          timestamp: new Date(Date.now() - 900000),
          read: false,
        },
      ],
    },
  ],

  addMessage: (message) => set((state) => {
    const id = Math.random().toString(36).substring(2, 9);
    const timestamp = new Date();
    const newMessage: ChatMessage = { ...message, id, timestamp };
    
    const existingConversationIndex = state.conversations.findIndex(
      (conv) => conv.userId === message.userId
    );

    if (existingConversationIndex !== -1) {
      const updatedConversations = [...state.conversations];
      const conversation = updatedConversations[existingConversationIndex];
      
      const unreadCount = message.sender === 'user' 
        ? conversation.unreadCount + 1 
        : conversation.unreadCount;
      
      updatedConversations[existingConversationIndex] = {
        ...conversation,
        messages: [...conversation.messages, newMessage],
        unreadCount,
        lastMessage: newMessage,
      };
      
      return { conversations: updatedConversations };
    } else {
      const newConversation: ChatConversation = {
        userId: message.userId,
        userName: message.userName,
        messages: [newMessage],
        unreadCount: message.sender === 'user' ? 1 : 0,
        lastMessage: newMessage,
      };
      
      return { conversations: [...state.conversations, newConversation] };
    }
  }),

  markConversationAsRead: (userId) => set((state) => {
    const conversationIndex = state.conversations.findIndex(
      (conv) => conv.userId === userId
    );

    if (conversationIndex === -1) return state;

    const updatedConversations = [...state.conversations];
    const conversation = updatedConversations[conversationIndex];
    
    const updatedMessages = conversation.messages.map(msg => 
      msg.sender === 'user' && !msg.read ? { ...msg, read: true } : msg
    );
    
    updatedConversations[conversationIndex] = {
      ...conversation,
      messages: updatedMessages,
      unreadCount: 0,
    };
    
    return { conversations: updatedConversations };
  }),

  replyToUser: (userId, text) => set((state) => {
    const reply: Omit<ChatMessage, 'id' | 'timestamp'> = {
      sender: 'admin',
      text,
      userId,
      userName: state.conversations.find(c => c.userId === userId)?.userName || '',
      read: true,
    };
    
    return state.addMessage(reply);
  }),
}));
