import Link from "next/link";

export default function ApplicationLimitCard({
	totalApplications,
	monthlyLimit,
	planName,
}) {
	const remainingApplications = monthlyLimit - totalApplications;

	const progress = (totalApplications / monthlyLimit) * 100;

	const progressColor =
		totalApplications >= monthlyLimit
			? "#ef4444"
			: totalApplications >= monthlyLimit - 1
				? "#f59e0b"
				: "#6D5DFD";

	return (
		<div className="rounded-3xl border border-white/10 bg-[#202024] p-6">
			<div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
				<div>
					<div className="flex items-center gap-3">
						<p className="text-sm text-zinc-500">
							Monthly Application Usage
						</p>

						<span className="rounded-full border border-[#6D5DFD]/20 bg-[#6D5DFD]/10 px-2.5 py-1 text-xs font-medium text-[#A89FFF]">
							{planName} Plan
						</span>
					</div>

					<h2 className="mt-2 text-3xl font-bold text-white">
						{totalApplications} / {monthlyLimit}
					</h2>

					<p className="mt-2 text-sm text-zinc-400">
						You have{" "}
						<span className="font-medium text-white">
							{remainingApplications > 0 ? remainingApplications : 0}
						</span>{" "}
						free application
						{remainingApplications !== 1 ? "s" : ""} remaining this month.
					</p>

					{/* Show before limit reached */}
					{totalApplications < monthlyLimit && (
						<Link
							href={"/pricing"}
							className=" mt-4 inline-flex items-center rounded-xl border border-[#6D5DFD]/20 bg-[#6D5DFD]/10 px-4 py-2 text-sm font-medium text-[#A89FFF] transition hover:bg-[#6D5DFD]/20"
						>
							Upgrade Now
						</Link>
					)}
				</div>

				<div className="w-full max-w-sm">
					<div className="mb-2 flex items-center justify-between text-sm">
						<span className="text-zinc-500">Usage</span>

						<span className="text-white">
							{totalApplications}/{monthlyLimit}
						</span>
					</div>

					<div className="h-3 overflow-hidden rounded-full bg-white/5">
						<div
							className="h-full rounded-full transition-all duration-500"
							style={{
								width: `${Math.min(progress, 100)}%`,
								backgroundColor: progressColor,
							}}
						/>
					</div>
				</div>
			</div>

			{/* Limit Reached */}
			{totalApplications >= monthlyLimit && (
				<div className="mt-6 rounded-2xl border border-[#6D5DFD]/20 bg-[#6D5DFD]/10 p-4">
					<div className="mb-2 flex items-center justify-between">
						<h3 className="font-medium text-white">
							Monthly limit reached
						</h3>

						<span className="rounded-full border border-[#6D5DFD]/20 px-2.5 py-1 text-xs text-[#A89FFF]">
							{planName} Plan
						</span>
					</div>

					<p className="mt-2 text-sm text-zinc-400">
						You have used all free job applications for this month.
						Upgrade to Premium for unlimited applications and priority
						visibility.
					</p>

					<Link
						href={"/pricing"}
						className="inline-block mt-4 rounded-xl bg-[#6D5DFD] px-5 py-2.5 font-medium text-white transition hover:bg-[#7d70ff]"
					>
						Upgrade to Premium
					</Link>
				</div>
			)}
		</div>
	);
}
