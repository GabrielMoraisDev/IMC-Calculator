'use client';

interface TabelaResultadosProps {
  resultado: number; 
  calcularOutroIMC: () => void;
}

export default function TabelaResultados({ resultado, calcularOutroIMC }: TabelaResultadosProps) {

  return (
    <div className={`
      absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[30rem] bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden
      sm:w-[50%]
      md:w-[50%]
      lg:w-[30%]
      xl:w-[25%]
      2xl:w-[20%]
    `}>
      <table className="w-full">
        <thead>
          <tr className="bg-slate-700 text-slate-200 text-center">
            <th className="py-3">IMC</th>
            <th className="py-3">Peso</th>
            <th className="py-3">Classificação</th>
          </tr>
        </thead>
        <tbody>
          <tr className={`${resultado <= 18.5 ? 'bg-yellow-200 text-slate-800' : 'bg-slate-300 dark:bg-slate-500 text-slate-800 dark:text-slate-200'} text-center`}>
            <td className="py-3">18.5</td>
            <td className="py-3">&lt; 53.5 Kg</td>
            <td className="py-3">Magreza</td>
          </tr>
          <tr className={`${resultado > 18.5 && resultado <= 24.9 ? 'bg-green-300 text-slate-800' : 'bg-slate-300 dark:bg-slate-500 text-slate-800 dark:text-slate-200'} text-center`}>
            <td className="py-3">18.6 a 24.9</td>
            <td className="py-3">53.5 a 72 Kg</td>
            <td className="py-3">Normal</td>
          </tr>
          <tr className={`${resultado > 24.9 && resultado <= 30 ? 'bg-yellow-200 text-slate-800' : 'bg-slate-300 dark:bg-slate-500 text-slate-800 dark:text-slate-200'} text-center`}>
            <td className="py-3">25 a 30</td>
            <td className="py-3">72 a 86.7 Kg</td>
            <td className="py-3">Sobrepeso</td>
          </tr>
          <tr className={`${resultado > 30 ? 'bg-red-300 text-slate-800' : 'bg-slate-300 dark:bg-slate-500 text-slate-800 dark:text-slate-200'} text-center`}>
            <td className="py-3">&gt; 30</td>
            <td className="py-3">&gt; 86.7 Kg</td>
            <td className="py-3">Obesidade</td>
          </tr>
        </tbody>
      </table>

      <div className="absolute bottom-24 w-full h-36 flex items-center justify-center">
        <div className="text-center">
          <p className="mt-7 text-slate-700 dark:text-slate-200">
            Baseado no cálculo <br />
           <label className="font-bold"> IMC = peso / (altura X altura) </label><br />
            Sua classificação de acordo <br />
            com a tabela acima é:
          </p>
          <p className="font-bold text-3xl text-slate-700 dark:text-white">{resultado}</p>
        </div>
      </div>

      <div className="absolute bottom-5 w-full h-12 flex justify-center cursor-pointer">
        <div className="w-[70%] h-full bg-slate-500 flex items-center justify-center rounded-md text-white" onClick={calcularOutroIMC}>
          Calcular outro IMC
        </div>
      </div>
    </div>
  );
}
