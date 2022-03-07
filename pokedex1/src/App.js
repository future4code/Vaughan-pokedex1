import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalStyle } from "./styled-app";
import Details from './pages/Details/Details'

function App() {
  return (
    <div>
      <GlobalStyle/>
        <Header/>
       <h1>APP</h1>
       <HomePage/>
       <Details/>
    </div>
  );
}

export default App;