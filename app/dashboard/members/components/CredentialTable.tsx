import React from 'react'
import Table from '@/components/ui/Table';
import ListOfMembers from './ListOfMembers';



export default function CredentialTable() {
    const tableHeader = ["Name","Secret 1", "Secret 2", "Secret 2"];
  return (
    <Table headers={tableHeader}>
			<ListOfMembers />
			{/* <CredentialList /> */}
		</Table>
  )
}

