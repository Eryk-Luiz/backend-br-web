import React, { useCallback } from 'react';
import tinyColor from 'tinycolor2';
import { IVacancies } from '../../layout/Vacancies';
import { Container } from './styles';

const VacationCard: React.FC<IVacancies> = ({
  title,
  labels,
  created_at,
  html_url,
}) => {
  const resolveColor = useCallback(hex => {
    const color = tinyColor(hex);

    return color.isLight() ? '000' : 'fff';
  }, []);

  const formateDate = useCallback(date => {
    const dateSplit = date.split('T');
    const ymd = dateSplit[0].split('-');

    return `${ymd[2]}/${ymd[1]}/${ymd[0]}`;
  }, []);

  return (
    <Container
      onClick={() => {
        window.open(html_url, '_blank');
      }}
    >
      <h1>{title}</h1>

      <div>
        {labels &&
          labels.map(label => (
            <span
              style={{
                backgroundColor: `#${label.color}`,
                color: `#${resolveColor(label.color)}`,
              }}
            >
              {label.name}
            </span>
          ))}
      </div>

      <span className="publicationDate">
        Publicado em:
        {formateDate(created_at)}
      </span>
    </Container>
  );
};

export default VacationCard;
