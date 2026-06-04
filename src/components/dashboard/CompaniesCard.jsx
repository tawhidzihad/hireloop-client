export default function CompaniesCard({ companies }) {
	return (
		<div className="space-y-3 p-4 md:p-5">
			{companies.map((company) => (
				<div
					key={company.id}
					className=" flex items-center justify-between gap-3 rounded-xl border border-white/5 p-3 transition hover:bg-white/3"
				>
					<div className="flex min-w-0 items-center gap-3">
						<div className=" flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-800">
							{company.logo}
						</div>

						<div className="min-w-0">
							<h3 className="truncate font-medium text-white">
								{company.name}
							</h3>

							<p className="truncate text-xs text-zinc-500">
								{company.description}
							</p>
						</div>
					</div>

					<div className="text-right shrink-0">
						<p className="font-semibold text-white">{company.jobs}</p>

						<p className="text-[10px] text-zinc-500">JOBS</p>
					</div>
				</div>
			))}
		</div>
	);
}
