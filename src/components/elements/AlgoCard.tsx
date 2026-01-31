import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const AlgoCard = ({formula , title , algoHandler}:{formula:any , title:string , algoHandler: (data: any) => void}) => {
    return (
       <div onClick={()=> algoHandler({...formula , title})} className="relative overflow-hidden rounded-2xl p-4 flex flex-col hover:cursor-pointer
      bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950
      border border-white/5 shadow-md
      hover:shadow-xl hover:-translate-y-1 transition-all duration-300

      before:content-[''] before:absolute before:inset-0
      before:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_40%)]
      before:opacity-0 hover:before:opacity-100
      before:transition-opacity before:duration-500
    ">

      <h5 className="text-sm font-semibold text-slate-200 text-center relative z-10">{formula.name}</h5>

      {/* Image */}
      {formula?.img ? (
        <div className="flex justify-center my-4 relative z-10">
          <img className="w-28 h-28 object-contain" src={formula.img} alt={formula.name} />
        </div>
      ) : (
        <div className="grid grid-cols-5 items-center my-4 relative z-10">
          <img className="col-span-2" src={formula.imgages.shape} alt={formula.name} />
          <div className="flex justify-center text-slate-400">
            <HiArrowNarrowRight />
          </div>
          <img className="col-span-2" src={formula.imgages.forAlgo} alt={formula.name} />
        </div>
      )}

      {/* Algorithms */}
      <div className="mt-auto space-y-2 relative z-10">
        <div className="bg-slate-800/70 backdrop-blur rounded-lg py-1 text-center font-mono text-sky-400 text-sm px-2 ">
          {formula.algo.toComplete.join(" ")}
        </div>
        <div className="text-xs text-slate-400 text-center font-mono">
          {formula.algo.toMake.join(" ")}
        </div>
      </div>
    </div>
    );
};

export default AlgoCard;