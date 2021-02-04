import React from 'react';
import { CardsWrapper, Container } from './styles';

const Vacancies: React.FC = () => {
  return (
    <Container>
      <header>
        <label>Buscar por tags</label>
        <input type="text" id="filter" />
      </header>

      <main>
        <CardsWrapper>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </CardsWrapper>
      </main>
    </Container>
  );
};

export default Vacancies;
