import { MainContent } from './components/MainContent';
import { Sidebar } from './components/sidebar';
import './styles/components/app.scss';

function App() {

  return (
    <div id="portfolio">
      <h1>Josiel Alves da Silva Junior</h1>
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App;
