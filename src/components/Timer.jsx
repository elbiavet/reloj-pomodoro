
import { useEffect, useState } from 'react';
import alarma from "../audio/alarma.mp3"

export const Timer = ({breakLength, setBreakLength, setSessionLength, sessionLength}) =>{
    const [modo, setModo] = useState("Sesión")
    const [timeLeft, setTimeLeft] = useState()
    const [timeSpent, setTimeSpent] = useState(0)
    const [temporizadorActivo, setTemporizadorActivo] = useState(false)
    const audio = document.getElementById("beep")

  
    let min = Math.floor(timeLeft / 60); // hay que redondear con Math.floor para que no de errores
    let sec = Math.floor(timeLeft % 60);
   

    const reset = () =>{
        audio.pause();
        audio.currentTime = 0;
        // setAlarmaSonando(false)
        setBreakLength(5)
        setSessionLength(25)
        setModo("Sesión")
        setTimeLeft(
            modo === "Sesión"? sessionLength * 60 : breakLength * 60)
        if (temporizadorActivo) {
            setTemporizadorActivo(false);
            setTimeSpent(0);
        }
    }
    
 

    //Cuando hago clic en id="start_stop", el temporizador debe comenzar a correr desde el valor mostrado actualmente en id="session-length".
    useEffect(() => {
      setTimeLeft(modo === "Sesión" ? sessionLength * 60 : breakLength * 60)
    }, [sessionLength, breakLength])
    

    //el temporizador se esta ejecutando (temporizadorActivo) cuando hago click en el boton start-stop
    const iniciarTemporizador = () =>{
        setTemporizadorActivo(!temporizadorActivo)
    }

    //useEffect para que funcione el temporizador cada segundo
    useEffect(() => {
        let interval = null; // hay que declarar la variable antes del if

        if(temporizadorActivo && timeLeft >= 1){
            setTimeLeft(modo === "Sesión" ? sessionLength * 60 - timeSpent: breakLength * 60 - timeSpent);
        
            interval = setInterval(() => {
            setTimeSpent(timeSpent + 1)
            }, 1000);
         
        } else {
            clearInterval(interval)
        }

        //las consecuencias de que el contador llegue a 0 deben estar en el useEffect para que el temporizador llegue a 00:00, porque si lo pongo fuera, no llega, cambia directamente el modo en vez de mostrarlo
        if (timeLeft === 0) {
          audio.play()
          setTimeSpent(0);
          setModo((modo) => (modo === "Sesión" ? "Descanso" : "Sesión"));
          setTimeLeft(modo === "Sesión" ? sessionLength * 60 : breakLength * 60);
      }

        return () => {
        clearInterval(interval)
        }
    }, [temporizadorActivo, timeSpent])
        
    
    
    
    return (
      <div className="timer-container">
        <div className="timer-display">
          <div id="timer-label">{modo}</div>
          <div id="time-left">{min <10 ? `0${min}` : min}:{sec <10 ? `0${sec}` : sec}</div> {/*  tiempo restante en segundos pasado a min y sec */}
          <audio id="beep" src={alarma}></audio>
        </div>
        <div className="controles">
          <button id="start_stop" onClick={iniciarTemporizador}>{temporizadorActivo ? "Pausa" : "Inicio"} </button>
          <button id="reset" onClick={reset}>Reset</button>
        </div>
      </div>
      
    )
  }
  
  
  
  
  