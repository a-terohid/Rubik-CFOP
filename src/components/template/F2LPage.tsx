import data from "@/src/data/F2L.json";
import AlgoSection from "../elements/AlgoSection";

const F2LPage = () => {
    
    const algos = data.data
    
    return (
        <div className=' container py-24 flex flex-col item-center  justify-center' >
            <h1 className="lg:text-5xl text-3xl  w-full text-center font-geistSans py-5 bg-Orange rounded-md">F2L</h1>
            <div className="lg:mt-12 mt-9 grid gap-y-6  mx-auto w-full">
                {
                    algos.map((algo , index: number) => <div key={index}><AlgoSection algo={algo} item={index} /></div>)
                }
            </div>
        </div>
    );};

export default F2LPage;