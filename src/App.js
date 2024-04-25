
import {createBrowserRouter,RouterProvider } from 'react-router-dom';
import VideoPage from './components/VideoPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>

    },
    {
      path:"/room/:id",
      element:<VideoPage/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}
export default App;
/* cd vcall
npm start
allow mike cam copy link and use in another window 19/04/24 
localhost 3000*/