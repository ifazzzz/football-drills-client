
import Home from './Component/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Questions from './Component/Questions/Questions';

function App() {
  return (
    <div className="font-serif">
      <Home></Home>
      <Questions></Questions>
      <ToastContainer />
    </div>
  );
}

export default App;
