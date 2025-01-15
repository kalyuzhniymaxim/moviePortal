import React from 'react';
import ContentLoader from 'react-content-loader';

const MoviesCardSceleton = (props) => (
  <ContentLoader
    speed={0.9}
    width={322}
    height={534}
    viewBox="0 0 322 534"
    backgroundColor="#f3f3f3"
    foregroundColor="#ddd5d5"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="322" height="480" />
    <rect x="0" y="495" rx="0" ry="0" width="80" height="22" />
    <rect x="256" y="490" rx="0" ry="0" width="60" height="34" />
  </ContentLoader>
);

export default MoviesCardSceleton;
