import React, { useState, useMemo } from 'react';

export const ShopwareListContext = React.createContext({});

const initialQueryBody = {
  limit: 10,
};

export const ShopwareListProvider = ({ children }) => {
  const [sortOrderValue, setSortOrderValue] = useState('price-asc');
  const [searchValue, setSearchValue] = useState('');

  const setQueryBody = (sortOrderValue, searchValue) => {
    if (searchValue) {
      return {
        ...initialQueryBody,
        ...{ search: searchValue },
        ...{
          order: sortOrderValue,
        },
      };
    } else {
      return {
        ...initialQueryBody,
        ...{
          order: sortOrderValue,
        },
      };
    }
  };

  const queryBody = useMemo(
    () => setQueryBody(sortOrderValue, searchValue),
    [sortOrderValue, searchValue],
  );

  return (
    <ShopwareListContext.Provider
      value={{
        setSortOrderValue,
        setSearchValue,
        sortOrderValue,
        searchValue,
        queryBody,
      }}
    >
      {children}
    </ShopwareListContext.Provider>
  );
};
