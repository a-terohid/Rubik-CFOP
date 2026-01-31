import { IoClose } from "react-icons/io5";


interface Props {
    algoritmData: any 
    setIsModuleOpen : (show: boolean) => void;
}

const AlgoritmDetails = ({algoritmData ,setIsModuleOpen } : Props) => {


    return (
        <div  className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50 p-4">
            <div className="relative w-full max-w-3xl bg-Light-Background-2/90 dark:bg-Dark-Background-3/80 rounded-xl shadow-lg overflow-hidden">
                <button
                    onClick={() => setIsModuleOpen(false)}
                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-Light-Primary-300 text-Light-Primary-700 hover:bg-Light-Primary-500 dark:bg-Dark-Primary-300 dark:text-Dark-Primary-700 dark:hover:bg-Dark-Primary-500"
                >
                    <IoClose size={24} />
                </button>
                <div className="p-6">
                  
                </div>
            </div>
        </div>
    );
};

export default AlgoritmDetails;