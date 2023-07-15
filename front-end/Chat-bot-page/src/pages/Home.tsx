import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../Components/Header';
import Chatbot from '../Components/Chatbot';
import InputMessage from '../Components/InputMessage';

function Home() {
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = (message: string): void => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <Box w={ 390 } h={ 844 } m="0 auto" border="4px solid gray">
      <Header />
      <Chatbot messages={ messages } />
      <InputMessage onSendMessage={ handleSendMessage } />
    </Box>
  );
}

export default Home;
