import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/home/home';
import Information from './pages/home/information';
import { theme } from './config'
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/information" element={<Information />} />
            <Route exact path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </ThemeProvider>
  );
}

export default App;
