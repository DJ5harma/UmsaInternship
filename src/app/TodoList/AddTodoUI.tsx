"use client";
import React, { useState } from "react";
import { todoType } from "./_utils/types";
import toast from "react-hot-toast";
import convertToHumanFriendlyDate from "./_utils/convertToHumanFriendlyDate";
export default function AddTodoUI({
	todos,
	updateLStorageAndState,
}: {
	todos: todoType[];
	updateLStorageAndState: (arr: todoType[]) => void;
}) {
	const [query, setQuery] = useState({
		title: "",
		completed: false,
		deadline: "",
	});

	function validQuery() {
		if (query.title.length < 3) {
			toast.error("Title too short!");
			return false;
		}
		for (let i = 0; i < todos.length; i++) {
			if (todos[i].title === query.title) {
				toast.error("Todo already present!");
				return false;
			}
		}
		toast.success("Todo added!");
		return true;
	}
	return (
		<div className="flex-col fixed top-20 justify-center items-center z-10 bg-white opacity-90">
			<input
				className="bg-neutral-900 px-3 py-2 w-full focus:outline-none"
				onChange={(e) => setQuery({ ...query, title: e.target.value })}
				value={{ ...query }.title}
				placeholder="New Todo"
			/>
			<input
				type="datetime-local"
				className="bg-neutral-700 text-white px-3 py-2 text-center focus:outline-none"
				onChange={(e) => {
					const humanFriendlyDate = convertToHumanFriendlyDate(
						e.target.value
					);
					query.deadline = humanFriendlyDate;
					toast.success(`Deadline: ${humanFriendlyDate}`);
				}}
			/>
			<button
				onClick={() => {
					if (validQuery()) updateLStorageAndState([query, ...todos]);
				}}
				className="text-black justify-center items-center bg-white px-4 py-2 w-full"
			>
				Add +
			</button>
		</div>
	);
}
