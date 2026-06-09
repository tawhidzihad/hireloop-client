import CompanyOverviewCard from "@/components/jobs/jobDetails/CompanyOverviewCard";
import JobDescriptionCard from "@/components/jobs/jobDetails/JobDescriptionCard";
import JobDetailsHeader from "@/components/jobs/jobDetails/JobDetailsHeader";
import JobInfoStats from "@/components/jobs/jobDetails/JobInfoStats";
import { getJobById } from "@/lib/api/jobs";

export default async function JobDetailsPage({ params }) {
	const { id } = await params;
	const job = await getJobById(id);

	return (
		<section className="px-4 py-10">
			<div className="mx-auto max-w-7xl">
				<JobDetailsHeader job={job} />

				<JobInfoStats job={job} />

				<div className="mt-6 grid gap-6 lg:grid-cols-[1fr_350px]">
					<JobDescriptionCard job={job} />

					<CompanyOverviewCard job={job} />
				</div>
			</div>
		</section>
	);
}
