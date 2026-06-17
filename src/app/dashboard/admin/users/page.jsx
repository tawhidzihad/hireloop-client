import UserManagementStats from "@/components/dashboard/admin/users/UserManagementStats";
import UserManagementToolbar from "@/components/dashboard/admin/users/UserManagementToolbar";
import UsersManagementTable from "@/components/dashboard/admin/users/UsersManagementTable";
import { getUsersList } from "@/lib/api/users";

export default async function AdminUsersPage() {
	const data = await getUsersList();
	const users = data?.users;

	return (
		<section className="space-y-6">
			<UserManagementToolbar />

			<UserManagementStats users={users} />

			<UsersManagementTable users={users} />
		</section>
	);
}
