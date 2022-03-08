import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import { GlobalStyle } from "./styled-app";
import Routers from "./routers/Routes";

function App() {
  return (
    <div>
      <GlobalStyle/>
       <Routers/>

    </div>
  );
}

export default App;