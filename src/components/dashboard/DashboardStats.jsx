import ApplicationsCard from "./ApplicationsCard";
import CompaniesCard from "./CompaniesCard";
import DashboardSection from "./DashboardSection";
import StateCard from "./StateCard";

export default function DashboardStats({
	userName,
	stats,
	applications,
	companies,
}) {
	return (
		<section className="space-y-8">
			{/* Welcome */}
			<div>
				<h1 className="text-2xl md:text-3xl font-semibold text-white">
					Welcome back, {userName}
				</h1>

				<p className="mt-2 text-zinc-400">
					Here&lsquo;s what&apos;s happening with your jobs today.
				</p>
			</div>

			{/* Stats */}
			<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
				{stats.map((stat) => (
					<StateCard key={stat.id} {...stat} />
				))}
			</div>

			{/* Applications + Companies */}
			<DashboardSection
				leftTitle="Recent Applications"
				rightTitle="My Top Companies"
				leftAction={
					<button className="text-sm text-zinc-400 hover:text-white transition">
						View all
					</button>
				}
				rightAction={
					<button className="text-sm text-zinc-400 hover:text-white transition">
						View all
					</button>
				}
				leftContent={<ApplicationsCard applications={applications} />}
				rightContent={<CompaniesCard companies={companies} />}
			/>
		</section>
	);
}
