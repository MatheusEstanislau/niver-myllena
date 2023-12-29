'use client'
import Image from 'next/image'
import Countdown from './components/countdown'
import { useEffect, useState } from 'react';
import ConfettiTrigger from './components/confetti';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const router = useRouter()


  const onCountdownEnd = () => {
    setShowConfetti(true)
  }

  useEffect(() => {
    if (showConfetti) {
        // Dispara o confete
        // Aguarda 3 segundos e então mostra o botão
        const timer = setTimeout(() => {
            setShowButton(true);
        }, 3000);

        // Limpa o timer quando o componente é desmontado ou se o confete é desativado
        return () => clearTimeout(timer);
    }
}, [showConfetti]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Countdown onCountdownEnd={onCountdownEnd}/>
      {showConfetti && <ConfettiTrigger />}
      {showConfetti && <p className='text-4xl animate-pulse'>Feliz aniversário meu amor</p>}
      <div className={`mt-4 px-4 py-2 bg-pink-500 text-white text-xl font-bold rounded hover:bg-pink-700 transition duration-300 ease-in-out ${showButton ? 'opacity-100' : 'opacity-0'}`}>
                <button
                    onClick={() => {router.push('/homenagem')}}
                >
                    Ler Homenagem
                </button>
            </div>
    </main>
  )
}
