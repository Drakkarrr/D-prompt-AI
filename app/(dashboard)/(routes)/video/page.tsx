'use client';

import { useState } from 'react';
import { useRouter as Router } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

import Heading from '@/components/Heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';

import { useForm } from 'react-hook-form';
import { useProModal } from '@/hooks/useProModal';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Video } from 'lucide-react';
import { formSchema } from './constants';

const VideoGeneratorPage = () => {
  const proModal = useProModal();
  const router = Router();
  const [video, setVideo] = useState<string>();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setVideo(undefined);

      const response = await axios.post('/api/video', values);
      // console.log(response);

      setVideo(response.data[0]);
      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) proModal.onOpen();
      else toast.error('Something went wrong!');
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title='Video Generation'
        description='Dive into the realm of video creation like never before using AI.'
        icon={Video}
        color='text-pink-500'
        bgColor='bg-pink-500/10'
      />
      <div className='px-4 lg:px-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
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
                      placeholder='Dancing stickman'
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
        {isLoading && (
          <div className='p-20'>
            <Loader />
          </div>
        )}
        {!video && !isLoading && <Empty label='No video generated.' />}
        {video && (
          <video
            controls
            className='mt-8 aspect-video w-full rounded-lg border bg-black'
          >
            <source src={video} />
          </video>
        )}
      </div>
    </div>
  );
};

export default VideoGeneratorPage;
