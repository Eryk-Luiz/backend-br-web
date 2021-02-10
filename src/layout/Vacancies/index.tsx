import React, { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
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
      <section>
        <div>
          <TagsSelector
            selectedTags={selectedTags}
            setSelectedTags={value => setSelectedTags(value)}
            labels={labels}
          />
        </div>
      </section>

      <InfiniteScroll
        style={{ width: '100%' }}
        dataLength={vacancies.length}
        next={fetchMore}
        hasMore
        loader={
          <CardsWrapper>
            <SkeletonCards />
            <SkeletonCards />
            <SkeletonCards />
          </CardsWrapper>
        }
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
    </Container>
  );
};

export default Vacancies;
