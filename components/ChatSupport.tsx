'use client';

import { useEffect } from 'react';
import { Crisp } from 'crisp-sdk-web';

const ChatSupport = () => {
  useEffect(() => {
    Crisp.configure(process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID!);
  }, []);

  return null;
};

export default ChatSupport;
