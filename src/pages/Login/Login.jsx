import { styled } from 'styled-components';
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

const Label = styled.label`
  font-size: 1rem;
  font-size: 0.75rem;
  text-align: left;
`;

const InputCheckbox = styled.input`
  width: 1rem;
`;

const ForgotPassword = styled.a`
  font-size: 0.75rem;
  text-align: right;
  font-weight: normal;
  color: ${(props) => (props.isDarkMode ? '#6ab2ff' : '#007aff')};
  text-decoration: none;
  text-align: right;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 0.8rem;
`;

function Login() {
  const { isDarkMode } = useDarkMode();

  return (
    <LoginContainer isDarkMode={isDarkMode}>
      <Form action="POST">
        <H1>Login</H1>
        <EmailInput />
        <PasswordInput />
        <Input $flexdirection="row">
          <FlexRow>
            <InputCheckbox
              type="checkbox"
              name="remember-me"
              id="remember-me"
              title="remember-me"
            />
            <Label htmlFor="remember-me">Remember me</Label>
          </FlexRow>
          <ForgotPassword href="#" isDarkMode={isDarkMode}>
            Forgot password?
          </ForgotPassword>
        </Input>
        <Input>
          <Button type="submit">Login</Button>
          <GoogleButton>Login with Google</GoogleButton>
        </Input>
      </Form>
    </LoginContainer>
  );
}

export default Login;
