import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Main from './Layout/Main';
import Products from './Component/Products/Products';
import Friends from './Component/Friends/Friends';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:[
      {path: '/home', element: <Home></Home>},
      {path: '/products', element: <Products></Products>},
      {path: 'about', element: <About></About>},
      {path: 'friend',
    loader:async ()=>{
      return fetch('https://jsonplaceholder.typicode.com/users');
    },
  element: <Friends></Friends>}
    
    ]},
    


  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
