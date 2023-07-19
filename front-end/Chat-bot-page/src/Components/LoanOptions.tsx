import { Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useContext } from 'react';
import { ChatContext } from '../contexts/ChatContext';
import ISendMessage from '../interfaces/ISendMessage';

interface ILoanOptionProp {
  onSendMessage: (messageSent: ISendMessage) => void
}

const applyLoanMessage = 'If you want to apply for a loan, click on the link below';
const applyLoanLink = 'https://www.investopedia.com/articles/personal-finance/010516/how-apply-personal-loan.asp';
const loanConditionsLink = 'https://www.investopedia.com/loan-terms-5075341';
// eslint-disable-next-line max-len
const loanConditionsMessage = 'If you want to know more about loan conditions, click on the link below';
const helpMessage = 'Click on the link below for more help';
const helpLink = 'https://www.investopedia.com/search?q=loan';

function LoanOptions({ onSendMessage }: ILoanOptionProp) {
  const { setOptionLink, setOptionMessage, setShowSolutions } = useContext(ChatContext);
  const response: ISendMessage = {
    userId: 2,
    message: 'Ok! Great Choice!',
  };

  const handleOptionClick = (option: string) => {
    if (setOptionLink && setOptionMessage && setShowSolutions) {
      switch (option) {
        case 'a':
          setOptionMessage(applyLoanMessage);
          setOptionLink(applyLoanLink);
          setShowSolutions(true);
          onSendMessage(response);
          break;
        case 'b':
          setOptionMessage(loanConditionsMessage);
          setOptionLink(loanConditionsLink);
          setShowSolutions(true);
          onSendMessage(response);
          break;
        case 'c':
          setOptionMessage(helpMessage);
          setOptionLink(helpLink);
          setShowSolutions(true);
          onSendMessage(response);
          break;
        default:
          setOptionMessage('Chosen option');
          setOptionLink('Link');
          setShowSolutions(true);
          onSendMessage(response);
          break;
      }
    }
  };

  return (
    <Box p={ 4 }>
      <ButtonGroup spacing={ 4 } flexDirection="column">
        <Button
          onClick={ () => handleOptionClick('a') }
          colorScheme="blue"
          mb={ 4 }
        >
          Do you want to apply for a loan?
        </Button>
        <Button onClick={ () => handleOptionClick('b') } colorScheme="blue" mb={ 4 }>
          Loan conditions
        </Button>
        <Button onClick={ () => handleOptionClick('c') } colorScheme="blue">
          Help
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default LoanOptions;
