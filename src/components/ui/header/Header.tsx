'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import euLogo from '../../../../public/logo/eu_logo.jpg';
import Navigation from '@/components/ui/header/Navigation';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__top}>
        <div className="container">
          <div className={styles.header__info}>
            <PhoneIcon
              sx={{
                fontSize: { xs: '13px', sm: '15px', md: '20px' },
                marginRight: { xs: '4px', sm: '8px', md: '10px' },
              }}
            />
            <span>+996 312-54-51-62</span>
            <span className={styles.divider}>|</span>
            <EmailIcon
              sx={{
                fontSize: { xs: '13px', sm: '15px', md: '20px' },
                marginRight: { xs: '4px', sm: '8px', md: '10px' },
              }}
            />
            <span>green@kstu.kg</span>
            <span className={styles.divider}>|</span>
            <PlaceIcon
              sx={{
                fontSize: { xs: '13px', sm: '15px', md: '20px' },
                marginRight: { xs: '3px', sm: '8px', md: '10px' },
              }}
            />
            <span>пр. Ч. Айтматова 66</span>
          </div>
        </div>
      </div>
      <div className={styles.logo}>
        <Image src={euLogo} alt="Логотип" width={250} height={53} priority />
      </div>
      <div className={'container'}>
        <div className={styles.header__nav}>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
