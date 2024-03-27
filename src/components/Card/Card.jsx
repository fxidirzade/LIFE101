import { styled } from 'styled-components';
import { useDarkMode } from '../../contexts/DarkModeContext';

const CardComponent = styled.div`
  font-family: 'Rubik', 'Roboto', sans-serif;
  color: ${(props) => (props.isDarkMode ? '#f4f4f4' : '#333')};
  background-color: ${(props) => (props.isDarkMode ? '#555' : '#ebebf3')};
  border-radius: 1rem;
  display: inline-block;
  padding: ${(props) => (props.$ispadding ? '1rem' : '0')};
  position: relative;
  width: 100%;
  height: 100%;
  font-weight: bold;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 0 1px ${(props) => (props.isDarkMode ? '#aaa' : '#999')};
  }
`;

function Card({ children, $ispadding = true }) {
  const { isDarkMode } = useDarkMode();

  return (
    <CardComponent isDarkMode={isDarkMode} $ispadding={$ispadding}>
      {children}
    </CardComponent>
  );
}

export default Card;
