import React from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import AlgoCard from './AlgoCard';

const AlgoSection = ({algo , item}:{algo:any , item:number}) => {
    return (
        <div>
             <details className="group w-full">
                <summary className={`flex items-center justify-between w-full  gap-x-3 py-3 px-5 rounded-xl bg-Green transition`}>
                    <h2 className="lg:text-2xl md:text-lg md:font-bold"><span className="mr-3 border-b-2 border-Crime">{`0${item+1}`}</span>{algo.title}<span className="ml-1 lg:text-lg text-sm">({algo.algos.length})</span></h2>
                    <span className="text-2xl lg:text-3xl transition-transform duration-500 group-open:rotate-45">
                        <MdArrowDropDown />
                    </span>
                </summary>
                <div className={`lg:px-8 px-5 py-5 my-3 bg-Crime rounded-xl`}>
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        {
                            algo.algos.map((formula : any , index :number) => <li key={index} >{<AlgoCard formula={formula} />}</li>)
                        }
                    </ul>
                </div>
            </details>
        </div>
    );
};

export default AlgoSection;