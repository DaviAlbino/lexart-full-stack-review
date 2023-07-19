import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import ISendMessage from '../interfaces/ISendMessage';
import IOptionProp from '../interfaces/IOptionProp';

interface ILoanOptionProp {
  onSendMessage: (messageSent: ISendMessage) => void;
}

const optionsList: IOptionProp[] = [
  {
    opId: 1,
    opMessage: 'If you want to apply for a loan, click on the link below',
    opLink: 'https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp',
  },
  {
    opId: 2,
    opMessage: 'If you want to know more about loan conditions, click on the link below',
    opLink: 'https://www.investopedia.com/loan-terms-5075341',
  },
  {
    opId: 3,
    opMessage: 'Click on the link below for more help',
    opLink: 'https://www.investopedia.com/search?q=loan',
  },
];

const response: ISendMessage[] = [
  {
    userId: 2,
    message: 'Ok! Great Choice to apply for a loan!',
  },
  {
    userId: 2,
    message: 'Ok! Great choice for loan conditions!',
  },
  {
    userId: 2,
    message: 'Ok! Great choice for help!',
  },
  {
    userId: 2,
    message: 'You need to choose something!',
  },
];

function LoanOptions({ onSendMessage }: ILoanOptionProp) {
  const { setOptionList } = useContext(ChatContext);

  const handleOptionClick = (option: number) => {
    if (setOptionList) {
      setOptionList(optionsList);
      switch (option) {
        case 1:
          onSendMessage(response[0]);
          break;
        case 2:
          onSendMessage(response[1]);
          break;
        case 3:
          onSendMessage(response[2]);
          break;
        default:
          onSendMessage(response[3]);
          break;
      }
    }
  };

  return (
    <Box p={ 4 }>
      <ButtonGroup spacing={ 4 } flexDirection="column">
        <Button
          onClick={ () => handleOptionClick(1) }
          colorScheme="blue"
          mb={ 4 }
        >
          Do you want to apply for a loan?
        </Button>
        <Button onClick={ () => handleOptionClick(2) } colorScheme="blue" mb={ 4 }>
          Loan conditions
        </Button>
        <Button onClick={ () => handleOptionClick(3) } colorScheme="blue">
          Help
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default LoanOptions;
