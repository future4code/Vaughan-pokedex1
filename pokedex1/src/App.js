import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalStyle } from "./styled-app";

function App() {
  return (
    <div>
      <GlobalStyle/>
        <Header/>
       <h1>APP</h1>
       <HomePage/>
    </div>
  );
}

export default App;