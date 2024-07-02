"use client";
import React, { useState } from "react";
import { IoCheckbox } from "react-icons/io5";
import { MdCheckBoxOutlineBlank, MdDelete } from "react-icons/md";
import toast from "react-hot-toast";
import { LiaBookDeadSolid } from "react-icons/lia";
import AddTodoUI from "./AddTodoUI";
import { todoType } from "./_utils/types";

export default function Main() {
	const [todos, setTodos] = useState<todoType[]>(() => {
		const data = JSON.parse(localStorage.getItem("todosArray") || "[]");
		if (!data || !data.length)
			return [
				{
					title: "Click on the checkbox",
					completed: false,
					deadline: "",
				},
				{
					title: "Click on the dustbin",
					completed: true,
					deadline: "",
				},
				{
					title: "Select the calender to add a deadline like below",
					completed: false,
					deadline: "Dec 31, 1999 at 11:59 PM",
				},
			];
		return data;
	});

	function updateLStorageAndState(arr: todoType[]) {
		setTodos([...arr]);
		localStorage.setItem("todosArray", JSON.stringify(arr));
	}

	return (
		<div className="flex-col gap-3 justify-center items-center w-full px-2 mt-48">
			<AddTodoUI
				todos={todos}
				updateLStorageAndState={updateLStorageAndState}
			/>
			<div className="justify-center items-center p-4 gap-5 text-xl flex-wrap">
				{todos.map(({ title, completed, deadline }) => {
					return (
						<div
							key={title}
							className="items-center gap-2 px-4 py-2 bg-neutral-900 rounded-b-xl flex-col animate-pulse"
							style={{
								animation: "pulse 2s forwards",
								maxWidth: "90vw",
								boxShadow: `0 0 20px 2px ${`rgb(${
									completed
										? "70,255,70"
										: deadline
										? "255,70,70"
										: "70,70,255"
								})`}`,
							}}
						>
							<div className="items-center justify-center gap-2 flex-wrap">
								<p
									className="break-words text-base"
									style={{
										maxWidth: "75vw",
									}}
								>
									{title}
								</p>
								<div
									className="cursor-pointer"
									onClick={() => {
										for (let i = 0; i < todos.length; i++) {
											if (todos[i].title == title) {
												todos[i].completed =
													!todos[i].completed;
												updateLStorageAndState(todos);
												return;
											}
										}
									}}
								>
									{completed ? (
										<IoCheckbox
											onClick={() =>
												toast.error(
													"Task Marked Incomplete!"
												)
											}
											size={30}
										/>
									) : (
										<MdCheckBoxOutlineBlank
											onClick={() =>
												toast.success(
													"Task Marked Complete!"
												)
											}
											size={30}
										/>
									)}
								</div>
								<div className="cursor-pointer">
									<MdDelete
										size={30}
										color={`rgb(${
											completed
												? "70,255,70"
												: deadline
												? "255,70,70"
												: "70,70,255"
										})`}
										onClick={() => {
											// helpArray = helpArray.filter(
											// 	(val) => val.title !== title
											// );
											updateLStorageAndState(
												[...todos].filter(
													(val) => val.title !== title
												)
											);
											toast.success("Todo deleted!");
										}}
									/>
								</div>
							</div>
							{deadline && (
								<p className="text-neutral-500 text-sm flex items-center">
									<LiaBookDeadSolid
										size={30}
										color={`rgb(${
											completed
												? "70,255,70"
												: "255,70,70"
										})`}
									/>
									{deadline}
								</p>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
