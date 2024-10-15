import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-zinc-[#181C14] h-screen">
      <nav className="flex flex-row justify-between py-8 px-16 uppercase items-center">
        <div>
          <h1 className="uppercase text-xl font-extrabold">headphone</h1>
        </div>
        <div className="flex justify-between gap-16 font-semibold">
          <a href="#" className="text-cyan-400">home</a>
          <a href="#">product</a>
          <a href="#">about</a>
          <a href="#">contact</a>
        </div>
        <div>
          <button className="bg-gradient-to-tr from-teal-500 to bg-cyan-950  w-32 text-slate-950 p-2 border border-none rounded-lg hover:bg-gradient-to-tr hover:from-pink-500 hover:to-amber-300 hover:scale-105 transition ease-in-out duration-75 font-bold text-slate-50">Login</button>
        </div>
      </nav>
      <section className="flex">
        <div className="w-8/12 flex flex-col p-11 gap-2 bg-gradient-to-br from-yellow-400 to-teal-300 text-transparent bg-clip-text animate-fade-in-left">
          <h1 className="uppercase text-6xl font-extrabold tracking-wider ">headphone </h1>
          <h1 className="uppercase text-6xl font-extrabold tracking-wider">palace Home </h1>
          <p className="mt-8 text-cyan-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, accusamus nobis nulla reprehenderit corporis magnam labore enim soluta repellat voluptas blanditiis minima eum amet debitis cumque velit sunt totam iure!
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, accusamus nobis nulla reprehenderit corporis magnam labore enim soluta repellat voluptas blanditiis
          </p>
          <button className="p-3 bg-gradient-to-tr from-teal-500 to bg-cyan-950 hover:bg-gradient-to-tr hover:from-pink-500 hover:to-amber-300 hover:scale-105 transition ease-in-out duration-75 w-32 mt-7 uppercase font-semibold border border-none rounded-lg text-white">read more</button>
        </div>
        <div className="flex justify-between w-full p-5 animate-fade-in-right">
          <div className="flex justify-center pl-14 animate-pulse">
            <Image
              src="/hp.png"
              alt="Description of the image"
              width={400}
              height={180}
            />
          </div>
          <div className="flex flex-col justify-center pr-11 gap-3 items-center">
            <button className="bg-slate-300 w-2 p-3 border border-none rounded-full" type="button" />
            <button className="bg-slate-500 w-2 p-2 border border-none rounded-full" type="button" />
            <button className="bg-slate-500 w-2 p-2 border border-none rounded-full" type="button" />
            <button className="bg-slate-500 w-2 p-2 border border-none rounded-full" type="button" />
            <button className="bg-slate-500 w-2 p-2 border border-none rounded-full" type="button" />
          </div>
        </div>
      </section>
      <div className="flex px-11 gap-3">
        <div className="bg-gradient-to-r from-cyan-600 to-zinc-800 p-4 border border-none rounded-lg transition ease-in-out animate-slide-in-up delay-500">
          <h1 className="font-bold">Product 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequatur dolorum, doloremque culpa corrupti consectetur expedita</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-slate-800 p-4 border border-none rounded-lg animate-slide-in-up">
          <h1 className="font-bold">Product 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequatur dolorum, doloremque culpa corrupti consectetur expedita</p>
        </div>
        <div className="bg-gradient-to-r from-cyan-600 to-zinc-800 p-4 border border-none rounded-lg animate-slide-in-up">
          <h1 className="font-bold">Product 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequatur dolorum, doloremque culpa corrupti consectetur expedita</p>
        </div>
        <div className="bg-gradient-to-r from-teal-500 to-slate-800 p-4 border border-none rounded-lg animate-slide-in-up">
          <h1 className="font-bold">Product 4</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente consequatur dolorum, doloremque culpa corrupti consectetur expedita</p>
        </div>
      </div>
    </main>

  );
}
