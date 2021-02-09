import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import { Container } from './styles';

type LandingProps = {
  open_issues_count: number;
};

const LandingPage: React.FC<LandingProps> = ({ open_issues_count }) => {
  const router = useRouter();
  return (
    <Container>
      <header>
        <h1>Backend Brasil</h1>
        <h2>Agregador de vagas para desenvolvedores backend</h2>
      </header>
      <main>
        <div>
          <Button variant="primary" onClick={() => router.push('/vagas')}>
            Vagas
          </Button>
          <Button
            variant="secondary"
            onClick={() =>
              window.open('https://github.com/Eryk-Luiz/backend-br-web')
            }
          >
            <FiGithub size={22} />
            Repositório
          </Button>
        </div>

        <span>Total de vagas:</span>
        <span className="vacanciesCounter">{open_issues_count}</span>
      </main>
    </Container>
  );
};

export default LandingPage;
