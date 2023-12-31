'use client';

import React, { useEffect, useState } from 'react';
import { useSearch } from '../context/SearchContext';
import { fetchDataFromDB } from '../db';

const SearchResultsPage: React.FC = () => {
  const { searchValue } = useSearch();
  const [searchData, setSearchData] = useState<
    { id: number; title: string; content: string }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataFromDB = await fetchDataFromDB();
        setSearchData(dataFromDB);
      } catch (error) {
        console.error('Error fetching data from the database:', error);
      }
    };

    fetchData();
  }, [searchValue]); // Refetch data when searchValue changes

  const highlightInitials = (text: string, search: string): React.ReactNode => {
    const index = text.toLowerCase().indexOf(search.toLowerCase());
    if (index !== -1) {
      return (
        <>
          <span>{text.substring(0, index)}</span>
          <span style={{ fontWeight: 'bold' }}>
            {text.substring(index, index + search.length)}
          </span>
          <span>{text.substring(index + search.length)}</span>
        </>
      );
    }
    return text;
  };

  const renderResults = () => {
    if (searchValue.trim() === '') {
      return;
    }

    const filteredResults = searchData.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    if (filteredResults.length === 0) {
      return <p>⚒️ NO Result ⚒️</p>;
    }

    return (
      <>
        <h2>Search Results</h2>
        {filteredResults.map(result => (
          <div key={result.id}>
            <h3>{highlightInitials(result.title, searchValue)}</h3>
            <p>{result.content}</p>
          </div>
        ))}
      </>
    );
  };

  return <div>{renderResults()}</div>;
};

export default SearchResultsPage;
