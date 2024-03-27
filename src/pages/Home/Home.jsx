import { styled } from 'styled-components';

import Header from './components/Header';
import Menu from './components/Menu';
import Content from './components/Content';

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const H3 = styled.h3`
  font-family: 'Rubik', sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  transform: translateY(1.5rem);
`;

function Home() {
  return (
    <Container>
      <Header />
      <Menu />
      <H3>Recents</H3>
      <Content />
    </Container>
  );
}

export default Home;
