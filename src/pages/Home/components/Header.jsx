import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

import DarkModeIcon from './Icons/DarkModeIcon';
import ProfileIcon from './Icons/ProfileIcon';
import SettingsIcon from './Icons/SettingsIcon';

const HeaderComponent = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

const HeaderIcons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;
`;

const H1 = styled.h1`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 1rem;
  margin: 0;
`;

function Header() {
  return (
    <HeaderComponent>
      <H1>LIFE101</H1>
      <HeaderIcons>
        <Link>
          <DarkModeIcon />
        </Link>
        <Link to="/profile">
          <ProfileIcon />
        </Link>
        <Link to="/settings">
          <SettingsIcon />
        </Link>
      </HeaderIcons>
    </HeaderComponent>
  );
}

export default Header;
