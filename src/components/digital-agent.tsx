'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, Send, X, Loader2, MessageSquare, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import { Input } from './ui/input';
import { AnimatePresence, motion } from 'framer-motion';
import { digitalAgent } from '../ai/flows/digital-agent-flow';
import { MessageData } from 'genkit';

type Message = {
  id: string;
  text: string;
  sender: 'user' | 'bot';
};

const suggestedQuestions = [
    '¿Qué servicios ofrecéis?',
    'Háblame de los precios',
    '¿Cómo es el proceso de trabajo?',
];

export function DigitalAgent() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    if (!isOpen && messages.length === 0) {
      setMessages([
        { id: 'initial', text: '¿Cómo puedo ayudarte hoy?', sender: 'bot' },
      ]);
    }
  };

  const handleReset = () => {
    setMessages([
      { id: 'reset', text: '¿Cómo puedo ayudarte hoy?', sender: 'bot' },
    ]);
  }

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = { id: Date.now().toString(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Construct history from messages, excluding the last one (the user's current message)
      const history: MessageData[] = messages.map(m => ({
          role: m.sender === 'bot' ? 'model' : 'user',
          content: [{ text: m.text }],
      }));

      const botResponseText = await digitalAgent(history, text);

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponseText,
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: '¡Ups! Algo salió mal. Inténtalo de nuevo.',
        sender: 'bot',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend(inputValue);
    }
  };
  
    const handleSuggestedQuestion = (question: string) => {
        handleSend(question);
    };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 z-50"
          >
            <Card className="w-80 h-96 flex flex-col shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between bg-card p-4 border-b">
                <div className='flex items-center gap-2'>
                    <Bot className="h-6 w-6 text-primary" />
                    <CardTitle className="text-lg font-headline">Asistente Frix</CardTitle>
                </div>
                <div>
                     <Button variant="ghost" size="icon" onClick={handleReset} className="h-8 w-8">
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={handleToggle} className="h-8 w-8">
                        <X className="h-4 w-4" />
                    </Button>
                </div>
              </CardHeader>
              <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                        message.sender === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start gap-2">
                    <div className="bg-muted rounded-lg px-3 py-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                    </div>
                  </div>
                )}
                 {messages.length <= 1 && (
                  <div className="space-y-2 pt-2">
                    {suggestedQuestions.map((q) => (
                        <Button key={q} variant="outline" size="sm" className="w-full justify-start" onClick={() => handleSuggestedQuestion(q)}>
                           {q}
                        </Button>
                    ))}
                  </div>
                )}
                <div ref={messagesEndRef} />
              </CardContent>
              <CardFooter className="p-4 border-t">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Escribe un mensaje..."
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                  />
                  <Button
                    size="icon"
                    className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                    onClick={() => handleSend(inputValue)}
                    disabled={isLoading || !inputValue.trim()}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className="fixed bottom-4 right-4 rounded-full h-16 w-16 shadow-lg"
        onClick={handleToggle}
      >
        <AnimatePresence>
          {isOpen ? (
            <motion.div
                key="close"
                initial={{ rotate: 45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -45, scale: 0 }}
                className="absolute"
            >
                <X className="h-8 w-8" />
            </motion.div>
          ) : (
            <motion.div
                key="open"
                initial={{ rotate: 45, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -45, scale: 0 }}
                className="absolute"
            >
                <MessageSquare className="h-8 w-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </>
  );
}
