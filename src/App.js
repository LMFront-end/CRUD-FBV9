import React, {useState, useEffect} from 'react';

//components
import {Home} from './components/Home';
import {Logueo} from './components/Logueo';

// import firebase
import {firebaseApp} from '../src/data/credenciales';
import {
  getAuth,
  onAuthStateChanged
} 
from 'firebase/auth'

const auth = getAuth(firebaseApp);

function App() {

  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  //cambio de estado
  onAuthStateChanged(auth, (userFirebase)=>{
    if(userFirebase) {

      // código en caso de haya sesión iniciada

      setUsuarioGlobal(userFirebase);

    }else{

      // código en caso de que no haya sesión

      setUsuarioGlobal(null);

    }
  });

  return (
    <>
    {usuarioGlobal ? <Home emailUser={usuarioGlobal.email}/> : <Logueo />}
    </>
  );
}

export default App;
