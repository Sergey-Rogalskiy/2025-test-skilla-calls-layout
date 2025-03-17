import { Filters, Limits, Table } from "./components";

import "./App.css";
import { Header, MainContainer } from "./styles";

function App() {
  return (
    <MainContainer>
      <Header>
        <Filters />
        <Limits />
      </Header>
      <Table />
    </MainContainer>
  );
}

export default App;
