// // // // import { useState } from 'react';
// // // // import Navbar from './components/Navbar';
// // // // import Greeting from './components/Greeting';
// // // // import Counter from './components/Counter';
// // // // import FetchUser from './components/FetchUser';
// // // // import ToggleMessage from './components/ToggleMessage';
// // // // import Toggle from './components/Toggle';
// // // // import SimpleCalculator from './components/SimpleCalculator';
// // // // import FormComponent from './components/FormComponent';

// // // // function App() {
// // // //   const [page, setPage] = useState('greeting');

// // // //   return (
// // // //     <div>
// // // //       <Navbar setPage={setPage} />

// // // //       <div style={{ padding: '20px' }}>
// // // //         {page === 'greeting' && <Greeting name="Alice"/>}
// // // //         {page === 'greeting' && <Greeting name="Bob"/>}
// // // //         {page === 'greeting' && <Greeting name="Charlie"/>}
// // // //         {page === 'counter' && <Counter />}
// // // //         {page === 'fetch' && <FetchUser />}
// // // //         {page === 'ToggleMessage' && <ToggleMessage/>}
// // // //         {page=== 'Toggle' && <Toggle/>}
// // // //         {page === 'SimpleCalculator' && <SimpleCalculator />}
// // // //         {page === 'FormComponent' && <FormComponent />}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;






// // // // import React, { useState } from 'react';
// // // // import { Routes, Route, Link } from 'react-router-dom';
// // // // import EmployeeForm from './components/EmployeeForm';
// // // // import EmployeeList from './components/EmployeeList';
// // // // import AdminPanel from './components/AdminPanel';
// // // // import HRPanel from './components/HRPanel';
// // // // import './App.css';
// // // // function App() {
// // // //   const [employees, setEmployees] = useState([]);

// // // //   const addEmployee = (employee) => {
// // // //     setEmployees([...employees, employee]);
// // // //   };

// // // //    const updateStatus = (id, newStatus) => {
// // // //   setEmployees(prev =>
// // // //     prev.map(emp =>
// // // //       emp.id === id ? { ...emp, status: newStatus } : emp
// // // //     )
// // // //   );
// // // // };




// // // //   return (
// // // //     <div>
// // // //       <nav>
// // // //         <Link to="/">Home</Link> | <Link to="/register">Register</Link> | <Link to="/employees">Employees</Link> | <Link to="/admin">Admin</Link> | <Link to="/hr">HR</Link>
// // // //       </nav>
// // // //       <Routes>
// // // //         <Route path="/" element={<h2>Welcome to Employee Management Dashboard</h2>} />
// // // //         <Route path="/register" element={<EmployeeForm addEmployee={addEmployee} />} />
// // // //         <Route path="/employees" element={<EmployeeList employees={employees} />} />
// // // //         <Route path="/admin" element={<AdminPanel employees={employees} updateStatus={updateStatus} />} />
// // // //         <Route path="/hr" element={<HRPanel employees={employees} />} />
// // // //       </Routes>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;



















// // // // import { useReducer, useState } from 'react';

// // // // const productsList = [
// // // //   { id: 1, name: 'Apples', price: 150 },
// // // //   { id: 2, name: 'Mangoes', price: 250 },
// // // //   { id: 3, name: 'Cherries', price: 100 },
// // // // ];


// // // // function cartReducer(cart, action) {
// // // //   switch (action.type) {
// // // //     case 'ADD':
// // // //       const existingItem = cart.find(item => item.id === action.payload.id);
// // // //       if (existingItem) {
// // // //         return cart.map(item =>
// // // //           item.id === action.payload.id
// // // //             ? { ...item, count: item.count + 1 }
// // // //             : item
// // // //         );
// // // //       } else {
// // // //         return [...cart, { ...action.payload, count: 1 }];
// // // //       }

// // // //     case 'REMOVE':
// // // //       return cart.filter(item => item.id !== action.payload.id);

// // // //     default:
// // // //       return cart;
// // // //   }
// // // // }

// // // // function App() {
// // // //   const [products] = useState(productsList);
// // // //   const [cart, dispatch] = useReducer(cartReducer, []);

// // // //   const handleAdd = (product) => {
// // // //     dispatch({ type: 'ADD', payload: product });
// // // //   };

// // // //   const handleRemove = (product) => {
// // // //     dispatch({ type: 'REMOVE', payload: product });
// // // //   };

// // // //   const totalCost = cart.reduce((total, item) => total + item.count * item.price, 0);

// // // //   return (
// // // //     <div style={{ padding: '20px' }}>
// // // //       <h2>Product List</h2>
// // // //       {products.map(product => (
// // // //         <div key={product.id} style={{ marginBottom: '10px' }}>
// // // //           <strong>{product.name}</strong> - ₹{product.price}{' '}
// // // //           <button onClick={() => handleAdd(product)}>Add</button>
// // // //         </div>
// // // //       ))}

// // // //       <h2>Cart</h2>
// // // //       {cart.length === 0 && <p>No items in cart.</p>}
// // // //       {cart.map(item => (
// // // //         <div key={item.id} style={{ marginBottom: '8px' }}>
// // // //           {item.name}: {item.count} x ₹{item.price} = ₹{item.count * item.price}{' '}
// // // //           <button onClick={() => handleRemove(item)}>Remove</button>
// // // //         </div>
// // // //       ))}

// // // //       <h3>Total Cost: ₹{totalCost}</h3>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default App;







// // // // App.js
// // // import React, { useState } from 'react';
// // // import ThemeContext from './components/ThemeContext';
// // // import Header from './components/Header';

// // // const App = () => {
// // //   const [theme, setTheme] = useState('light');

// // //   const toggleTheme = () => {
// // //     setTheme(theme === 'light' ? 'dark' : 'light');
// // //   };

// // //   return (
// // //     <ThemeContext.Provider value={{ theme, toggleTheme }}>
// // //       <Header />
// // //     </ThemeContext.Provider>
// // //   );
// // // };

// // // export default App;






// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import {
// // //   Table, TableBody, TableCell, TableContainer,
// // //   TableHead, TableRow, Paper, TablePagination
// // // } from '@mui/material';

// // // const App = () => {
// // //   const [products, setProducts] = useState([]);
// // //   const [page, setPage] = useState(0);
// // //   const [rowsPerPage, setRowsPerPage] = useState(10);

// // //   useEffect(() => {
// // //     axios.get('http://192.168.29.212:5000/products')
// // //       .then(res => setProducts(res.data))
// // //       .catch(err => console.error(err));
// // //   }, []);

// // //   const handleChangePage = (event, newPage) => setPage(newPage);
// // //   const handleChangeRowsPerPage = event => {
// // //     setRowsPerPage(+event.target.value);
// // //     setPage(0);
// // //   };

// // //   return (
// // //     <Paper sx={{ width: '80%', margin: 'auto', marginTop: 4 }}>
// // //       <TableContainer>
// // //         <Table>
// // //           <TableHead>
// // //             <TableRow>
// // //               <TableCell><strong>Name</strong></TableCell>
// // //               <TableCell><strong>Price</strong></TableCell>
// // //               <TableCell><strong>Category</strong></TableCell>
// // //               <TableCell><strong>In Stock</strong></TableCell>
// // //             </TableRow>
// // //           </TableHead>
// // //           <TableBody>
// // //             {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
// // //               .map((product, idx) => (
// // //               <TableRow key={idx}>
// // //                 <TableCell>{product.name}</TableCell>
// // //                 <TableCell>{product.price}</TableCell>
// // //                 <TableCell>{product.category}</TableCell>
// // //                 <TableCell>{product.inStock ? "Yes" : "No"}</TableCell>
// // //               </TableRow>
// // //             ))}
// // //           </TableBody>
// // //         </Table>
// // //       </TableContainer>
// // //       <TablePagination
// // //         component="div"
// // //         count={products.length}
// // //         page={page}
// // //         onPageChange={handleChangePage}
// // //         rowsPerPage={rowsPerPage}
// // //         onRowsPerPageChange={handleChangeRowsPerPage}
// // //       />
// // //     </Paper>
// // //   );
// // // };

// // // export default App;





// // // App.jsx
// // import { Routes, Route, Navigate } from 'react-router-dom';
// // import NewProfile from './pages/NewProfile';
// // import AllProfiles from './pages/AllProfiles';
// // import ProfilePage from './pages/ProfilePage';
// // import Navbar from './components/Navbar';

// // function App() {
// //   return (
// //     <>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/new-profile" element={<NewProfile />} />
// //         <Route path="/all-profiles" element={<AllProfiles />} />
// //         <Route path="/profile/:id" element={<ProfilePage />} />
// //         <Route path="*" element={<Navigate to="/new-profile" />} />
// //       </Routes>
// //     </>
// //   );
// // }

// // export default App;







// // import React from 'react';
// // import ProductTable from './components/ProductTable';

// // function App() {
// //   return (
// //     <div>
// //       <ProductTable />
// //     </div>
// //   );
// // }

// // export default App;


















// import React from 'react';
// import { Routes, Route, Navigate, Outlet } from 'react-router-dom';
// import Login from './components/login';
// import Register from './components/register';
// import ProductTable from './components/ProductTable';
// import Navbar from './components/Navbar';

// const isAuthenticated = () => {
//   try {
//     const auth = JSON.parse(localStorage.getItem('auth'));
//     return !!auth?.token;
//   } catch {
//     return false;
//   }
// };

// const PrivateRoute = () => {
//   return isAuthenticated() ? <Outlet /> : <Navigate to="/login" />;
// };

// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Navigate to={isAuthenticated() ? '/products' : '/login'} />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />

//         <Route element={<PrivateRoute />}>
//           <Route path="/products" element={<ProductTable />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;















// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';


// function App() {
//   const [destination, setDestination] = useState('');
//   const [dates, setDates] = useState('');
//   const [interests, setInterests] = useState('');
//   const [plan, setPlan] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("http://localhost:5000/plan", {
//       destination,
//       dates,
//       interests
//     });
//     setPlan(res.data.plan);
//   };

//   return (
//     <div className="app-container">
//       <h2>AI Travel Planner (Groq + LLaMA3)</h2>
//       <form onSubmit={handleSubmit}>
//         <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" required />
//         <input value={dates} onChange={e => setDates(e.target.value)} placeholder="Dates (e.g. July 10-15)" required />
//         <input value={interests} onChange={e => setInterests(e.target.value)} placeholder="Interests (e.g. food, museums)" required />
//         <button type="submit">Get Plan</button>
//       </form>
//       {plan && (
//         <div className="travel-plan">
//           <h3>Travel Plan:</h3>
//           {plan}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




// import { useState } from 'react';
// import axios from 'axios';
// import './App.css';

// function App() {
//   const [source, setSource] = useState('');
//   const [destination, setDestination] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [interests, setInterests] = useState('');
//   const [plan, setPlan] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await axios.post("http://localhost:5000/plan", {
//       source,
//       destination,
//       startDate,
//       endDate,
//       interests
//     });
//     setPlan(res.data.plan);
//   };

//   return (
//     <div className="app-container">
//       <h2>AI Travel Planner</h2>
//       <form onSubmit={handleSubmit}>
//         <input value={source} onChange={e => setSource(e.target.value)} placeholder="Source Location" required />
//         <input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Destination" required />
//         <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} required />
//         <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} required />
//         <input value={interests} onChange={e => setInterests(e.target.value)} placeholder="Interests (e.g. food, museums)" required />
//         <button type="submit">Get Plan</button>
//       </form>
//       {plan && (
//         <div className="travel-plan">
//           <h3>Travel Plan:</h3>
//           {plan}
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;




import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [interests, setInterests] = useState('');
  const [budget, setBudget] = useState('');
  const [plan, setPlan] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/plan", {
      source,
      destination,
      startDate,
      endDate,
      interests,
      budget,  // include budget here
    });
    setPlan(res.data.plan);
  };

  return (
    <div className="app-container">
      <h2>AI Travel Planner</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={source}
          onChange={e => setSource(e.target.value)}
          placeholder="Source Location"
          required
        />
        <input
          value={destination}
          onChange={e => setDestination(e.target.value)}
          placeholder="Destination"
          required
        />
        <input
          type="date"
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          required
        />
        <input
          type="date"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          required
        />
        <input
          value={interests}
          onChange={e => setInterests(e.target.value)}
          placeholder="Interests (e.g. food, museums)"
          required
        />
        <input
          value={budget}
          onChange={e => setBudget(e.target.value)}
          placeholder="Budget (e.g. 1000 USD)"
          required
        />
        <button type="submit">Get Plan</button>
      </form>

      {plan && (
        <div className="travel-plan">
          <h3>Travel Plan:</h3>
          {plan}
        </div>
      )}
    </div>
  );
}

export default App;
