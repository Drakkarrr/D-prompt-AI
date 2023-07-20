import { UserButton } from '@clerk/nextjs';

const DashboardPage = () => {
  return (
    <>
      <h1>Welcome to DashboardPage pageeee(Protected)</h1>
      <UserButton afterSignOutUrl='/' />
    </>
  );
};

export default DashboardPage;
