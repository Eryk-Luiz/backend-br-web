import React from 'react';
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
        <Button variant="primary" onClick={() => router.push('/vagas')}>
          {`Ver ${open_issues_count} vagas`}
        </Button>
      </main>
    </Container>
  );
};

export default LandingPage;
