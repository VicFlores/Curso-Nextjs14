'use client';

import { ErrorPageProps } from 'app/types';

const Error = (props: ErrorPageProps) => {
  return (
    <div style={{ padding: '10rem' }}>
      <h1>:c</h1>

      <p>
        There was an error while trying to fetch the products. Please try again
        later.
      </p>

      <button onClick={props.reset}>Try again</button>
    </div>
  );
};

export default Error;
