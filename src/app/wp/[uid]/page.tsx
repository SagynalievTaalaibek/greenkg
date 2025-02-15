import { ArrowRight } from '@mui/icons-material';
import { createClient } from '@/prismicio';
import { notFound } from 'next/navigation';
import { SliceZone } from '@prismicio/react';
import { components } from '@/slices';
import styles from './page.module.css';

type Params = { uid: string };

export default async function Page({ params }: { params: Promise<Params> }) {
  const { uid } = await params;
  const client = createClient();
  const page = await client
    .getByUID('work_package', uid)
    .catch(() => notFound());

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <h4 className={styles.wp__title}>Tasks of {page.data.title}</h4>
        <div className={styles.tasks}>
          {page.data.tasks.map((item, i) => (
            <div className={styles.task} key={`task-${i}`}>
              <ArrowRight
                sx={{
                  fontSize: {
                    xs: '25px',
                    sm: '35px',
                    md: '40px',
                  },
                }}
              />
              {item.task}
            </div>
          ))}
        </div>
        <h4 className={styles.wp__title}>Results of {page.data.title}</h4>
        <div className={styles.results}>
          <SliceZone slices={page.data.slices} components={components} />
        </div>
      </div>
    </div>
  );
}
