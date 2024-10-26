import { BrowserRouter, Route, Routes } from "react-router-dom";

//* páginas
import Forum from "./pages/Forum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
