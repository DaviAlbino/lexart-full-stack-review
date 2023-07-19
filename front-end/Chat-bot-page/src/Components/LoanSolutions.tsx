import { Box, Link, Text } from '@chakra-ui/react';
import IOptionProp from '../interfaces/IOptionProp';

interface ILoanSolutionsProps {
  chosenOption: IOptionProp | undefined;
}

function LoanSolutions({ chosenOption }: ILoanSolutionsProps) {
  return (
    <Box
      p={ 4 }
      borderWidth="1px"
      borderRadius="md"
      backgroundColor="gray.100"
      key={ chosenOption?.opId }
    >
      <Text fontWeight="bold" mb={ 2 }>{chosenOption?.opMessage}</Text>
      <Link
        href={ chosenOption?.opLink }
        color="blue.500"
        isExternal
      >
        {chosenOption?.opLink}
      </Link>
    </Box>
  );
}

export default LoanSolutions;
