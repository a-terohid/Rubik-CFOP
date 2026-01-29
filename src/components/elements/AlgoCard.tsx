import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const AlgoCard = ({formula}:{formula:any}) => {
    return (
        <div className="bg-background px-4 py-6 rounded-lg hover:shadow-xl h-full flex flex-col justify-between ">
            <h5 className="md:text-lg">{formula.name}</h5>
            {
                formula?.img ? 
                <div className="flex items-center justify-center my-5">
                    <img className="w-2/3 lg:w-1/2" src={formula.img} alt={formula.name} />
                </div> 
            :
                <div className="grid grid-cols-5  my-5">
                    <img className="col-span-2" src={formula.imgages.shape} alt={formula.name} />
                    <p className="text-4xl flex items-center justify-center w-full"><HiArrowNarrowRight/></p>
                    <img className="col-span-2" src={formula.imgages.forAlgo} alt={formula.name} />
                </div>
            }
            <div className="flex flex-col gap-y-1 items-center justify-center ">
                <p className=" text-lg flex gap-x-2 whitespace-nowrap flex-wrap items-center  justify-center">
                    {
                        formula.algo.toComplete.map((al : string , index : number) => <span key={index}>{al}</span>)    
                    }
                </p>
                <p className="text-sm flex gap-x-2 whitespace-nowrap flex-wrap items-center  justify-center">
                    {
                        formula.algo.toMake.map((al : string , index : number) => <span key={index}>{al}</span>)
                    }
                </p>
            </div>
        </div>
    );
};

export default AlgoCard;