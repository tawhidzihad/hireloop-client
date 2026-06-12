export default function AdminStatCard({ title, value, change, icon: Icon }) {
	return (
		<div className="rounded-2xl border border-white/10 bg-[#202024] p-5">
			<div className="flex items-start justify-between">
				<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
					<Icon size={18} className="text-zinc-300" />
				</div>

				<span className="text-xs font-medium text-green-400">{change}</span>
			</div>

			<p className="mt-4 text-sm text-zinc-500">{title}</p>

			<h2 className="mt-1 text-3xl font-bold text-white">{value}</h2>
		</div>
	);
}
