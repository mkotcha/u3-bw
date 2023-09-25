import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Test from './components/Test';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
