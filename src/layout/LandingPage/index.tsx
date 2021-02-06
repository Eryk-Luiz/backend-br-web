import React, { useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import api from '../../services/api';
import { Container } from './styles';

const LandingPage: React.FC = () => {
  const [vacanciesCount, setVacanciesCount] = useState(0);

  const router = useRouter();

  useEffect(() => {
    api
      .get('/repos/backend-br/vagas')
      .then(({ data }) => setVacanciesCount(data.open_issues_count));
  }, []);

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
        <span className="vacanciesCounter">{vacanciesCount}</span>
      </main>
    </Container>
  );
};

export default LandingPage;
