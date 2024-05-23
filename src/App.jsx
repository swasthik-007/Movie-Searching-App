import './App.css'
import Navbar from './components/Navbar/Navbar';
import MainRoutes from './routes/Mainroutes';

function App() {
  console.log(import.meta.env); 
  return (
    <>
      <Navbar />
      <MainRoutes />
    </>
  )
}
export default App