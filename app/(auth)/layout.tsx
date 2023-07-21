import { Props } from '@/types';

const AuthLayout = ({ children }: Props) => {
  return (
    <div className='auth-layout flex h-full items-center justify-center'>
      <div className='auth-layout__content'>{children}</div>
    </div>
  );
};

export default AuthLayout;
