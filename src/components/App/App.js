import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Landing from '../Landing/Landing';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <ScrollToTop />
        <Landing />
      </BrowserRouter>
    </div>
  );
}

export default App;
