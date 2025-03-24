// import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';
import Food from './components/Food';
import AddFood from './components/AddFood';
import FoodList from './components/FoodList';
import DeleteFood from './components/DeleteFood';
import SearchFood from './components/SearchFood';
import UpdateFood from './components/UpdateFood';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import NavClient from './components/NavClient';
import AddOrder from './components/AddOrder';
import Billing from './components/Billing';
import SearchOrder from './components/SearchOrder';
import ExpenseList from './components/ExpenseList';
import './components/Super31.css';
import './components/Super32.css';
// import './components/Super33.css';






function App() {
  return (
    <div className="App">
      <div class="container text-center mt-5">
        <h2 class="mb-4 text-success alert alert-success fade show expense-header">EXPENSE MANAGEMENT APPLICATION</h2>
        
      </div>

      
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/billing" element={<Billing/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/nav" element={<Nav/>}/>
        <Route path="/navclient" element={<NavClient/>}/>
        <Route path="/addorder" element={<AddOrder/>}/>
        <Route path="/flist" element={<FoodList/>}/>
        <Route path="/elist" element={<ExpenseList/>}/>
        <Route path="/scost" element={<SearchFood/>}/>
        <Route path="/slist" element={<SearchOrder/>}/>

        <Route path="/cost" element={<Food/>}>

          <Route path="acost" element={<AddFood/>}/>
          <Route path="dcost" element={<DeleteFood/>}/>
          <Route path="ucost" element={<UpdateFood/>}/>

        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
