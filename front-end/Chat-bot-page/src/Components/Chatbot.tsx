import { Box } from '@chakra-ui/react';
// import MessageBot from './MessageBot';

interface IMessages {
  messages: string[]
}

function Chatbot({ messages }: IMessages) {
  return (
    <Box maxWidth={ 400 } height={ 640 }>
      {messages.map((message, index) => (
        <Box
          key={ index }
          textAlign={ index % 2 === 0 ? 'left' : 'right' }
          padding={ 5 }
          border="2px solid"
          borderRadius="5px"
          backgroundColor={ index % 2 === 0 ? 'green.100' : 'blue.100' }
          mb={ 2 }
        >
          {message}
        </Box>
      ))}
    </Box>
  );
}

export default Chatbot;
