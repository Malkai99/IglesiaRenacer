import './App.css';
import Layout from './components/Layout';
import { Router } from './router/router';

const App = () => {



  return (
    <div className="App">
      <Layout>
        <Router />
      </Layout>
    </div>
    
  );
}

export default App;
