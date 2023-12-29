"use client";

import { HeartIcon } from "@heroicons/react/16/solid";
import Fireworks from "../components/fireworks";

export default function Homenagem() {
  const hearts = Array.from({ length: 80 }).map((_, index) => {
    const top = `${(Math.random() * 100).toFixed(2)}%`; // Gera uma posição aleatória na parte superior
    const left = `${(Math.random() * 100).toFixed(2)}%`;

    return (
      <HeartIcon
        key={index}
        className={`absolute animate-pulse h-16 w-16 text-red-500`}
        style={{ top: top, left: left, zIndex: 0 }}
      />
    );
  });

  return (
    <div className="relative w-full h-full">
      <Fireworks />
      <div className="flex flex-col justify-center items-center mt-8 px-96">
        <h1 className="text-4xl font-bold">Meu amor</h1>
        <p className="indent-8 text-justify text-xl bg-purple-800 p-4 rounded-md my-2 z-20">
          Hoje é o dia em que celebro você, a pessoa que completou minha vida de
          maneiras que nem eu mesmo imaginava. Em março de 2023, antes dos meus
          olhos encontrarem os seus, eu nunca imaginaria que encontraria uma
          pessoa tão maravilhosa e extraordinária como você. Você foi o melhor
          presente que eu sonhei um dia poder receber.
        </p>
        <p className="indent-8 text-justify text-xl bg-purple-600 p-4 rounded-md my-2  z-20">
          Você me faz a pessoa mais feliz do mundo e me traz os melhores
          sentimentos possíveis. Você me motiva a ser melhor, sempre evoluindo
          (Sou seu eterno pokemon kkkkk). Eu te amo com todo o meu coração.
        </p>
        <p className="indent-8 text-justify text-xl bg-pink-700 p-4 rounded-md my-2  z-20">
          Você é tudo para mim! Você que completa a minha vida. Eu sei que para
          você hoje é só mais um dia comum, mas você merece declaração todos os
          dias. Você é minha melhor amiga, parceira, confidente, meu porto
          seguro. Você me surpreende todos os dias com o seu amor.
        </p>
        <p className="indent-8 text-justify text-xl bg-pink-500 p-4 rounded-md my-2  z-20">
          Hoje mais do que nunca eu tenho certeza que tomei a melhor decisão de
          todas que foi escolher você como mulher da minha vida. Sempre soube,
          desde que nos olhamos pela primeira vez, que você era diferente e que
          valeria a pena a luta e a insistência (e foi muita luta e vontade para
          chegarmos ao nível que estamos hoje kkkkkk), eu desejo comemorar essa data ao seu lado por muitos e muitos anos.
          <br/>Com todo o meu amor, Matheus de Cristo.
        </p>

        {hearts}
      </div>
    </div>
  );
}
