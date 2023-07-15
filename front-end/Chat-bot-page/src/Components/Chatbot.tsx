import { Box } from '@chakra-ui/react';
// import MessageBot from './MessageBot';

interface IMessages {
  messages: string[]
}

function Chatbot({ messages }: IMessages) {
  return (
    <Box width={ 400 } h={ 640 }>
      {messages.map((message, index) => (
        <Box key={ index }>{message}</Box>
      ))}
    </Box>
  );
}

export default Chatbot;
