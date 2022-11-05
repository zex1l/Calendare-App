import { useEffect } from "react";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar";
import { useActions } from "./hooks/useActions";
import { IUser } from "./models/IUser";

import 'antd/dist/antd.css';

function App() {
  const {setIsAuth, setUser} = useActions()

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(true)
      setUser({username: localStorage.getItem('username') || '' } as IUser)
    }
  }, [])

  return (
    <div>
      <NavBar/>
      <AppRoutes/>
    </div>
  );
}

export default App;
