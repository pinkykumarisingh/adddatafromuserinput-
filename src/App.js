import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import AddNewUser from "./components/AddNewUser";
import UserList from './components/UserList';
// import DeleteItems from './components/DeleteItems'
function App() {
  const [listOptions, setListOptions] = useState(JSON.parse(localStorage.getItem("user")) || []);

  const getuserdata = () => {
    setListOptions(JSON.parse(localStorage.getItem("user")) || [])
  }

  return (
    <div >
      <center>
        <AddNewUser getuserData={getuserdata} />
        <UserList listOptions={listOptions} getuserData={getuserdata} />
        {/* <DeleteItems /> */}
        {/* <h2>welcome user</h2> */}
      </center>
    </div>
  );
}

export default App;
