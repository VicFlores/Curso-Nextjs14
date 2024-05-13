import Image from 'next/image';
import styles from './GlobalError.module.css';
import { FC } from 'react';
import { ErrorPageProps } from 'app/types';

export const GlobalError: FC<{ props: ErrorPageProps }> = ({ props }) => {
  return (
    <main className={styles.Error}>
      <h1 className={styles.Error__title}>Ha ocurrido un error</h1>

      <Image src='/images/error.png' alt='Error' width={300} height={300} />

      <p className={styles.Error__message}>
        Al parecer ha ocurrido un error :c
      </p>

      <button className={styles.Error__button} onClick={props.reset}>
        Volver a intentar
      </button>
    </main>
  );
};
