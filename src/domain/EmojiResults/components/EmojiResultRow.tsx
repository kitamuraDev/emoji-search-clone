import { FC, memo } from 'react';

import CopyToClipboard from 'react-copy-to-clipboard';
import './emojiResultRow.css';

type Props = {
  title: string;
  symbol: string;
};

const EmojiResultRow: FC<Props> = memo((props) => {
  const codePointHex = props.symbol.codePointAt(0)?.toString(16)!; // undefined never come
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <CopyToClipboard text={props.symbol}>
      <div className='component-emoji-result-row'>
        <img alt={props.title} src={src} />
        <span className='title'>{props.title}</span>
        <span className='info'>Click to copy emoji</span>
      </div>
    </CopyToClipboard>
  );
});

export default EmojiResultRow;
