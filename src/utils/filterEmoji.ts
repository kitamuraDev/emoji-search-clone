import emojiListJson from '../store/emojiList.json';

const emojiList: EmojiList = emojiListJson;

const filterEmoji = (searchText: string, maxResults: number): EmojiList =>
  emojiList
    .filter((emoji) => {
      if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) return true;
      if (emoji.keywords.includes(searchText)) return true; // There are no uppercase letters in keywords, so we don't use ".toLowerCase()"

      return false;
    })
    .slice(0, maxResults);

export default filterEmoji;
