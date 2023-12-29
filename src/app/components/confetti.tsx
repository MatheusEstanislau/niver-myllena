import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';

const ConfettiTrigger = () => {
    // Função para disparar confetes
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
        });
    };

    useEffect(() => {
        // Dispara os confetes pela primeira vez
        triggerConfetti();

        // Configura um intervalo para disparar confetes repetidamente
        const intervalId = setInterval(() => {
            triggerConfetti();
        }, 3000); // Ajuste o tempo conforme desejado (3000ms = 3 segundos)

        // Limpa o intervalo quando o componente é desmontado
        return () => clearInterval(intervalId);
    }, []);

    return null;
};

export default ConfettiTrigger;