import { useState } from 'react';

import Header from './base/Header';
import SearchInput from './case/SearchInput';
import EmojiResults from './domain/EmojiResults';
import filterEmoji from './utils/filterEmoji';

const App = () => {
  const [filterdEmoji, setFilteredEmoji] = useState<EmojiList>(filterEmoji('', 20));

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const resultFilterEmoji = filterEmoji(event.target.value, 20);
    setFilteredEmoji(resultFilterEmoji);
  };

  return (
    <div>
      <Header />
      <SearchInput handleChange={handleSearchChange} />
      <EmojiResults emojiList={filterdEmoji} />
    </div>
  );
};

export default App;
