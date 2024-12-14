function clsx(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  return (
    <>
      <div className="grid min-h-screen place-items-center px-4 py-16">
        <div className="grid place-items-center gap-12 sm:gap-16 xl:max-w-7xl xl:grid-cols-[auto_1fr] xl:gap-x-24 xl:gap-y-4">
          <div
            className={clsx(
              'flex max-w-md flex-col items-center text-center xl:text-left',
              'xl:col-start-2 xl:row-span-2 xl:row-start-3 xl:grid xl:max-w-none xl:grid-cols-[auto_1fr] xl:grid-rows-subgrid xl:gap-4'
            )}
          >
            hi
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
