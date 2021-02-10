import React, { useContext } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Container } from './styles';
import { ThemeContext } from 'styled-components';

const SkeletonCards: React.FC = () => {
  const theme = useContext(ThemeContext);

  return (
    <SkeletonTheme color={theme.colors.small} highlightColor={theme.colors.effect}>
      <Container>
        <h3>
          <Skeleton width="100%" />
        </h3>

        <div>
          <Skeleton width={30} height={23} count={14} wrapper="" />
        </div>
        <span>
          <Skeleton width="40%" />
        </span>
      </Container>
    </SkeletonTheme>
  );
};

export default SkeletonCards;
