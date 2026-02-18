import { useEffect, useState } from "react";
import "./styles/pomodorotimer.css";
import confetti from "canvas-confetti";

export function Pomodoro() {
  const [segundos, setSegundos] = useState(3);
  const [activo, setActivo] = useState(false);

  useEffect(() => {
    // Primero compruebo si esta activo, solo si esta a activo se ejecuta el contador
    if (!activo) return;

    const intervalo = setInterval(() => {
      setSegundos((s) => {
        if (s <= 0) {
          confetti();
          setActivo(false);
          clearInterval(intervalo);
          return 0
        }
        return s - 1;
      });
    }, 1000);

    return () => {
      if (intervalo) clearInterval(intervalo);
    };

  }, [activo]);

  const reset = () => {
    setSegundos(1500);
    setActivo(false);
  };

  return (
    <main className="pomodoro-timer">
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        <span className="minutes">{Math.floor(segundos / 60)}</span>
        <span className="separator">:</span>
        <span className="seconds">
          {String(segundos % 60).padStart(2, "0")}
        </span>
      </div>
      <div className="controls">
        <button onClick={() => setActivo(true)} className="start">
          Start
        </button>
        <button onClick={() => setActivo(false)} className="pause">
          Pause
        </button>
        <button onClick={() => reset()} className="reset">
          Reset
        </button>
      </div>
    </main>
  );
}
