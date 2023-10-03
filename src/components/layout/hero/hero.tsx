export default function Hero() {
  return (
    <section className="h-max w-full py-[10rem] mt-4">
      <div className="flex justify-center items-center space-x-[10rem] h-full">
        <article className="flex flex-col justify-between h-full py-[3rem]">
          <div className="mx-auto mb-4 flex items-center justify-center max-w-fit space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50">
            <p className="text-sm font-semibold text-gray-700">
              Coscribe is now public!
            </p>
          </div>
          <h1 className="font-mona w-[557px] h-[130px] text-[4.5rem] leading-[5.5rem]">
            Your AI-Powered Companion for Enlightened Reading
          </h1>
          <p className="w-[535px] h-[40px] text-[1.6rem] font-medium">
            Transform highlights into dynamic notes, get instant answers to
            queries, and integrate effortlessly with your digital workspaces.
            Dive deeper, learn smarter.
          </p>
        </article>
        <div className="w-[566px] h-[367px] bg-white rounded-[30px] border-l-[4px] border-r-[4px] border-t-[4px] border-b-[4px] border-black" />
      </div>
    </section>
  );
}
