'use client';

import { useState } from 'react';
import { useRouter as Router } from 'next/navigation';
import axios, { AxiosError } from 'axios';

import Heading from '@/components/Heading';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Empty from '@/components/Empty';
import Loader from '@/components/Loader';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useProModal } from '@/hooks/useProModal';

import { Download, ImageIcon } from 'lucide-react';
import { amountOptions, formSchema, resolutionOptions } from './constants';
import { Card, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import toast from 'react-hot-toast';

const ImageGeneratorPage = () => {
  const router = Router();
  const proModal = useProModal();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: '',
      amount: '1',
      resolution: '512x512',
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      setImages([]);

      const response = await axios.post('/api/image', data);
      const urls = response.data.map((image: { url: string }) => image.url);

      setImages(urls);
      form.reset();
    } catch (error: AxiosError | any) {
      console.log(error);
      if (error?.response?.status === 403) proModal.onOpen();
      else toast.error('Something went wrong!');
    } finally {
      router.refresh();
      form.reset();
    }
  };

  return (
    <>
      <Heading
        title='Photo Generation'
        description='Create visual masterpieces that are both innovative and awe-inspiring.'
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
                  <FormItem className='col-span-12 lg:col-span-6'>
                    <FormControl className='m-0 p-0'>
                      <Input
                        className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent'
                        disabled={isLoading}
                        placeholder='A picture of a cat in a basket'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name='amount'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-2'>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <FormField
                name='resolution'
                control={form.control}
                render={({ field }) => (
                  <FormItem className='col-span-12 lg:col-span-2'>
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
            <div className='p-20'>
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <Empty label='No images generated' />
          )}
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {images.map((src) => (
              <Card key={src} className='overflow-hidden rounded-lg'>
                <div className='relative aspect-square'>
                  <Image fill alt='Generated photos by AI' src={src} />
                </div>
                <CardFooter className='p-2'>
                  <Button
                    onClick={() => window.open(src)}
                    variant='secondary'
                    className='w-full'
                  >
                    <Download className='mr-2 h-4 w-4' />
                    Download
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGeneratorPage;
