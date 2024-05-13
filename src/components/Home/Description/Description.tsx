'use client';

import Image from 'next/legacy/image';
import styles from './Description.module.css';
import { useState } from 'react';

const PLACEHOLDER_IMAGE =
  'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAXEAEBAQEAAAAAAAAAAAAAAAAAAREC/8QAFwEBAQEBAAAAAAAAAAAAAAAAAQACA//EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A5oMNIgDagoOEqFk4qJiozSZiHjFaIHgwFNKqqa1AmkdJuMgAFFhKDm2kGGoAcBwsqipCipBUch4ch4zSnBi8KwFnYmtLEWGBFSupraIAIHgUTm6JBk1AFQoqNMqi5ExcCVIeHIqQBOFYvCsBZ2IsaWI6SZVNX0itIgAksAVzbIjpNxBUTFwhfLSM+WnKZXFJi4AE1RUJFZ9NKz6SZdIq+kUkgAisqAy0VIAxHFREVGg15acsuWnKDSLjOVcDJlRpWhJrPpdZ9JM+kVfTOkgEElaWlpaGj0hpaSqKiNVKU15q+aylXKA2lVKzlVKGV6m0tK1AWs+qq1n1Uk9IqrUUogAiWlpaWoarS0tGpqK1UqNOVNNZVyspVyhNZVSspVagvRanStTJ2otFqbUE1NOprSAIIM9GkCNPQRhuHFRMOBuLlXKzioC0lVrOKAVo1ITItTadTWoyVSdIgAAhkAEIAAnSGqAMtxUVAAVQwADACZqaVAajNTSAIIAEP//Z';

export const Description = () => {
  const [hasBorder, setHasBorder] = useState(false);

  const handleClick = () => setHasBorder(!hasBorder);

  return (
    <section className={styles.Description}>
      <button
        onClick={handleClick}
        className={`${styles.Description__button} ${
          hasBorder ? styles.Description__buttonBorder : ''
        } `}
      >
        <figure className={styles.Description__imageContainer}>
          <Image
            src={'/images/description.jpeg'}
            alt='products marketplace'
            priority={false}
            layout='fill'
            placeholder='blur'
            blurDataURL={PLACEHOLDER_IMAGE}
          />
        </figure>
      </button>

      <div className={styles.Description__text}>
        <h2>Bring the future today</h2>
        <p>
          Future World: Your Gateway to Tomorrows Tech! Dive into a world of
          cutting-edge gadgets and gear. Stay ahead of the curve and redefine
          your digital lifestyle with us.
        </p>
      </div>
    </section>
  );
};
