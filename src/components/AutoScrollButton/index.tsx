import React from 'react';
import { FiArrowUp } from 'react-icons/fi';
import { Container } from './styles';

const AutoScrollButton: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Container onClick={scrollTop}>
      <FiArrowUp size={36} />
    </Container>
  );
};

export default AutoScrollButton;
