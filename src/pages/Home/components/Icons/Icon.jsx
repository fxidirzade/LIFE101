import { styled } from 'styled-components';
import { useDarkMode } from '../../../../contexts/DarkModeContext';

const IconComponent = styled.span`
  width: 24px;
  height: 24px;
  object-fit: cover;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.isDarkMode ? '#f4f4f4' : '#333')};
`;

function Icon({ children }) {
  const { isDarkMode } = useDarkMode();

  return <IconComponent isDarkMode={isDarkMode}>{children}</IconComponent>;
}

export default Icon;
