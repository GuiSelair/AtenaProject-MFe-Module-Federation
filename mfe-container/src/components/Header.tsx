import React from "react";

import logo from "../assets/logo.png";

export default function Header() {
	return (
		<header className="bg-slate-800 w-screen mt-6 text-slate-100 py-6">
			<div className="flex justify-between items-center max-w-7xl mx-auto px-4">
				<img
					src={logo}
					alt="Portfólio de Guilherme Selair"
					className="w-12 h-12 object-cover rounded-lg"
				/>

				<div className="w-6 h-6 bg-red-500"></div>
			</div>
		</header>
	);
}
