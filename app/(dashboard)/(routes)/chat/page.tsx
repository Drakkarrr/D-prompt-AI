'use client';

import Heading from '@/components/Heading';
import { useForm } from 'react-hook-form';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { MessageSquare } from 'lucide-react';
import { formSchema } from './constant';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const ChatPage = () => {
  type Form = z.infer<typeof formSchema>;
  const form = useForm<Form>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (data: Form) => {
    console.log(data);
  };

  return (
    <div>
      <Heading
        title='Chat with D-prompt AI'
        description='Chat with the most advance chat AI model'
        icon={MessageSquare}
        color='text-blue-500'
        bgColor='bg-blue-500/10'
      />
      <div className='px-4 lg:px-8'>
        <form onSubmit={form.handleSubmit((data) => console.log(data))}>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='gap- grid w-full grid-cols-12 rounded-lg border p-4 px-3 shadow-lg focus-within:shadow-sm md:px-6'
            >
              <FormField
                name='Prompt'
                render={(field) => (
                  <FormItem className='col-span-12 lg:col-span-10'>
                    <FormControl
                      placeholder='Enter your prompt'
                      className='m-0 w-full p-0'
                    >
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='Enter you prompt'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button
                className='col-span-12 w-full lg:col-span-2'
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </form>
        <div className='mt-4 space-y-4'>
          <p>Contents here</p>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
