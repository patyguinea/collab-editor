import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Routes from './components/Routes/Routes';

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Routes />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
