import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { Container } from './styles';

const SkeletonCards: React.FC = () => {
  return (
    <SkeletonTheme color="#d3d3d3" highlightColor="#b1b1b1">
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
