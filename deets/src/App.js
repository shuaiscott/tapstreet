import React, { useEffect, useState } from 'react';
import './App.css';
import List from './components/List';
import withListLoading from './components/withListLoading';
function App() {
  const ListLoading = withListLoading(List);
  const [appState, setAppState] = useState({
    loading: false,
    deet: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = `http://localhost:8010/proxy/deets/224eb4ec-251e-400c-81a1-e9bf59660532`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((deet) => {
        setAppState({ loading: false, deet: deet });
      });
  }, [setAppState]);
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