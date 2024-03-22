import React from "react";
import ListOfTodo from "./ListOfTodo";
import Table from "@/components/ui/Table";

export default function TodoTable() {
	const tableHeader = ["Name", "Secret 1", "Secret 2", "Secret 3"];

	return (
		<Table headers={tableHeader}>
			<ListOfTodo />
		</Table>
	);
}
