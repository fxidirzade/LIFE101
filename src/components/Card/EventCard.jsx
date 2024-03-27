import { styled } from 'styled-components';

import Card from './Card';
import { Link } from 'react-router-dom';
import { useDarkMode } from '../../contexts/DarkModeContext';

const EventCardImage = styled.div`
  width: 100%;
  height: 150px;
  object-fit: cover;
  padding: 0;
  margin: 0;
  overflow: hidden;
  border-radius: 1rem 1rem 0 0;

  @media screen and (max-width: 420px) {
    height: 150px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  filter: ${(props) => (props.isDarkMode ? 'brightness(0.75)' : 'none')};

  &:hover {
    transform: scale(1.1);
  }
`;

const EventCardDivider = styled.hr`
  border: 0;
  border-top: 1px solid ${(props) => (props.isDarkMode ? '#f4f4f4' : '#999')};
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const EventCardTitle = styled.div`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

const EventCardDate = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

function EventCard({ id, title, date, image, imageAlt }) {
  const { isDarkMode } = useDarkMode();

  return (
    <Link to={`event/${id}`}>
      <Card $ispadding={false}>
        <EventCardImage>
          <Img src={image} alt={imageAlt} isDarkMode={isDarkMode} />
        </EventCardImage>
        <EventCardDivider isDarkMode={isDarkMode} />
        <EventCardTitle>{title}</EventCardTitle>
        <EventCardDate>{date}</EventCardDate>
      </Card>
    </Link>
  );
}

export default EventCard;
