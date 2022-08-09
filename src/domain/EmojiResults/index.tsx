import { FC, memo } from 'react';

import EmojiResultRow from './components/EmojiResultRow';

type Props = {
  emojiList: EmojiList;
};

const EmojiResults: FC<Props> = memo((props) => (
  <div>
    {props.emojiList.map((emoji) => (
      <EmojiResultRow key={emoji.title} symbol={emoji.symbol} title={emoji.title} />
    ))}
  </div>
));

export default EmojiResults;
