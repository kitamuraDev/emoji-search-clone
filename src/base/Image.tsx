import { FC, memo } from 'react';

type ImagePropsType = Readonly<{
  src: string;
  width: number;
  height: number;
  alt?: string;
}>;

const Image: FC<ImagePropsType> = memo((props) => (
  <img src={props.src} width={props.width} height={props.height} alt={props.alt} />
));

export default Image;
