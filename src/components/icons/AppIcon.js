import React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 512 640" {...props}>
    <ellipse cx={150.898} cy={255.809} rx={64.989} ry={65.523} />
    <path d="M256 1C115.167 1 1 115.167 1 256s114.167 255 255 255 255-114.167 255-255S396.833 1 256 1zm105.102 344.942c-1.983 0-3.944-.088-5.894-.216a16.1 16.1 0 0 1-4.345.598H147.847c-1.704 0-3.329-.273-4.837-.75-45.675-4.03-81.51-42.667-81.51-89.765 0-49.779 40.025-90.133 89.398-90.133s89.397 40.354 89.397 90.133c0 26.597-11.432 50.496-29.605 66.994h90.62c-18.173-16.498-29.605-40.397-29.605-66.994 0-49.779 40.025-90.133 89.397-90.133 49.373 0 89.398 40.354 89.398 90.133s-40.025 90.133-89.398 90.133z" />
    <ellipse cx={361.102} cy={255.809} rx={64.989} ry={65.523} />
  </svg>
);

export default SvgComponent;