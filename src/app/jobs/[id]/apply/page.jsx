import ApplicationLimitCard from "@/components/jobs/jobApply/ApplicationLimitCard";
import ApplicationLimitReached from "@/components/jobs/jobApply/ApplicationLimitReached";
import JobApplyForm from "@/components/jobs/jobApply/JobApplyForm";
import JobApplySummary from "@/components/jobs/jobApply/JobApplySummary";
import { getApplicationsByApplicant } from "@/lib/api/appications";
import { getJobById } from "@/lib/api/jobs";
import { getPlanById } from "@/lib/api/plans";
import { getUserSession } from "@/lib/core/session";
import { BriefcaseBusiness, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

const ApplyPage = async ({ params }) => {
	const { id } = await params;
	const user = await getUserSession();
	const job = await getJobById(id);
	const applications = await getApplicationsByApplicant(user?.id);

	const plan = await getPlanById(user?.plan || "seeker_free");

	if (!user) {
		redirect(`/auth/signin?redirect=/jobs/${id}/apply`);
	}

	// recruiter role see this
	if (user?.role !== "seeker") {
		return (
			<section className="flex py-20 items-center justify-center px-4 bg-black">
				<div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#202024] p-8 text-center">
					<div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
						<ShieldAlert size={40} className="text-yellow-400" />
					</div>

					<h1 className="mt-6 text-3xl font-semibold text-white">
						Job Application Restricted
					</h1>

					<p className="mt-4 leading-7 text-zinc-400">
						Only Job Seeker accounts can apply for jobs. Your current
						account does not have permission to submit job applications.
					</p>

					<p className="mt-2 text-sm text-zinc-500">
						Please sign in with a Job Seeker account to continue your
						application process.
					</p>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
						<Link
							href="/jobs"
							className="rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white/5"
						>
							Browse Jobs
						</Link>

						<Link
							href="/auth/signin"
							className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#6D5DFD] px-5 py-3 font-medium text-white transition hover:bg-[#7b6dff]"
						>
							<BriefcaseBusiness size={16} />
							Login as Job Seeker
						</Link>
					</div>
				</div>
			</section>
		);
	}

	// seeker role see this
	return (
		<section className="px-4 py-10 bg-black">
			<div className="mx-auto max-w-7xl">
				{/* Header */}
				<div className="mb-8">
					<h1 className="text-4xl font-bold text-white">
						Apply for this Job
					</h1>

					<p className="mt-2 text-zinc-500">
						Complete the form below to submit your application.
					</p>
				</div>

				<ApplicationLimitCard
					totalApplications={applications.length}
					monthlyLimit={plan.maxApplicationsPerMonth}
					planName={plan.name}
				/>

				{applications.length < plan.maxApplicationsPerMonth ? (
					<div className="mt-6 grid gap-6 lg:grid-cols-[320px_1fr]">
						<JobApplySummary job={job} />
						<JobApplyForm applicant={user} job={job} />
					</div>
				) : (
					<ApplicationLimitReached planName={plan.name} />
				)}
			</div>
		</section>
	);
};

export default ApplyPage;
