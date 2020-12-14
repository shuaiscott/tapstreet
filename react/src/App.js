import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
import useQueryParam from './useQueryParam';
function App() {
  const [deet_id] = useQueryParam('id', '');
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    deet: null
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "https://api.deets.tapme.org/deets/"+ deet_id;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((deet) => {
        setAppState({ loading: false, deet: deet });
      });
  }, [setAppState, deet_id]);
  return (
    <div className='App'>
      <div className='repo-container'>
        <ListLoading isLoading={appState.loading} deet={appState.deet} />
      </div>
      <footer>
        <div className='footer'>
          
        </div>
      </footer>
    </div>
  );
}
export default App;