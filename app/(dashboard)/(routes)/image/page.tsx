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

import { ImageIcon } from 'lucide-react';
import { formSchema } from './constants';
import { cn } from '@/lib/utils';

const ImageGeneratorPage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post('/api/chat');
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
        title='D-prompt Image Generator'
        description='Turn your prompt into an image using D-prompt AI.'
        icon={ImageIcon}
        color='text-orange-500'
        bgColor='bg-orange-500/10'
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
                        placeholder='What is the largest search engine?'
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
          {images.length === 0 && !isLoading && (
            <Empty label='No images generated' />
          )}
          <div>images will be here</div>
        </div>
      </div>
    </>
  );
};

export default ImageGeneratorPage;
