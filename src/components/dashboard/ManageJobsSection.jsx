import ManageJobsTable from "./ManageJobsTable";

export default function ManageJobsSection({ jobs }) {
	return (
		<section>
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-white">Manage All Jobs</h1>

				<p className="mt-2 text-zinc-400">
					View, update, and manage your current job postings.
				</p>
			</div>

			<ManageJobsTable jobs={jobs} />
		</section>
	);
}
