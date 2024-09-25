
export const StepFourSection = ({ sourceDestination, setSourceDestination }) => {
    return (
      <div className="flex flex-row items-center justify-center gap-4 p-8 bg-neutral-100 mt-10">
        <div className="w-full border border-blue-400 py-4 px-4 shadow-xl rounded-xl">
          <div className="space-y-4">
            <h2 className="text-md md:text-xl font-semibold text-center">
              What could be your source station?<span className="text-red-500">*</span>
            </h2>
            <input
              className="w-full h-10 p-2 border"
              placeholder="Source Destination"
              value={sourceDestination}
              onChange={(e) => setSourceDestination(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full border border-blue-400 py-4 px-4 shadow-xl rounded-xl">
          <div className="space-y-4">
            <h2 className="text-md md:text-xl font-semibold text-center">
              Tentative travel dates?<span className="text-red-500">*</span>
            </h2>
            <input
              type="date"
              className="w-full h-10 p-2 border"
              placeholder="Tentative travel dates"
            />
          </div>
        </div>
      </div>
    );
};
