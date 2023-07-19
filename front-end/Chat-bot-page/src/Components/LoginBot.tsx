import { Box, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useContext, useState } from 'react';
import ISendMessage from '../interfaces/ISendMessage';
import { ChatContext } from '../contexts/ChatContext';

interface ILoginBotProps {
  username: string | 'username';
  password: string | 'password';
  onSendMessage: (message: ISendMessage) => void;
}

function LoginBot({ username, password, onSendMessage }: ILoginBotProps) {
  const [inputUsername, setInputUsername] = useState<string>(username || '');
  const [inputPassword, setInputPassword] = useState<string>(password || '');
  const { setShowLogin } = useContext(ChatContext);

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputUsername(event.target.value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputUsername === username && inputPassword === password && setShowLogin) {
      localStorage.setItem('username', username);
      setShowLogin(false);
      onSendMessage({ userId: 2, message: 'Successfully logged in!' });
      onSendMessage({
        userId: 2,
        // eslint-disable-next-line max-len
        message: `Hello ${username}, If you want loan options just send me the message 'loan'`,
      });
    } else {
      onSendMessage({ userId: 2, message: 'Invalid username or password!' });
    }
  };

  return (
    <Box>
      <form onSubmit={ handleSubmit }>
        <FormControl>
          <FormLabel>Username</FormLabel>
          <Input
            type="text"
            name="username"
            value={ inputUsername }
            onChange={ handleChangeUsername }
          />
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            name="password"
            value={ inputPassword }
            onChange={ handleChangePassword }
          />
        </FormControl>
        <Button type="submit" colorScheme="teal" mt={ 4 }>
          Log In
        </Button>
      </form>
    </Box>
  );
}

export default LoginBot;
