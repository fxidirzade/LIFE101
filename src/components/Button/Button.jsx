import { styled } from 'styled-components';
import { useDarkMode } from '../../contexts/DarkModeContext';

const ButtonComponent = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => (props.isDarkMode ? '#6ab2ff' : '#007aff')};
  color: #fff;
  font-family: 'Rubik', 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#7fc0ff' : '#0069d9')};
  }
`;

function Button({ children, type = 'button' }) {
  const { isDarkMode } = useDarkMode();

  return (
    <ButtonComponent type={type} isDarkMode={isDarkMode}>
      {children}
    </ButtonComponent>
  );
}

export default Button;
