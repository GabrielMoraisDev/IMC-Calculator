'use client'
import ThemeToggle from "./themeToggle";
import TabelaResultados from "./tabelaResultados";
import { useState, useEffect } from 'react';

export default function Home() {
  const [idade, setIdade] = useState<number>(0);
  const [altura, setAltura] = useState<number>(0);
  const [peso, setPeso] = useState<number>(0);
  const [calc, setCalc] = useState(false);
  const [show, setShow] = useState(false);
  const [resultado, setResultado] = useState<number>(0);

  useEffect(() => {
    if (idade && altura && peso) {
      setCalc(true);
    } else {
      setCalc(false);
    }
  }, [idade, altura, peso]);

  function calculate() {
    const alturaConvertida = altura / 100;
    const imc = peso / (alturaConvertida ** 2);
    const imcFormatado = parseFloat(imc.toFixed(2)); // Converte para número após formatar
    setShow(true);
    setResultado(imcFormatado);
  }

  function preenchaDados() {
    alert("Por favor, preencha todos os dados antes de calcular.");
  }

  function calcularOutroIMC() {
    setShow(false);
    setIdade(0);
    setAltura(0);
    setPeso(0);
  }

  return (
    <div className="flex flex-col items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">

      <div className="
        text-center m-auto text-2xl dark:text-slate-200 text-slate-600 flex justify-center items-center duration-300 my-5">
        Calculadora IMC
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-calculator-fill ml-2" viewBox="0 0 16 16">
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm2 .5v2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5m0 4v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zM4.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M4 12.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5M7.5 6a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM7 9.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM10 6.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5m.5 2.5a.5.5 0 0 0-.5.5v4a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-4a.5.5 0 0 0-.5-.5z"/>
        </svg>
      </div>
    
      <div className="w-[85%] h-auto bg-slate-200 dark:bg-slate-700 mx-7 mt-5 rounded-md overflow-hidden duration-300 pb-5
      sm:w-[50%] sm:pb-4 sm:mt-0
      md:w-[50%] md:pb-4 md:mt-0
      lg:w-[30%] lg:pb-4 lg:mt-0
      xl:w-[25%] xl:pb-4 xl:mt-0
      2xl:w-[20%] 2xl:pb-4 2xl:mt-0
      ">
        <div className="w-full h-12 bg-slate-400 dark:bg-slate-600 dark:text-slate-200 text-white flex justify-center items-center duration-300 text-center">
          Preencha as informações abaixo
        </div>
        <div className="w-[90%] m-auto h-[80%] duration-300">
          <label htmlFor="idade" className="mt-6 mb-1 block text-slate-600 dark:text-slate-200">Idade</label>
          <input
            id="idade"
            placeholder="Digite aqui (ex: 20)"
            type="number"
            className="w-full h-12 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 px-5"
            value={idade || ''}
            onChange={(e) => setIdade(Number(e.target.value))} // Atualiza a idade
          />
  
          <label htmlFor="peso" className="mt-6 mb-1 block text-slate-600 dark:text-slate-200">Peso (Kg)</label>
          <input
            id="peso"
            placeholder="Digite aqui (ex: 75)"
            type="number"
            className="w-full h-12 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 px-5"
            value={peso || ''}
            onChange={(e) => setPeso(Number(e.target.value))} // Atualiza o peso
          />
  
          <label htmlFor="altura" className="mt-6 mb-1 block text-slate-600 dark:text-slate-200">Altura (cm)</label>
          <input
            id="altura"
            placeholder="Digite aqui (ex: 170)"
            type="number"
            className="w-full h-12 rounded-md bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-200 px-5"
            value={altura || ''}
            onChange={(e) => setAltura(Number(e.target.value))} // Atualiza a altura
          />
  
          <button
            className={`flex justify-center mt-9 m-auto text-slate-500 py-3 px-5 rounded-md w-full ${calc ? 'text-white font-bold dark:bg-green-400 dark:text-green-800 bg-green-500' : 'text-slate-500 dark:bg-slate-600 dark:text-slate-400 bg-slate-300'}`}
            onClick={() => calc ? calculate() : preenchaDados()}
          >
            Calcular
          </button>
        </div>

      {show && <TabelaResultados resultado={resultado} calcularOutroIMC={calcularOutroIMC} />}
    </div>
    <ThemeToggle />
    </div>
  );
}
