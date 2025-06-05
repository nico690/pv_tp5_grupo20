import NavBar from './components/NavBar';
import AppRouter from './router/AppRouter';

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
