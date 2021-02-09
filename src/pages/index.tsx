import { GetStaticProps } from 'next';
import React from 'react';
import LandingPage from '../layout/LandingPage';
import api from '../services/api';

type LandingProps = {
  open_issues_count: number;
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('/repos/backend-br/vagas');

  return {
    props: {
      open_issues_count: data.open_issues_count,
    },
    revalidate: 20,
  };
};
const Landing: React.FC<LandingProps> = ({ open_issues_count }) => (
  <LandingPage open_issues_count={open_issues_count} />
);

export default Landing;
