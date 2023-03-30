import './App.css';
import { Routes, Route } from "react-router";
import Home from './pages/Home';
import AllPhones from './pages/Phones/AllPhones';
import NotFound from './pages/NotFound';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<AllPhones />} />
        
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
