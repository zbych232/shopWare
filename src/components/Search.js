import React, { useContext, useCallback, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ShopwareListContext } from '../contexts/ShopwareListContext';
import debounce from 'lodash.debounce';
import './Search.scss';

function Search() {
  const { setSearchValue } = useContext(ShopwareListContext);
  const [value, setValue] = useState('');

  const changeHandler = event => {
    setSearchValue(event.target.value);
  };
  const debouncedChangeHandler = useCallback(debounce(changeHandler, 1000), []);

  const handleChange = e => {
    setValue(e.target.value);
    debouncedChangeHandler(e);
  };

  const onClearClick = () => {
    setSearchValue('');
    setValue('');
  };

  return (
    <div className="search-wrapper">
      <div>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search..."
            aria-label="Search"
            aria-describedby="search"
            onChange={handleChange}
            value={value}
          />
          <Button
            variant="outline-secondary"
            id="search"
            onClick={onClearClick}
          >
            X
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default Search;
