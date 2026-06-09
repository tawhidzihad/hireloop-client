import { Plus } from "lucide-react";
import Link from "next/link";
import ManageAllJobsEmptyJobsState from "../ui/ManageAllJobsEmptyJobsState";
import ManageJobsTable from "./ManageJobsTable";

export default function ManageJobsSection({ jobs }) {
	return (
		<>
			{jobs.length === 0 ? (
				<>
					<ManageAllJobsEmptyJobsState></ManageAllJobsEmptyJobsState>
				</>
			) : (
				<section>
					<div className=" mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
						<div>
							<h1 className="text-3xl font-semibold text-white">
								Manage All Jobs
							</h1>

							<p className="mt-2 text-zinc-400">
								Add, View, Update, and manage your current job postings.
							</p>
						</div>

						<Link
							href={"/dashboard/recruiter/jobs/new"}
							className=" inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90 "
						>
							<Plus size={16} />
							Post a new job
						</Link>
					</div>

					<ManageJobsTable jobs={jobs} />
				</section>
			)}
		</>
	);
}
