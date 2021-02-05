import React, { useCallback, useEffect, useState } from 'react';
import TagsSelector from '../../components/tagsSelector';
import VacationCard from '../../components/VacationCard';
import api from '../../services/api';
import { CardsWrapper, Container } from './styles';

interface ILabel {
  id: number;
  node_id: string;
  url: string;
  name: string;
  color: string;
  default: boolean;
  description: string | null;
}

export interface IVacancies {
  title: string;
  created_at: Date;
  html_url: string;
  labels: ILabel[];
}

const Vacancies: React.FC = () => {
  const [labels, setLabels] = useState([]);
  const [selectedTags, setSelectedTags] = useState<ILabel[]>([]);
  const [vacancies, setVacancies] = useState<IVacancies[]>();

  const handleGetLabels = useCallback(async () => {
    const { data } = await api.get(
      '/repos/backend-br/vagas/labels?per_page=100',
    );

    setLabels(data);
  }, []);

  const fetchVacancies = useCallback(async () => {
    const formattedLabels = selectedTags.map(label => label.name).join(',');

    const { data } = await api.get(
      `/repos/backend-br/vagas/issues?state=open&page=1&labels=${formattedLabels}`,
    );

    setVacancies(data);
  }, [selectedTags]);

  useEffect(() => {
    fetchVacancies();
  }, [selectedTags]);

  useEffect(() => {
    handleGetLabels();
  }, [handleGetLabels]);

  return (
    <Container>
      <header>
        <div>
          <label>Buscar por tags</label>
          <TagsSelector
            selectedTags={selectedTags}
            setSelectedTags={value => setSelectedTags(value)}
            labels={labels}
          />
        </div>
      </header>

      <main>
        <CardsWrapper>
          {vacancies &&
            vacancies.map(vacancie => (
              <VacationCard key={vacancie.html_url} {...vacancie} />
            ))}
        </CardsWrapper>
      </main>
    </Container>
  );
};

export default Vacancies;
