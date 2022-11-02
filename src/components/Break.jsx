import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";

export const Break = ({breakLength, setBreakLength}) =>{

  //funciones que manejan el incremento/decremento de los minutos cuando hago click en Duración del descanso
    
  const breakDecrement = () =>{
    if(breakLength > 1 ) setBreakLength(breakLength - 1) //para que no pueda ser menos de 1 min
  }
  const breakIncrement = () =>{
    if(breakLength < 60 ) setBreakLength(breakLength + 1) //para que no pueda ser más de 60 min
  }

    return (
      <div className="break-container">
        <div id="break-label">Duración del descanso</div>
        <div className="break-content">
          <div className="flecha" id="break-decrement" onClick={breakDecrement}><AiOutlineArrowDown /></div>
          <div id="break-length">{breakLength}</div>
          <div className="flecha" id="break-increment" onClick={breakIncrement}><AiOutlineArrowUp /></div>
        </div>
      </div>
    )
  }