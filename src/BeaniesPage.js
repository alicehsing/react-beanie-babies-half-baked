import { useEffect, useState } from 'react';
import './App.css';
import { getBeanieBabies } from './services/fetch-utils';
import BeaniesList from './BeaniesList.js';

function App() {
  const [beanieBabies, setBeanieBabies] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 40;
  const [currentQuery, setCurrentQuery] = useState('');
  const [filteredBeanies, setFilteredBeanies] = useState([]);
  
  useEffect(() => {
    async function fetch() {
      const from = page * perPage - perPage;
      const to = page * perPage;
      const beanies = await getBeanieBabies(from, to);

      setBeanieBabies(beanies);
    }
    fetch();
    
    const tempFilter = beanieBabies.filter(beanie => beanie.title.includes(currentQuery));
    setFilteredBeanies(tempFilter);
    
  }, [page, currentQuery, beanieBabies]); // what can you do with this array to trigger a fetch every time the page changes?

  return (
    <>
      <h2>Current Page: {page}</h2>
      <div className='search'>
        <input value={currentQuery} placeholder='Search' type='text' onChange={(e) => setCurrentQuery(e.target.value)}/>
      </div>
      <div className='buttons'>
        {/* on click, this button should decrement the page in state  */}
        {/* also, disable this button when you are on the first page */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}>Previous Page</button>
        {/* on click, this button should increment the page in state  */}
        <button 
          onClick={() => setPage(page + 1)}
          disabled={beanieBabies.length < perPage}>Next Page</button>
      </div>
      {/* pass the beanie babies into the BeaniesList component */}
      <BeaniesList beanieBabies={
        //stretch goal: add a search bar
        // if the filteredBeanies has a length, use that array. Otherwise, use the beanieBabies array.
        filteredBeanies.length
          ? filteredBeanies
          : beanieBabies
      }/>
    </>
  );
}

export default App;
