import { styled } from 'styled-components';

import Input from './Input';

const Label = styled.label`
  font-family: 'Rubik', sans-serif;
  font-size: 1rem;
  font-size: 0.75rem;
  font-weight: bold;
`;

const InputComponent = styled.input`
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid #999;
`;

function PasswordInput({ children }) {
  return (
    <Input>
      <Label htmlFor="password">Password</Label>
      <InputComponent
        type="password"
        name="password"
        id="password"
        title="password"
        placeholder="********"
      />
      {children}
    </Input>
  );
}

export default PasswordInput;
