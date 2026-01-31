import data from "@/src/data/cross.json"

const CrossPage = () => {
    const algos = data.data;

  return (
    <div className="min-h-screen text-slate-100 px-4 py-24 relative overflow-hidden
      bg-[radial-gradient(ellipse_at_top,_#0f172a_0%,_#020617_60%,_#020617_100%)]">

      {/* global glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.06),transparent_45%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.12),transparent_60%)] blur-2xl" />
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight relative">Cross</h1>
          <p className="text-slate-400 mt-4 relative">Cross movement patterns</p>
        </div>

        {/* Grid */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
          {algos.map((algo: string[], index: number) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl p-4 text-center font-mono text-sm
                bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950
                border border-white/5 shadow-md
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl

                before:content-[''] before:absolute before:inset-0
                before:bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.15),transparent_45%)]
                before:opacity-0 group-hover:before:opacity-100
                before:transition-opacity before:duration-500
              "
            >
              <div className="relative z-10 flex flex-wrap justify-center gap-x-2 gap-y-1">
                {algo.map((el: string, ind: number) => (
                  <span
                    key={ind}
                    className="text-slate-200 group-hover:text-sky-400 transition-colors duration-300"
                  >
                    {el}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
};

export default CrossPage;