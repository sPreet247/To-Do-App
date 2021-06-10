import './styles.css';
import Header from 'components/Header';
import Add from 'components/Add';
import List from 'components/List';
function App() {
  return (
    <div className="App">
      <h1>TO DO</h1>
      <Header />
      <Add />
      <List />
    </div>
  );
}
export default App;
