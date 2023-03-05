'use client'
import {FC} from 'react';
import styles from './Footer.module.scss';
import {usePathname, useRouter} from "next/navigation";


interface IFooterProps {
}

const navItems = [
  {
    icon: 'home',
    link: '/'
  },
  {
    icon: 'explore',
    link: '/explore'
  },
  {
    icon: 'place',
    // link: '/place/kyoto'
    link: '/place'
  },
  {
    icon: 'person_outline',
    link: '/profile'
  },
]

export const Footer: FC<IFooterProps> = () => {
  const pathname = usePathname()
  const {push} = useRouter()
  console.log(pathname)
  return (
    <footer className={styles.footer}>
      <nav>
        {navItems.map((item) => (

            <button key={item.icon}
                    onClick={() => push(item.link)}
                    className={pathname === item.link ? styles.active : ''}
            >
              <span className='material-icons-outlined'>{item.icon}</span>
            </button>
          )
        )}
      </nav>
    </footer>
  );
};