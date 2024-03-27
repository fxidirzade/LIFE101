import { styled } from 'styled-components';

const InputComponent = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-direction: ${(props) => props.$flexdirection};
  justify-content: ${(props) =>
    props.$flexdirection === 'row' ? 'space-between' : 'flex-start'};
  align-items: ${(props) =>
    props.$flexdirection === 'row' ? 'center' : 'stretch'};
`;

function Input({ children, $flexdirection = 'column' }) {
  return (
    <InputComponent $flexdirection={$flexdirection}>{children}</InputComponent>
  );
}

export default Input;
