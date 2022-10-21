import React, { Suspense } from "react";
import Header from "./components/Header";

const CounterAppOne = React.lazy(() => import("mfeCheckout/CounterAppOne"));

const App = () => (
	<main className="bg-slate-900 w-full h-full text-slate-100 flex flex-col">
		<Header />
		<div className="max-w-7xl mx-auto px-4 mt-14 ">
			<div className="grid grid-cols-2 gap-x-16 items-start">
				<img
					src="https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/divhtybtltxjtyhhq2i5/sportswear-club-t-shirt-X6GDTv.png"
					alt="Camiseta azul marinho"
					className="rounded-2xl h-5/6 object-cover mx-auto"
				/>
				<div className="flex flex-col justify-center">
					<h1 className="text-5xl text-slate-100 font-bold mb-2">
						Camiseta Nike
					</h1>
					<span className="text-base text-slate-400 text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
						odit facilis aliquid aut reprehenderit tempore quae repellat, neque
						ad. Possimus, corrupti velit. Blanditiis officia quam velit dolorum
						repellat commodi cum.
					</span>
					<strong className="text-xl text-slate-200 mt-4">
						Modelo: Azul marinho
					</strong>

					<h2 className="text-4xl font-semibold mt-12 mb-24">R$ 100,00</h2>

					<Suspense fallback={<p>Carregando...</p>}>
						<CounterAppOne />
					</Suspense>
				</div>
			</div>
			<div className="w-full bg-slate-800 h-16 pb-80"></div>
		</div>
	</main>
);

export default App;
