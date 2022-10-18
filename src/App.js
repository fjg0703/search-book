import Header from "./components/Header";
import Home from "./components/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Wishlist from "./components/Wishlist";
import BookCards from "./components/BookCards";




function App() {
  return (
    <Router>
      <div className="App">
      <Header/>  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} /> 
        {/* <Route path="/bookcards" element={<BookCards />} /> */}
      </Routes>
    
    </div>


      
    </Router>
      
    
  );
}

export default App;

