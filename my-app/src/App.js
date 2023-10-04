import css from './App.module.css';
import Sidebar from './components/Sidebar';
import NavBarForm from './components/NavBarForm';
import Contents from './components/Contents';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm />
      <Sidebar />
      <Contents />
    </div>
  );
}

export default App;