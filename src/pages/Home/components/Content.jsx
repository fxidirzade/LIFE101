import { styled } from 'styled-components';

import data from '../../../data/data.json';

import EventCard from '../../../components/Card/EventCard';

const ContentComponent = styled.section`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(3, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

function Content() {
  const { recents } = data;

  return (
    <ContentComponent>
      {recents.map((recent) => (
        <EventCard key={recent.id} {...recent} />
      ))}
    </ContentComponent>
  );
}

export default Content;
