export default function UserManagementStats({ users }) {
	const activeUsers = users.filter((user) => !user.banned).length;

	const suspendedUsers = users.filter((user) => user.banned).length;

	const recruiters = users.filter((user) => user.role === "recruiter").length;

	// Last 24 Hours Signup
	const last24HoursUsers = users.filter((user) => {
		const createdAt = new Date(user.createdAt);
		const now = new Date();

		const diffHours = (now - createdAt) / (1000 * 60 * 60);

		return diffHours <= 24;
	}).length;

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
			{/* Active Users */}
			<div className="rounded-2xl border border-white/10 bg-[#202024] p-5">
				<p className="text-sm text-zinc-500">Total Active Users</p>

				<h3 className="mt-2 text-3xl font-bold text-white">
					{activeUsers}
				</h3>

				<p className="mt-2 text-xs text-green-400">
					Currently active accounts
				</p>
			</div>

			{/* Recruiters */}
			<div className="rounded-2xl border border-white/10 bg-[#202024] p-5">
				<p className="text-sm text-zinc-500">Recruiters</p>

				<h3 className="mt-2 text-3xl font-bold text-white">{recruiters}</h3>

				<p className="mt-2 text-xs text-blue-400">Hiring companies</p>
			</div>

			{/* Suspended */}
			<div className="rounded-2xl border border-white/10 bg-[#202024] p-5">
				<p className="text-sm text-zinc-500">Suspended Accounts</p>

				<h3 className="mt-2 text-3xl font-bold text-white">
					{suspendedUsers}
				</h3>

				<p className="mt-2 text-xs text-red-400">Restricted users</p>
			</div>

			{/* New Signups */}
			<div className="rounded-2xl border border-white/10 bg-[#202024] p-5">
				<p className="text-sm text-zinc-500">New Signups (24h)</p>

				<h3 className="mt-2 text-3xl font-bold text-white">
					{last24HoursUsers}
				</h3>

				<p className="mt-2 text-xs text-yellow-400">Recent registrations</p>
			</div>
		</div>
	);
}
