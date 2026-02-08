"use client"
import { MdArrowDropDown } from 'react-icons/md';
import AlgoCard from './AlgoCard';

interface props  {
  setIsModuleOpen : (show: boolean) => void;
  setAlgoritmData: (data: any) => void;
   algo:any , 
   item:number
} 

const AlgoSection = ({algo , item , setIsModuleOpen , setAlgoritmData}:props) => {

    const clickHandler = (data : any) => {
        setIsModuleOpen(true)
        setAlgoritmData(data)
    }

    return (
        <details className="group rounded-2xl overflow-hidden relative
      bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-slate-950/80
      border border-white/5 backdrop-blur-md">

      <summary className="flex items-center justify-between cursor-pointer px-6 py-5 select-none relative">
        {/* light line */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

        <div className="flex items-center gap-3">
          <span className="text-sky-400 font-semibold text-sm">{String(item + 1).padStart(2, "0")}</span>
          <h2 className="text-lg lg:text-xl font-semibold text-white">{algo.title}</h2>
          <span className="text-sm text-slate-400">({algo.algos.length})</span>
        </div>

        <MdArrowDropDown className="text-2xl text-slate-400 transition-transform duration-300 group-open:rotate-180" />
      </summary>

      <div className="px-6 pb-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {algo.algos.map((formula: any, index: number) => (
            <AlgoCard key={index} formula={formula} title={algo.title} algoHandler={clickHandler} />
          ))}
        </div>
      </div>
    </details>
    );
};

export default AlgoSection;