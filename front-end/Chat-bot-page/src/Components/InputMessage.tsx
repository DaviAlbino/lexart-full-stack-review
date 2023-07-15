import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

function InputMessage({ onSendMessage }: any) {
  const [message, setMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const handleMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value);
    setIsTyping(true);
  };

  const handleSend = () => {
    onSendMessage(message);
    setMessage('');
    setIsTyping(false);
  };

  const handlePressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Box>
      <FormControl>
        { isTyping && <Text>typing...</Text>}
        <Input
          value={ message }
          onChange={ handleMessage }
          placeholder="type your message here"
          onKeyDown={ handlePressEnter }
        />
        <Button
          mt={ 4 }
          colorScheme="teal"
          type="button"
          backgroundColor="blue.100"
          onClick={ handleSend }
        >
          Send
        </Button>
      </FormControl>
    </Box>
  );
}

export default InputMessage;
