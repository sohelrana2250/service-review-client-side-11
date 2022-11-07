
import './App.css';

import { RouterProvider } from "react-router-dom";
import { router } from './Router/Router';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <RouterProvider router={router}>

        </RouterProvider>

      </AuthProvider>

    </div>
  );
}

export default App;
