import data from "@/src/data/PLL.json"
import { MdArrowDropDown } from "react-icons/md";

const page = () => {
    
    const algos = data.data
    
    return (
        <div className=' container py-24 flex flex-col item-center  justify-center' >
            <h1 className="text-5xl  w-full text-center font-geistSans py-5 bg-Orange rounded-md">PLL</h1>
            <div className="mt-12 grid gap-y-6  mx-auto w-full">
                {
                    algos.map((algo , index: number) => <div key={index} className="w-ful">
                        <details className="group w-full">
                            <summary className={`flex items-center justify-between w-full  gap-x-3 py-3 px-5 rounded-xl bg-Green transition`}>
                                <h2 className="text-2xl font-bold"><span className="mr-3 border-b-2 border-Crime">{`0${index+1}`}</span>{algo.title}<span className="ml-1 text-lg">({algo.algos.length})</span></h2>
                                <span className="text-2xl lg:text-3xl transition-transform duration-500 group-open:rotate-45">
                                    <MdArrowDropDown />
                                </span>
                            </summary>
                            <div className={`px-8 py-5 my-3 bg-Crime rounded-xl`}>
                                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                                    {
                                        algo.algos.map((formula , index :number) => <li key={index} className="bg-background p-5 rounded-lg hover:shadow-xl ">
                                            <h5 className="text-lg">{formula.name}</h5>
                                            <div className="flex items-center justify-center my-5">
                                                <img className="w-1/2" src={formula.img} alt={formula.name} />
                                            </div>
                                            <div className="flex flex-col gap-y-1 items-center justify-center">
                                                <p className=" text-lg flex gap-x-2 whitespace-nowrap">{
                                                    formula.algo.toComplete.map((al , index) => <span key={index}>{al}</span>)    
                                                }</p>
                                                <p className="text-sm flex gap-x-2 whitespace-nowrap">{
                                                    formula.algo.toMake.map((al , index) => <span key={index}>{al}</span>)
                                                }</p>
                                            </div>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        </details>
                    </div>)
                }
            </div>
        </div>
    );
};

export default page;