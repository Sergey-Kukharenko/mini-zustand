import './App.css';
import { CardList } from './components/CardList';
import { Cart } from './components/Cart';
import { CategoryPicker } from './components/CategoryPicker';
import { SearchInput } from './components/SearchInput';

function App() {
  return (
    <div className='wrapper'>
      <SearchInput />
      <CategoryPicker />
      <div style={{ display: 'flex' }}>
        <CardList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
