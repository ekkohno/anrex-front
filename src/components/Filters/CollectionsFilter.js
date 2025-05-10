import React, { useCallback, useState } from 'react';

const CollectionsFilter = ({ collections, onFilterChange }) => {
  const [selectedCollections, setSelectedCollections] = useState([]);

  const toggleCollection = useCallback((collection) => {
    const updatedSelections = selectedCollections.includes(collection)
      ? selectedCollections.filter((c) => c !== collection)
      : [...selectedCollections, collection];

    setSelectedCollections(updatedSelections);
    onFilterChange(updatedSelections);
  }, [selectedCollections, onFilterChange]);

  return (
    <div className="flex flex-col mb-4">
      <p className="text-[16px] text-black mt-5 mb-5">Коллекции</p>
      <div className="flex flex-wrap px-2">
        {collections?.map((collection, index) => (
          <div key={index} className="flex flex-col mr-2">
            <div
              className={`w-auto border text-center text-[14px] mb-2 px-3 py-1 rounded-lg cursor-pointer hover:scale-110 border-gray-500 text-gray-500`}
              style={selectedCollections.includes(collection) ? { background: "#7F9441", color: "white" } : {}}
              onClick={() => toggleCollection(collection)}
            >
              {collection}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionsFilter;
