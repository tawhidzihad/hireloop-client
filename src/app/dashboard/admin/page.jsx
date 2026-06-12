import AdminCategoryChart from "@/components/dashboard/admin/AdminCategoryChart";
import AdminStatsGrid from "@/components/dashboard/admin/AdminStatsGrid";
import AdminTransactionsTable from "@/components/dashboard/admin/AdminTransactionsTable";
import AdminUsersChart from "@/components/dashboard/admin/AdminUsersChart";

export default function AdminDashboardPage() {
	return (
		<section className="bg-black py-10">
			<div className="">
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-white">
						Dashboard Overview
					</h1>

					<p className="text-zinc-500">
						Real-time platform performance and growth metrics.
					</p>
				</div>

				<AdminStatsGrid />

				<div className="mt-6 grid gap-6 lg:grid-cols-2">
					<AdminCategoryChart />

					<AdminUsersChart />
				</div>

				<div className="mt-6">
					<AdminTransactionsTable />
				</div>
			</div>
		</section>
	);
}
