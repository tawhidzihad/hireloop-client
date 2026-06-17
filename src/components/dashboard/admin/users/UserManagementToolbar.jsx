export default function UserManagementToolbar() {
	return (
		<div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<h1 className="text-3xl font-semibold text-white">
					User Management
				</h1>

				<p className="mt-2 text-zinc-500">
					Review, filter, and manage platform users.
				</p>
			</div>
		</div>
	);
}
