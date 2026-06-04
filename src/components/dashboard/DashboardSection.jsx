export default function DashboardSection({
	leftTitle,
	rightTitle,
	leftAction,
	rightAction,
	leftContent,
	rightContent,
}) {
	return (
		<div className="grid gap-6 lg:grid-cols-1 xl:grid-cols-[2fr_1fr]">
			{/* Left Card */}
			<div className="rounded-2xl border border-white/10 bg-zinc-950">
				<div className="flex items-center justify-between border-b border-white/10 p-5">
					<h2 className="text-lg font-semibold text-white">{leftTitle}</h2>

					{leftAction}
				</div>

				<div>{leftContent}</div>
			</div>

			{/* Right Card */}
			<div className="rounded-2xl border border-white/10 bg-zinc-950">
				<div className="flex items-center justify-between border-b border-white/10 p-5">
					<h2 className="text-lg font-semibold text-white">
						{rightTitle}
					</h2>

					{rightAction}
				</div>

				<div>{rightContent}</div>
			</div>
		</div>
	);
}
