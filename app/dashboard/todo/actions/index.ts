// "use server";
export async function createTodo() {
}
export async function updateTodoById(id: string) {
	console.log("update todo");
}
export async function deleteTodoById(id: string) {}

export async function readTodos() {}

















// "use server";
// import { readUserSession } from "@/lib/actions";
// import { createSupabaseAdmin, createSupbaseServerClient } from "@/lib/supabase";
// import { User } from "@supabase/supabase-js";
// import { revalidatePath, unstable_noStore } from "next/cache";




// export async function createCredential(data: {
// 		name: string;
//     	credential1: string;
//         credential2: string;
//         credential3: string;
// 	}) {



// 	const {data:userSession} = await readUserSession()
// 	if(userSession.session?.user.user_metadata.role !== "admin" ){
// 		return JSON.stringify( {error:{message:"Not Permitted By Admin"}} );
// 	}

// 	const supabase = await createSupabaseAdmin();

// 	//Create Account

// 	const createResult = await supabase.auth.admin.createCredential({
// 		name: data.name,
// 		credential1: data.credential1,
//         credential2: data.credential2,
//         credential3: data.credential3,

// 	});

// 	if(createResult.error?.message){
// 	return JSON.stringify(createResult)
// 	} else {
// 	const credentialResult = await supabase.from("member").insert({
// 		name:data.name,
// 		id:createResult.data.user?.id,crdential1:data.credential1,
// 		id:createResult.data.user?.id,crdential2:data.credential2,
// 		id:createResult.data.user?.id,crdential3:data.credential3,
// 	});
// 	if(credentialResult.error?.message){
// 		return JSON.stringify(credentialResult);
// 	} else {
// 	const permissionResult = await supabase.from("permission")
// 	.insert({
		
// 		id:createResult.data.user?.id,crdential1:data.credential1,
// 		id:createResult.data.user?.id,crdential2:data.credential2,
// 		id:createResult.data.user?.id,crdential3:data.credential3,
// 		// role:data.role,
// 		// member_id:createResult.data.user?.id, 
// 		// status:data.status,
// 	});


// 	revalidatePath("/dashboard/member");


// 	return JSON.stringify(permissionResult);
// 	}
// 	}

// }











// export async function updateCredentialById(
// 	id: string, 
// 	data: {
// 			name: string;
// 			credential1: string;
// 			credential2: string;
// 			credential3: string;
			

// 	})  

// 	{
// 		const supabase = await createSupbaseServerClient();


// 		const result = await supabase.from("member").update(data).eq("id", id);

// 		revalidatePath("/dashboard/todo");

// 		return JSON.stringify(result); 
// 	}


















// export async function deleteMemberById(user_id: string) {

// 	const {data:userSession} = await readUserSession()
// 	if(userSession.session?.user.user_metadata.role !== "admin" ){
// 		return JSON.stringify( {error:{message:"Not Permitted By Admin"}} );
// 	}

// 	const supabaseAdmin = await createSupabaseAdmin();

// 	const deleteResult = await supabaseAdmin.auth.admin.deleteUser(user_id)
// 	if(deleteResult.error?.message){
// 		return JSON.stringify(deleteResult)
// 		} else {

// 			const supabase = await createSupbaseServerClient()

// 			const result = await supabase.from("member").delete().eq("id", user_id);

// 			revalidatePath("/dashboard/todo");

// 			return JSON.stringify(result);

// 		}

// }

 










// export async function readMembers() {

// 	unstable_noStore();

// 	const supabase = await createSupbaseServerClient()

// 	return await supabase.from("permission").select("*,member(*)")

// }




