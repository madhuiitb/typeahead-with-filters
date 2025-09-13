import { useCallback, useEffect, useState } from 'react'
import styles from './App.module.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SkeltonSearchCard from './components/SkeltonSearchCard';
import {METADATA } from "./data/fakeData";
import ResultsCard from './components/ResultsCard';
import NoResults from './components/NoResults';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(null);
  const [searchData, setSearchData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchResultCounter, setSearchResultCounter] = useState({
    all: 0,
    files: 0,
    people: 0,
    chats: 0,
    lists:0
  });
  const [activeTab, setActiveTab] = useState({
    all: true,
    files: false,
    people: false,
    chats: false,
    lists: false,
  });
  const [groupedData, setGroupedData] = useState({});  

  const debounce = (func, delay) => {
    let timer = null;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay)
    }
  };

  const groupBy = (data) => {
    const results = {};
    data.forEach((item) => {
      const cat = item.type;
      if (!results[cat]) {
        results[cat]=[];
      }
      results[cat].push(item);
    })
    
   setSearchResultCounter({
     all: data.length,
     files: results.files ? results.files.length : 0,
     people: results.people ? results.people.length : 0,
     chats: results.chats ? results.chats.length : 0,
     lists: results.lists ? results.lists.length : 0,
   });
    
    return results;
  }


  const runSearch = (query) => {
    const data = METADATA.filter((item) =>
      item.file_name.toLowerCase().includes(query.toLowerCase())
    );
    setSearchData(data);
    setGroupedData(groupBy(data));
    setLoading(false);
  };

const debouncedSearch = useCallback(debounce(runSearch, 500),[]);

  const handleSearch = (value) => {
    setSearchValue(value)
  }

   const clearSearch = () => {
     setSearchValue("");
     setSearchData([]);
   };
  
  const handleActiveTab = (tab) => {
    setActiveTab({
      all: false,
      files: false,
      people: false,
      chats: false,
      lists: false,
      [tab]: true,
    });
  }

  useEffect(() => {
      const activeKey = Object.keys(activeTab).find((key) => activeTab[key]);

    if (activeKey === "all") {
      setFilteredData(searchData);
    }
    else {
      setFilteredData(groupedData[activeKey] || []);
    }
          
    },[activeTab, searchData, groupedData])
  
  useEffect(() => {
    if (searchValue) {
      setLoading(true);
      debouncedSearch(searchValue);
    } else {
      setLoading(false);
      setSearchData([]);
    }
  }, [searchValue, debouncedSearch]);

  return (
    <>
      <div className={styles.wrapper}>
        <SearchBar
          searchValue={searchValue}
          handleSearch={handleSearch}
          clearSearch={clearSearch}
          loading={loading}
        />
        {searchValue && (
          <>
            <div>
              <NavBar
                searchResultCounter={searchResultCounter}
                activeTab={activeTab}
                handleActiveTab={handleActiveTab}
              />
            </div>
            <div>
              {loading
                ? [2, 3, 4, 5, 6].map((item, index) => (
                    <SkeltonSearchCard key={index} />
                  ))
                : filteredData.map((item, index) => (
                    <ResultsCard key={index} card={item} />
                  ))}
            </div>
          </>
        )}
        {!loading && searchValue && filteredData.length===0 && (
          <NoResults />
        )}
      </div>
    </>
  );
}

export default App
