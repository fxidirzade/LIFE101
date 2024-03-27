import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import Card from '../../../components/Card/Card';

const MenuComponent = styled.nav`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 420px) {
    font-size: 0.8rem;
  }
`;

function Menu() {
  return (
    <MenuComponent>
      <Link to="/events">
        <Card>Events 🎉</Card>
      </Link>
      <Link to="/receipts">
        <Card>Receipts 🧾</Card>
      </Link>
      <Link to="/discounts">
        <Card>Discounts 🛍️</Card>
      </Link>
      <Link to="/workouts">
        <Card>Workout 💪</Card>
      </Link>
      <Link to="/finance">
        <Card>Finance 💰</Card>
      </Link>
    </MenuComponent>
  );
}

export default Menu;
