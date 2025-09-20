import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import { router } from './Router/Router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App