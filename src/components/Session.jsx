import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const Session = ({sessionLength, setSessionLength}) => {

  //funciones que manejan el incremento/decremento de los minutos cuando hago click en Duración de la sesión

    const sessionDecrement = () =>{
      if(sessionLength > 1 ) setSessionLength(sessionLength - 1) //para que no pueda ser menos de 1 min
    }
    const sessionIncrement = ()=>{
      if(sessionLength < 60 ) setSessionLength(sessionLength + 1) //para que no pueda ser más de 60 min
    }

    return(
      <div className="session-container">
        <div id="session-label">Duración de la sesión</div>
        <div className="session-content">
          <div className="flecha" id="session-decrement" onClick={sessionDecrement}><AiOutlineArrowDown /></div>
          <div id="session-length">{sessionLength}</div>
          <div className="flecha" id="session-increment" onClick={sessionIncrement}><AiOutlineArrowUp /></div>
        </div>
      </div>
    )
  }