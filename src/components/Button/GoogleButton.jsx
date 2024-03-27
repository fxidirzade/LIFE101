import { styled } from 'styled-components';
import { useDarkMode } from '../../contexts/DarkModeContext';

const ButtonComponent = styled.button`
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-family: 'Rubik', 'Roboto', sans-serif;
  font-weight: bold;
  cursor: pointer;
  background-color: ${(props) => (props.isDarkMode ? '#000' : '#fff')};
  color: ${(props) => (props.isDarkMode ? '#f4f4f4' : '#000')};
  border: 1px solid ${(props) => (props.isDarkMode ? '#666' : '#999')};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.isDarkMode ? '#111' : '#f4f4f4')};
  }
`;

function GoogleButton({ children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <ButtonComponent type="submit" isDarkMode={isDarkMode}>
      <img
        src="https://img.icons8.com/color/16/000000/google-logo.png"
        alt="google-logo"
      />
      {children}
    </ButtonComponent>
  );
}

export default GoogleButton;
