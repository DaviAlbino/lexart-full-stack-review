import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
} from '@chakra-ui/icons';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={ useColorModeValue('blue.500', 'gray.800') }
        color={ useColorModeValue('gray.600', 'white') }
        minH="60px"
        py={ { base: 2 } }
        px={ { base: 4 } }
        borderBottom={ 1 }
        borderStyle="solid"
        borderColor={ useColorModeValue('gray.200', 'gray.900') }
        align="center"
      >
        <Flex
          flex={ { base: 1, md: 'auto' } }
          ml={ { base: -2 } }
          display={ { base: 'flex', md: 'none' } }
        >
          <IconButton
            onClick={ onToggle }
            icon={
                isOpen ? <CloseIcon w={ 3 } h={ 3 } /> : <HamburgerIcon w={ 5 } h={ 5 } />
              }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Flex flex={ { base: 1 } } justify={ { base: 'center', md: 'start' } }>
          <Text
            textAlign={ useBreakpointValue({ base: 'center', md: 'left' }) }
            fontFamily="heading"
            color={ useColorModeValue('white', 'white') }
          >
            Lexart Chat Bot
          </Text>

        </Flex>

        <Stack
          flex={ { base: 1, md: 0 } }
          justify="flex-end"
          direction="row"
          spacing={ 6 }
        >
          <Button
            as="a"
            display={ { base: 'none', md: 'inline-flex' } }
            fontSize="sm"
            fontWeight={ 600 }
            color="white"
            bg="pink.400"
            href="#"
            _hover={ {
              bg: 'pink.300',
            } }
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

    </Box>
  );
}
