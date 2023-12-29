"use client";
import React, { useState, useEffect } from "react";

const Countdown = ({ onCountdownEnd }: { onCountdownEnd: () => void }) => {
  // Estado para armazenar o tempo restante
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Define a data do aniversário e a data atual
    const birthday = new Date("December 28, 2023 08:00:00"); // Certifique-se de ajustar para o fuso horário desejado
    const now = new Date();

    // Calcula a diferença entre agora e a data do aniversário
    let difference = birthday.getTime() - now.getTime();

    // Atualiza o contador a cada segundo
    const interval = setInterval(() => {
      const now = new Date();
      difference -= 1000; // Decrementa 1 segundo a cada intervalo

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });

      // Quando o contador chega a zero
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onCountdownEnd(); // Aciona o evento de finalização
      }
      
    }, 1000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [onCountdownEnd]);

  return (
    <div>
      <h1 className="bg-pink-600 p-4 rounded-md text-xl mb-6 text-center">
        Contagem Regressiva para o aniversário do meu grande Amor S2
      </h1>
      <div className="flex flex-row justify-between gap-3">
        <div className="flex-1 bg-purple-800 p-10 flex flex-col items-center rounded-lg">
          <p className="text-5xl">{timeLeft.hours}</p>
          <p>Horas</p>
        </div>
        <div className="flex-1 bg-purple-800 p-10 flex flex-col items-center rounded-lg">
          <p className="text-5xl">{timeLeft.minutes}</p>
          <p>Minutos</p>
        </div>
        <div className="flex-1 bg-purple-800 p-10 flex flex-col items-center rounded-lg">
          <p className="text-5xl">{timeLeft.seconds}</p>
          <p>Segundos</p>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
