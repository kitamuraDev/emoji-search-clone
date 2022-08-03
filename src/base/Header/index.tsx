import { FC, memo } from 'react';

import Image from '../Image';
import './header.css';

const Header: FC = memo(() => (
  <header className='component-header'>
    <Image src='//cdn.jsdelivr.net/emojione/assets/png/1f638.png' width={32} height={32} alt='laughing cat' />
    Emoji Search
    <Image src='//cdn.jsdelivr.net/emojione/assets/png/1f63a.png' width={32} height={32} alt='surprised cat' />
  </header>
));

export default Header;
