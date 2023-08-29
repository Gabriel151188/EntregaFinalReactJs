import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import MyComponent from "./components/ItemList";






function App() {
 

  return (
    <div >
      <div className="row" style={{ backgroundColor: 'lightblue', padding: '20px', display: "flex", justifyContent:"space-between"}}>
     
      

      <NavBar />
      </div>

      <Routes>
        <Route path="/" element={<ItemListContainer />}/>
        <Route path="/category/:categoryId" element={<ItemListContainer />}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>} />
      </Routes>   

      
         
    
    </div>
  );
}

export default App
