import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalUserProvider } from './context/user.context';
import { router } from './router/index';

function App() {
  return (
    <GlobalUserProvider>
      <RouterProvider router={router} />
    </GlobalUserProvider>
  );
}

export default App;
