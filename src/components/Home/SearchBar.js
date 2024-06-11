import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
  ];

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value) {
      const filteredItems = items.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filteredItems);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full  bg-gray-100 p-4">
      <div className="w-full ">
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {results.length > 0 && (
          <div className="mt-2 grid grid-cols-6 gap-4">
            {results.map((result, index) => (
              <div key={index} className="p-4 bg-white rounded-lg shadow-lg">
                {result}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;