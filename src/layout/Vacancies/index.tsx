import React, { useCallback, useEffect, useState } from 'react';
import { FiGithub } from 'react-icons/fi';
import InfiniteScroll from 'react-infinite-scroll-component';
import Button from '../../components/Button';
import SkeletonCards from '../../components/SkeletonCard';
import TagsSelector, { ILabel } from '../../components/TagsSelector';
import VacationCard from '../../components/VacationCard';
import api from '../../services/api';
import { CardsWrapper, Container } from './styles';

export interface IVacancies {
  title: string;
  created_at: Date;
  html_url: string;
  labels: ILabel[];
}

const Vacancies: React.FC = () => {
  const [labels, setLabels] = useState([]);
  const [pages, setPages] = useState(1);
  const [selectedTags, setSelectedTags] = useState<ILabel[]>([]);
  const [vacancies, setVacancies] = useState<IVacancies[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const handleGetLabels = useCallback(async () => {
    const { data } = await api.get(
      '/repos/backend-br/vagas/labels?per_page=100',
    );

    setLabels(data);
  }, []);

  const fetchVacancies = useCallback(async () => {
    const formattedLabels = selectedTags.map(label => label.name).join(',');

    const { data } = await api.get(
      `/repos/backend-br/vagas/issues?state=open&page=1&per_page=20&labels=${formattedLabels}`,
    );

    setVacancies(data);
  }, [selectedTags]);

  const fetchMore = useCallback(async () => {
    const { data } = await api.get(
      `/repos/backend-br/vagas/issues?state=open&per_page=50&page=${
        pages + 1
      }&labels=${formatLabels(selectedTags)}`,
    );

    if (data.length === 0) {
      setHasMore(false);
    }

    setVacancies([...vacancies, ...data]);
    setPages(pages + 1);
  }, [vacancies, selectedTags, pages]);

  const formatLabels = (tags: ILabel[]) => {
    const formattedLabels = tags.map(label => label.name).join(',');

    return formattedLabels;
  };

  useEffect(() => {
    fetchVacancies();
  }, [selectedTags, fetchVacancies]);

  useEffect(() => {
    handleGetLabels();
  }, [handleGetLabels]);

  return (
    <Container>
      <header>
        <h1>Backend Brasil</h1>
        <h2>Agregador de vagas para desenvolvedores backend</h2>

        <Button
          variant="secondary"
          onClick={() =>
            window.open('https://github.com/Eryk-Luiz/backend-br-web')
          }
        >
          <FiGithub size={22} />
          Repositório
        </Button>
      </header>

      <section>
        <div>
          <label>Buscar por tags</label>
          <TagsSelector
            selectedTags={selectedTags}
            setSelectedTags={value => setSelectedTags(value)}
            labels={labels}
          />
        </div>
      </section>

      {vacancies.length > 0 ? (
        <InfiniteScroll
          style={{ width: '100%' }}
          dataLength={vacancies.length}
          next={fetchMore}
          hasMore={selectedTags.length === 0 && hasMore}
          // eslint-disable-next-line prettier/prettier
          loader={(
            <CardsWrapper>
              <SkeletonCards />
              <SkeletonCards />
              <SkeletonCards />
            </CardsWrapper>
            // eslint-disable-next-line prettier/prettier
        )}
        >
          <main>
            <CardsWrapper>
              {vacancies &&
                vacancies.map(vacancie => (
                  <VacationCard key={vacancie.html_url} {...vacancie} />
                ))}
            </CardsWrapper>
          </main>
        </InfiniteScroll>
      ) : (
        <>
          <img src="assets/emptyState.svg" alt="Nenhum resultado" />

          <h2>Nenhuma vaga encontrada</h2>
        </>
      )}
    </Container>
  );
};

export default Vacancies;
