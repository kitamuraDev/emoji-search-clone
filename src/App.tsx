import Header from './base/Header';
import emojiList from './store/emojiList.json';

const emojis: EmojiList = emojiList;
console.log(emojis);

const App = () => <Header />;

export default App;
