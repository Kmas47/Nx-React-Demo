import { Suspense } from 'react';

interface ISuspenseLoader {
  children: React.ReactNode;
}

export const SuspenseLoader: React.FC<ISuspenseLoader> = ({ children }) => {
  return <Suspense fallback={<LoaderTemplate />}>{children}</Suspense>;
};

export const LoaderTemplate = () => {
  return (
    <div>
      <p>Loading . . .</p>
    </div>
  );
};
