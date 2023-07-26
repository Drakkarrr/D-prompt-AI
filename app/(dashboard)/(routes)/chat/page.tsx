'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios, { AxiosError } from 'axios';

import Heading from '@/components/Heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';
import UserAvatar from '@/components/UserAvatar';
import BotAvatar from '@/components/BotAvatar';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { MessageSquare } from 'lucide-react';
import { formSchema } from './constants';
import { cn } from '@/lib/utils';

import { ChatCompletionRequestMessage } from 'openai';

const ChatPage = () => {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: 'user',
        content: data.prompt,
      };
      const newMessages: ChatCompletionRequestMessage[] = [
        ...messages,
        userMessage,
      ];

      const response = await axios.post('/api/chat', {
        messages: newMessages,
      });
      setMessages((current: ChatCompletionRequestMessage[]) => [
        ...current,
        userMessage,
        response.data,
      ]);
      form.reset();
    } catch (error: AxiosError | any) {
      console.log(error);
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <>
      <Heading
        title='Chat with D-prompt AI'
        description='Chat with the most advance chat AI model'
        icon={MessageSquare}
        color='text-blue-500'
        bgColor='bg-blue-500/10'
      />

      <div className='px-4 lg:px-8'>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='grid w-full grid-cols-12 gap-2 rounded-lg border p-4 px-3 focus-within:shadow-sm md:px-6'
            >
              <FormField
                name='prompt'
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='How to center a div using css?'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 w-full lg:col-span-2'
                type='submit'
                disabled={isLoading}
                size='icon'
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>

        <div className='mt-4 space-y-4'>
          {isLoading && (
            <div className='flex w-full items-center justify-center rounded-lg bg-muted p-8'>
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label='Start a conversation with D-prompt AI' />
          )}
          <div className='flex flex-col-reverse gap-y-4'>
            {messages.map((message: ChatCompletionRequestMessage) => (
              <div
                key={message.content}
                className={cn(
                  'flex w-full items-start gap-x-8 rounded-lg p-8',
                  message.role === 'user'
                    ? 'border border-black/10 bg-white'
                    : 'bg-muted'
                )}
              >
                {message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
                <p className='text-sm'>{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatPage;
