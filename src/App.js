import logo from './logo.svg';
import './App.css';
import AddLibrary from './components/AddLibrary';
import SearchLibrary from './components/SearchLibrary';
import DeleteLibrary from './components/DeleteLibrary';
import VeiwallLibrary from './components/VeiwallLibrary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAllapi from './components/ViewAllapi';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddLibrary />} />
        <Route path='/SearchLibrary' element={<SearchLibrary />} />
        <Route path='/DeleteLibrary' element={<DeleteLibrary />} />
        <Route path='/ViewallLibrary' element={<VeiwallLibrary />} />
        <Route path='/Viewallapi' element={<ViewAllapi />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
