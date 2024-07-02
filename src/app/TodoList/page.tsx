import React from "react";
import Main from "./Main";

export default function page() {
	return (
		<div className="flex-col justify-center items-center gap-5 p-6">
			<h1 className="text-3xl fixed top-0 border w-full bg-black z-10 text-center p-4">
				To Do List
			</h1>

			<Main />
		</div>
	);
}
