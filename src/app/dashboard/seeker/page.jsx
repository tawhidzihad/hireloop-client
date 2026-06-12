import ApplicationStatus from "@/components/dashboard/seeker/ApplicationStatus";
import JobSeekerDashboardStats from "@/components/dashboard/seeker/JobSeekerDashboardStats";
import RecentActivities from "@/components/dashboard/seeker/RecentActivities";
import { getApplicationsByApplicant } from "@/lib/api/appications";
import { getUserSession } from "@/lib/core/session";

export default async function SeekerDashboardPage() {
	const user = await getUserSession();
	const applications = await getApplicationsByApplicant(user?.id);

	return (
		<section className="bg-black px-4 py-10">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-10">
					<h1 className="text-4xl font-bold text-white">Dashboard</h1>

					<p className="mt-2 text-zinc-500">
						Track your applications and job search progress.
					</p>
				</div>

				<JobSeekerDashboardStats applications={applications} />

				<div className="mt-6">
					{/* <DashboardProfile /> */}

					<ApplicationStatus applications={applications} />
				</div>

				<div className="mt-10">
					<RecentActivities />
				</div>
			</div>
		</section>
	);
}
