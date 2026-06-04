const statusColors = {
	Interviewing: "bg-green-500/10 text-green-400 border-green-500/20",

	New: "bg-zinc-500/10 text-zinc-300 border-zinc-500/20",

	Reviewing: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",

	Rejected: "bg-red-500/10 text-red-400 border-red-500/20",
};

export default function ApplicationsCard({ applications }) {
	return (
		<div>
			{/* Desktop Table */}
			<div className="hidden lg:block overflow-x-auto">
				<table className="w-full min-w-175">
					<thead>
						<tr className="border-b border-white/10 text-left text-xs text-zinc-500">
							<th className="p-5">Candidate Name</th>
							<th className="p-5">Role</th>
							<th className="p-5">Date Applied</th>
							<th className="p-5">Experience</th>
							<th className="p-5">Status</th>
						</tr>
					</thead>

					<tbody>
						{applications.map((item) => (
							<tr
								key={item.id}
								className="border-b border-white/5 transition hover:bg-white/2"
							>
								<td className="p-5">
									<div className="flex items-center gap-3">
										<div className="h-10 w-10 rounded-full bg-zinc-800" />

										<span className="font-medium text-white">
											{item.name}
										</span>
									</div>
								</td>

								<td className="p-5 text-zinc-400">{item.role}</td>

								<td className="p-5 text-zinc-400">{item.date}</td>

								<td className="p-5 text-zinc-400">{item.experience}</td>

								<td className="p-5">
									<span
										className={`rounded-full border px-3 py-1 text-xs ${statusColors[item.status]}`}
									>
										{item.status}
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{/* Mobile Cards */}
			<div className="space-y-4 p-4 lg:hidden">
				{applications.map((item) => (
					<div
						key={item.id}
						className="rounded-xl border border-white/10 bg-zinc-900/30 p-4"
					>
						<div className="flex items-center gap-3">
							<div className="h-10 w-10 rounded-full bg-zinc-800" />

							<div>
								<h3 className="font-medium text-white">{item.name}</h3>

								<p className="text-sm text-zinc-400">{item.role}</p>
							</div>
						</div>

						<div className="mt-4 grid grid-cols-2 gap-3 text-sm">
							<div>
								<p className="text-zinc-500">Date Applied</p>

								<p className="text-white">{item.date}</p>
							</div>

							<div>
								<p className="text-zinc-500">Experience</p>

								<p className="text-white">{item.experience}</p>
							</div>
						</div>

						<div className="mt-4">
							<span
								className={`rounded-full px-3 py-1 text-xs ${statusColors[item.status]}`}
							>
								{item.status}
							</span>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
