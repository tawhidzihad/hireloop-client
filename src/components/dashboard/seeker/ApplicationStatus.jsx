export default function ApplicationStatus({ applications }) {
	const statusData = [
		{
			label: "Applied",
			value: applications.length,
			color: "bg-white",
		},
		{
			label: "Under Review",
			value: 1,
			color: "bg-yellow-500",
		},
		{
			label: "Shortlisted",
			value: 0,
			color: "bg-blue-500",
		},
		{
			label: "Rejected",
			value: 2,
			color: "bg-red-500",
		},
		{
			label: "Offered",
			value: 1,
			color: "bg-green-500",
		},
	];

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024] p-6">
			<h3 className="text-xl font-semibold text-white">
				Application Status
			</h3>

			<div className="mt-8 space-y-5">
				{statusData.map((item) => (
					<div key={item.label}>
						<div className="mb-2 flex justify-between text-sm">
							<span className="text-zinc-400">{item.label}</span>

							<span className="text-white">{item.value}</span>
						</div>

						<div className="h-2 overflow-hidden rounded-full bg-white/5">
							<div
								className={`h-full ${item.color}`}
								style={{
									width: `${item.value * 10}%`,
								}}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
