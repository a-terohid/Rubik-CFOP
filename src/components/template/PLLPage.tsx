import data from "@/src/data/PLL.json"
import { MdArrowDropDown } from "react-icons/md";
import AlgoSection from "../elements/AlgoSection";

const PLLPage = () => {
    
    const algos = data.data
    
    return (
        <div className=' container py-24 flex flex-col item-center  justify-center' >
            <h1 className="lg:text-5xl text-3xl  w-full text-center font-geistSans py-5 bg-Orange rounded-md">PLL</h1>
            <div className="mt-12 grid gap-y-6  mx-auto w-full">
                {
                    algos.map((algo , index: number) => <div key={index}><AlgoSection algo={algo} item={index} /></div>)
                }
            </div>
        </div>
    );
};

export default PLLPage;