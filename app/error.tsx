// app/error.tsx

'use client';

import { useEffect } from 'react';
import styles from './styles/Error.module.css';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className={styles.button}>
        Try Again
      </button>
    </div>
  );
}
