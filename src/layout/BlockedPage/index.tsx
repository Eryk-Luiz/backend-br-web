import React from 'react';
import { FiGithub } from 'react-icons/fi';
import Button from '../../components/Button';
import { Container } from './styles';

const BlockedPage: React.FC = () => {
  return (
    <Container>
      <div>
        <img src="assets/blocked.svg" alt="" />
        <h1>Limite de requisições excedidas</h1>

        <Button variant="primary" onClick={() => window.open('https://github.com/backend-br/vagas/')}>
          <FiGithub /> Repositório oficial
        </Button>
      </div>
    </Container>
  );
};

export default BlockedPage;
