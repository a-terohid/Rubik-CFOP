import data from "@/src/data/fingering.json"

const page = () => {
    
    const algos = data.data
    
    return (
        <div className=' container py-24 flex flex-col item-center  justify-center' >
            <h1 className="text-5xl  w-full text-center font-geistSans py-5 bg-Orange rounded-md">Fingering</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-lg mt-12 gap-4 mx-auto w-full">
                {
                    algos.map((algo , index) => <div key={index} className="flex gap-x-2 border py-2 px-3 rounded-lg hover:shadow-md hover:border-zinc-600">{
                        algo.map((el , ind) => <span key={ind}>{el}</span>)
                    }</div>)
                }
            </div>
        </div>
    );
};

export default page;