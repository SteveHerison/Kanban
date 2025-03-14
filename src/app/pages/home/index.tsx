export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="w-full h-full">
        <div className="grid h-full grid-flow-col auto-cols-[minmax(250px,_1fr)] gap-4 overflow-x-auto">
          {[...Array(5)].map((_, index) => (
            <div key={index} className="flex flex-col min-w-[250px]">
              <div className="shadow-2xl pb-4 flex gap-x-2 items-center">
                <span className="w-4 h-4 bg-amber-200 rounded-full"></span>
                <span>TODO()</span>
              </div>
              <div className="grid grid-rows-8 h-full gap-3  overflow-x-auto">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="p-1 flex flex-col h-full gap-4 truncate shadow-2xl bg-zinc-800 rounded-lg"
                  >
                    <span className="truncate">
                      title dfdsafasdfasdfasdfasdfdsdfdfasffasdfasdsafsad
                    </span>
                    <p> 0 of 2</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
