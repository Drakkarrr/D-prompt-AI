const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='auth-layout flex h-full items-center justify-center'>
      <div className='auth-layout__content'>{children}</div>
    </div>
  );
};

export default AuthLayout;
