import { FC, memo } from 'react';

import Input from '../../base/Input';
import './searchInput.css';

const SearchInput: FC<InputProps> = memo((props) => (
  <div className='component-search-input'>
    <Input handleChange={props.handleChange} />
  </div>
));

export default SearchInput;
