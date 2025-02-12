import { X, Info, Settings, Activity } from "lucide-react";

export function InfoPanel({ data, onClose }) {
  if (!data) return null;

  return (
    <>
      <div
        className="fixed right-0 top-0 h-full w-[360px] bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl 
     transform transition-all duration-500 ease-out translate-x-0 animate-slide-in"
      >
        <div className="h-full overflow-y-auto">
          <div className="sticky top-0 bg-gradient-to-b from-gray-900 to-gray-900/95 backdrop-blur-sm p-6 pb-4 border-b border-white/10">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                {data.title}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200"
                aria-label="Close panel"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="px-6 pb-6 space-y-6">
            {data.image && (
              <div className="relative group">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-48 object-cover rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent rounded-xl" />
              </div>
            )}

            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-blue-400">
                  <Info className="w-4 h-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">
                    Overview
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  {data.description}
                </p>
              </div>

              {data.specs && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Settings className="w-4 h-4" />
                    <h3 className="text-sm font-bold uppercase tracking-wider">
                      Specifications
                    </h3>
                  </div>
                  <ul className="grid gap-3">
                    {Object.entries(data.specs).map(([key, value]) => (
                      <li
                        key={key}
                        className="flex items-center text-sm text-gray-300 bg-white/5 p-3 rounded-xl transition-colors hover:bg-white/10"
                      >
                        <Activity className="w-4 h-4 mr-3 text-green-400" />
                        <span className="capitalize">{key}:</span>
                        <span className="ml-auto font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-gray-400 mb-3">
                  <Activity className="w-4 h-4" />
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    Status Monitor
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-gray-300 bg-white/5 p-2 rounded-lg transition-colors hover:bg-white/10">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 shadow-lg shadow-green-500/20"></span>
                    System Status: Operational
                  </li>
                  <li className="flex items-center text-sm text-gray-300 bg-white/5 p-2 rounded-lg transition-colors hover:bg-white/10">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 shadow-lg shadow-blue-500/20"></span>
                    Last Maintenance: Recent
                  </li>
                  <li className="flex items-center text-sm text-gray-300 bg-white/5 p-2 rounded-lg transition-colors hover:bg-white/10">
                    <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3 shadow-lg shadow-yellow-500/20"></span>
                    Safety Rating: High
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
