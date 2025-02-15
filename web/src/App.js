import AppProvider from './context/AppProvider';
import Router from './routes';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
// import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import NotFoundPage from './pages/NotFoundPage';
// import Users from './pages/dashboardLayout/employees/Users';
// import UsersStatus from './pages/dashboardLayout/employees/UsersStatus';
// import Vehicles from './pages/dashboardLayout/vehicles/Vehicles';
// import VehiclesStatus from './pages/dashboardLayout/vehicles/VehiclesStatus';
// import Tracking from './pages/dashboardLayout/Tracking';
// import DashboardLayout from './pages/dashboardLayout';
// import Dashboard from './pages/dashboardLayout/dashboard';
// import SingleEmployee from './pages/dashboardLayout/employees/SingleEmployee';
// import SingleVehicle from './pages/dashboardLayout/vehicles/SingleVehicle';

// function App() {
//   const user = localStorage.getItem("user")
//   console.log(user)
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={!user ? <LoginPage/> : <Navigate to="/dashboard"/>}/>
//         <Route path='/register' element={<RegisterPage/>}/>
//         <Route path="/*" element={<NotFoundPage/>} />
//         <Route path='/dashboard' element={user ? <DashboardLayout/> : <Navigate to="/dashboard"/>}>
//           <Route
//             index
//             element={<Dashboard/>}
//           />
//           <Route
//             path='employees'
//             element={<Users/>}
//           />
//           <Route
//             path='employees/:id'
//             element={<SingleEmployee/>}
//           />
//           <Route
//             path='employees-status'
//             element={<UsersStatus/>}
//           />
//           <Route
//             path='vehicles'
//             element={<Vehicles/>}
//           />
//           <Route
//             path='vehicles/:id'
//             element={<SingleVehicle/>}
//           />
//           <Route
//             path='vehicles-status'
//             element={<VehiclesStatus/>}
//           />
//           <Route
//             path='tracking'
//             element={<Tracking/>}
//           />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
