import { FC, memo, useEffect, useRef } from 'react';

const Input: FC<InputProps> = memo((props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <input type='text' ref={inputRef} onChange={(event) => props.handleChange(event)} />
    </div>
  );
});

export default Input;
