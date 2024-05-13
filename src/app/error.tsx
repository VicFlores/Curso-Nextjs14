'use client';

import { GlobalError } from 'app/components';

interface GlobalErrorProps {
  reset: () => void;
}

const Error = (props: GlobalErrorProps) => {
  return <GlobalError props={props} />;
};

export default Error;
