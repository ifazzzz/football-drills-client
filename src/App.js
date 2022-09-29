
import Home from './Component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="font-serif">
      <Home></Home>
      <ToastContainer />
    </div>
  );
}

export default App;
