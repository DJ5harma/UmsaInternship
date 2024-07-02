"use client";
import Link from "next/link";
// import { useRouter } from "next/router";
import React from "react";

export default function ProjectsList() {
	// const router = useRouter();

	const LinkBlock = ({
		title,
		description,
		href,
	}: {
		title: string;
		description: string;
		href: string;
	}) => {
		return (
			<Link
				href={href}
				// onClick={() => router.push(href)}
				className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left"
			>
				<button className="px-4 py-3 hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
					<h2 className="mb-3 text-2xl font-semibold">
						{title}{" "}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
							-&gt;
						</span>
					</h2>
					<p className="text-sm opacity-50">{description}</p>
				</button>
			</Link>
		);
	};
	return (
		<>
			<h1 className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px] text-3xl">
				Internship Projects
			</h1>
			<p>By Dhananjay Bhargav Sharma</p>

			<LinkBlock
				title="ToDo List"
				description="Manage your todos with deadlines."
				href="/TodoList"
			/>
		</>
	);
}
