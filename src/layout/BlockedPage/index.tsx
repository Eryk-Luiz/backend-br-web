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
        <h2>
          Você pode procurar as vagas diretamente do repositório enquanto isso!
        </h2>

        <Button variant="secondary">
          <FiGithub size={18} />
          Repositório
        </Button>
      </div>
    </Container>
  );
};

export default BlockedPage;
