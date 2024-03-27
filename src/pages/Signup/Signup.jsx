import { styled } from 'styled-components';
import FullNameInput from '../../components/Input/FullNameInput';
import EmailInput from '../../components/Input/EmailInput';
import PasswordInput from '../../components/Input/PasswordInput';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import GoogleButton from '../../components/Button/GoogleButton';
import { useDarkMode } from '../../contexts/DarkModeContext';

const LoginContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: ${(props) => (props.isDarkMode ? '#555' : '#fff')};
  padding: 1rem;
  border-radius: 1rem;
  border-color: ${(props) => (props.isDarkMode ? '#f4f4f4' : '#999')};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H1 = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const PasswordRequirements = styled.p`
  font-size: 0.75rem;
  font-weight: normal;
  color: ${(props) => (props.isDarkMode ? '#f4f4f4' : '#999')};
`;

function Signup() {
  const { isDarkMode } = useDarkMode();

  return (
    <LoginContainer isDarkMode={isDarkMode}>
      <Form action="POST">
        <H1>Signup</H1>
        <FullNameInput />
        <EmailInput />
        <PasswordInput>
          <PasswordRequirements isDarkMode={isDarkMode}>
            At least 8 characters long
          </PasswordRequirements>
        </PasswordInput>
        <Input>
          <Button type="submit">Signup</Button>
          <GoogleButton>Signup with Google</GoogleButton>
        </Input>
      </Form>
    </LoginContainer>
  );
}

export default Signup;
