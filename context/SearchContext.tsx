// SearchContext.tsx
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect
} from 'react';
import { fetchDataFromDB } from '../db';

interface SearchContextProps {
  children: ReactNode;
}

interface SearchContextType {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<SearchContextProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>('');

  useEffect(() => {
    // effect for search results
  }, [searchValue]);

  return (
    <SearchContext.Provider value={{ searchValue, setSearchValue }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = (): SearchContextType => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};
