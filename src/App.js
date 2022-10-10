import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Container from "@mui/material/Container";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Container sx={{ paddingBottom: "2rem" }}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/question" element={<Question />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
