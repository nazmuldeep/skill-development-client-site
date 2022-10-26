import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routs/Routs';
// import { routes } from './Routs/Routs'

function App() {
  return (
    <div className="">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
