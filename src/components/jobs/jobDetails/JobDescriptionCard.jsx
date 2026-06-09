import JobBenefits from "./JobBenefits";

export default function JobDescriptionCard({ job }) {
	return (
		<div className="rounded-3xl border border-white/10 bg-[#1f1f1f] p-8">
			<h2 className="text-2xl font-semibold text-white">Job Description</h2>

			<p className="mt-5 leading-8 text-zinc-400">{job.responsibilities}</p>

			<div className="mt-10">
				<h3 className="text-xl font-semibold text-white">Requirements</h3>

				<p className="mt-4 leading-8 text-zinc-400">{job.requirements}</p>
			</div>

			<JobBenefits benefits={job.benefits} />
		</div>
	);
}
