import React from 'react';
import Button from '@mui/material/Button';
import { ArrowOutward } from '@mui/icons-material';
import styles from './WPCard.module.css';
import { useRouter } from 'next/navigation';

interface Props {
  name: string;
  number: number;
}

const WpCard: React.FC<Props> = ({ name, number }) => {
  const router = useRouter();

  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <h4>{name}</h4>
        <div className={styles.card__circle}>
          <span className={styles.card__number}>{number}</span>
        </div>
      </div>
      <Button
        variant="outlined"
        startIcon={<ArrowOutward />}
        onClick={() => router.push(`/wp/work_package_${number}`)}
      >
        Подробнее
      </Button>
    </div>
  );
};

export default WpCard;
