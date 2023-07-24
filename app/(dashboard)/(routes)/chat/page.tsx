import Heading from '@/components/Heading';
import { MessageSquare } from 'lucide-react';

const ChatPage = () => {
  return (
    <div>
      <Heading
        title='Chat with D-prompt AI'
        description='Chat with the most advance chat AI model'
        icon={MessageSquare}
        color='text-blue-500'
        bgColor='bg-blue-500/10'
      />
    </div>
  );
};

export default ChatPage;
