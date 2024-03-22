import React from "react";
import CreateTodo from "./components/CreateTodo";
import CredentialTable from "../members/components/CredentialTable";

export default function Todo() {
	return (
		<div className="space-y-5 w-full overflow-y-auto px-3">
			<h1 className="text-3xl font-bold">Welcome to the GobalempireFx - Member Dashboard</h1>
			<p>Below Are The Credentials For Your Login, Keep It Safe, And Dont Share  With Anyone!</p>
			<div className="flex gap-2">
				<CreateTodo />
			</div>
			<CredentialTable />
		</div>
	);
}
