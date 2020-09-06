import React from 'react';
import s from './assets/styles/App.module.css';
import SearchGitPage from './components/pages/SearchGitPage';

const App = () => {
  return (

    <div className={s.container}>
     <SearchGitPage/>
    </div>
  );
}
export default App;
