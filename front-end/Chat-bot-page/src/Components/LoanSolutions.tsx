import { Box, Link, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';

interface ILoanSolutionsProps {
  optionMessage: string | undefined;
  optionLink: string | undefined;
}

function LoanSolutions({ optionMessage, optionLink }: ILoanSolutionsProps) {
  const { setShowSolutions } = useContext(ChatContext);
  return (
    <Box p={ 4 } borderWidth="1px" borderRadius="md" backgroundColor="gray.100">
      <Text fontWeight="bold" mb={ 2 }>{optionMessage}</Text>
      <Link
        href={ optionLink }
        color="blue.500"
        isExternal
        onClick={ () => setShowSolutions(false) }
      >
        {optionLink}
      </Link>
    </Box>
  );
}

export default LoanSolutions;
