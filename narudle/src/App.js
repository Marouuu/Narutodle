import konoha from './public/images/NarudleLogo.png';
import './App.css';
import SearchBar from './components/searchBar';

function App() {
  return (
    <div className='body-container'>
      <div className='App-logo'>

        <img src={konoha} alt='Konoha' />
      </div>
      <SearchBar/>
   </div>
  );
}

export default App;
