import data from "@/src/data/OLL.json"
import AlgoSection from "../elements/AlgoSection";

const OLLPage = () => {
      const algos = data.data
    
    return (
        <div className="min-h-screen text-slate-100 px-4 py-24 relative overflow-hiddenbg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#020617_60%,_#020617_100%)]">

            {/* Global glow layer */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.08),transparent_45%)] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20 relative">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight relative">OLL</h1>
                    <p className="text-slate-400 mt-4 relative">Orientation of Last Layer Algorithms</p>
                </div>

                <div className="space-y-12">
                    {algos.map((algo: any, index: number) => (
                        <AlgoSection key={index} algo={algo} item={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default OLLPage;