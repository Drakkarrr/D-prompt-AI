import Image from 'next/image';

interface EmptyProps {
  label: string;
}

const Empty: React.FC<EmptyProps> = ({ label }) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <div className='relative h-full w-full'>
        <Image
          alt='Empty placeholder'
          src='/empty.png'
          width={1050}
          height={1050}
        />
      </div>
      <p className='text-center text-sm text-muted-foreground'>{label}</p>
    </div>
  );
};

export default Empty;
