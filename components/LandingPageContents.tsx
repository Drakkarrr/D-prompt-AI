'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    title: 'Teacher',
    org: 'Google',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: 2,
    name: 'Jane Doe',
    title: 'CEO',
    org: 'Facebook',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: 3,
    name: 'Drak Doe',
    title: 'CEO',
    org: 'Google',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
  {
    id: 4,
    name: 'Chris Doe',
    title: 'Sofware Developer',
    org: 'Google',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
  },
];

const LandingPageContents = () => {
  return (
    <>
      <div className='px-10 pb-20'>
        <h2 className='mb-10 text-center text-4xl font-extrabold text-white'>
          Testimonials
        </h2>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className='border-none bg-[#192339] text-white md:text-center'
            >
              <CardHeader>
                <CardContent className='px-0 pt-4'>
                  {testimonial.desc}
                </CardContent>
                <CardTitle className='flex items-center gap-x-2'>
                  <div>
                    <p className='text-lg'>{testimonial.name}</p>
                    <p className='text-sm text-zinc-400'>{testimonial.title}</p>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
      <div className='pb-5 text-center text-sm font-light text-zinc-400 md:text-xl'>
        Developed by Drakkar
      </div>
    </>
  );
};

export default LandingPageContents;
