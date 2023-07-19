import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../Components/Header';
import Chatbot from '../Components/Chatbot';
import InputMessage from '../Components/InputMessage';
import ISendMessage from '../interfaces/ISendMessage';

function Home() {
  const [messages, setMessages] = useState<ISendMessage[]>([]);

  const handleSendMessage = (messageSent: ISendMessage): void => {
    setMessages((prevMessages) => [...prevMessages, messageSent]);
  };

  return (
    <Box
      maxWidth={ 390 }
      height={ 844 }
      m="0 auto"
      border="4px solid gray"
      overflow="auto"
    >
      <Header />
      <Chatbot messages={ messages } onSendMessage={ handleSendMessage } />
      <InputMessage onSendMessage={ handleSendMessage } />
    </Box>
  );
}

export default Home;
