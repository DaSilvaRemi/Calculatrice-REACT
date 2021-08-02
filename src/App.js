import React from "react";
import Container from '@material-ui/core/Container';
import Calculator from "./components/Calculator";

function App() {
  return (
    <div>
      <Container className="app" maxWidth="sm">
        <Calculator></Calculator>
      </Container>
    </div>
  );
}

export default App;
