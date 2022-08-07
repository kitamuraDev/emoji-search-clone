/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';

import Header from './base/Header';
import filterEmoji from './utils/filterEmoji';

const App = () => {
  const [filterdEmoji, setFilteredEmoji] = useState<EmojiList>(filterEmoji('', 20));

  return <Header />;
};

export default App;
