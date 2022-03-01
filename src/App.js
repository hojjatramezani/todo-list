import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  ThemeProvider } from '@mui/material/styles';
import Home from './pages/home/home';
import {theme} from './config'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
