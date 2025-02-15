'use client';

import styles from './page.module.css';
import Box from '@mui/material/Box';
import { WP } from '@/constans/wp';
import NewsCard from '@/components/ui/news/NewsCard';
import WPCard from '@/components/wp_ui/WPCard';

export default function Home() {
  return (
    <>
      <div style={{ marginBottom: '100px' }}>
        <div className={styles.mainPage}>
          <div className="container">
            <h5 className={styles.main__title}>
              GREEN AND DIGITAL UNIVERSITIES
            </h5>
            <h5 className={styles.main__title}>FOR SUSTAINABLE DEVELOPMENT</h5>
            <h5 className={styles.main__title}>OF KYRGYZSTAN</h5>
          </div>
        </div>
        <Box sx={{ backgroundColor: '#ECFFE8', pb: 4 }}>
          <div className="container">
            <h4 className={styles.section__title}>Work Packages</h4>
            <div className={styles.cards}>
              {WP.map((item) => (
                <WPCard key={item.id} name={item.name} number={item.number} />
              ))}
            </div>
          </div>
        </Box>
        <div className="container">
          <h4 className={styles.section__title}>Last News</h4>
          <div className={styles.news__cards}>
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </>
  );
}
