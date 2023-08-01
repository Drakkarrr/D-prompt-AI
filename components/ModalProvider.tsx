'use client';

import { useEffect, useState } from 'react';
import ProModal from '@/components/ProModal';

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <ProModal />
    </>
  );
};

export default ModalProvider;
