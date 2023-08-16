import './App.css';
//import Header from './Header';
import { Button } from 'reactstrap';

import {ToastContainer,toast} from 'react-toastify';
function App() {
  const btnHandle= ()=>{
    //toast("this is my first message")
   toast.success("done",{position:"top-center"})  
  }
  return (
    
    <div className="App">
      <ToastContainer/>
     {/* <Header name="kashvi">welcome to first deployement</Header>
     <Header name="anu">welcome to first deployement</Header>
     <Header name="ashu">welcome to first deployement</Header>
       */}
<Button color="primary" size ="lg" onClick={btnHandle}>first react button</Button>

    </div>
  );
}

export default App;
