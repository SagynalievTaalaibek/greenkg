import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Box from '@mui/material/Box';
import styles from './NewsCard.module.css';
import { Typography } from '@mui/material';
import Link from 'next/link';

const NewsCard = () => {
  return (
    <Box className={styles.news__card}>
      <h5 className={styles.news__title}>Lorem ipsum dolor sit amet.</h5>
      <Typography
        sx={{ color: '#777', marginBottom: '30px', fontSize: '15px' }}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, sequi.
      </Typography>
      <div className={styles.card__dates}>
        <p className={styles.card__dates_text}>
          <strong>Дата: </strong>
          26.01.2025
        </p>
        <Link className={styles.card__btn} href={`#`}>
          <ArrowOutwardIcon />
        </Link>
      </div>
    </Box>
  );
};

export default NewsCard;
