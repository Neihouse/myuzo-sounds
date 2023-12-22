import React, { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import SampleList from '../components/SampleList';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { searchSamples } from '../utils/searchSamples';

// Sample type based on the SampleListProps
type Sample = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  audioUrl: string;
};

const SearchPage = () => {
  const [samples, setSamples] = useState<Sample[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  useEffect(() => {
    // Assume getCategories is a function that fetches categories
    // This is a placeholder and should be replaced with actual function call
    setCategories(['All', 'Pop', 'Jazz', 'Classical']); // Example categories
    setSelectedCategory('All'); // Default to 'All' category
  }, []);

  const handleSearch = async (query: string) => {
    const searchResults = await searchSamples(query);
    setSamples(searchResults);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <FilterBar categories={categories} selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
      <SampleList samples={samples} onSampleSelect={() => {}} />
    </div>
  );
};

export default SearchPage;
