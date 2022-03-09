import { GlobalStyle } from "./styled-app";
import Routers from "./routers/Routes";
import GlobalState from "./global/GlobalState";

function App() {
  
  return (
    <GlobalState>
      <GlobalStyle/>
       <Routers/>

    </GlobalState>
  );
}

export default App;