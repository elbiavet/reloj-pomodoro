import { useState } from 'react';
import { Break } from './components/Break';
import { Session } from './components/Session';
import { Timer } from './components/Timer';
import './App.css';

export function App() {

  //declaro las variables de estado comunes a todos mis componentes
  //las inicio en minutos, pero luego voy a trabajar todo con segundos para poder hacer un contador mm:ss
  const [sessionLength, setSessionLength] = useState(25)
  const [breakLength, setBreakLength] = useState(5)

  return (
    <div className='App'>
      <h1>Reloj Pomodoro </h1>
      <div className="modificadores">
        <Session 
          sessionLength={sessionLength} 
          setSessionLength={setSessionLength}/>
        <Break 
          breakLength={breakLength} 
          setBreakLength={setBreakLength}/>
      </div>
      <Timer 
        breakLength={breakLength} 
        setBreakLength={setBreakLength} 
        setSessionLength={setSessionLength} 
        sessionLength={sessionLength}/>
    </div>
  );
}
