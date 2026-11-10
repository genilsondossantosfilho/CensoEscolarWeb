import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./views/Home";
import InstituicoesDeEnsino from "./views/InstituicoesDeEnsino";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="instituicoes" element={<InstituicoesDeEnsino />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
