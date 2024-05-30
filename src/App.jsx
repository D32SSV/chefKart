import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ingredients/:dish" element={<Ingredients />} />
      </Routes>
    </>
  );
}

export default App;
