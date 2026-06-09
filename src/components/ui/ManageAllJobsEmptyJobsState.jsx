import { BriefcaseBusiness, Plus } from "lucide-react";
import Link from "next/link";

export default function ManageAllJobsEmptyJobsState() {
	return (
		<div className="rounded-3xl border border-white/10 bg-[#1f1f1f]/40 p-6 md:p-10">
			<div className="flex flex-col items-center justify-center py-12 text-center md:py-20">
				{/* Icon */}
				<div className="relative">
					<div className="absolute inset-0 rounded-full bg-[#6D5DFD]/20 blur-3xl" />

					<div className="relative flex h-24 w-24 items-center justify-center rounded-3xl border border-white/10 bg-zinc-900">
						<BriefcaseBusiness size={40} className="text-zinc-500" />
					</div>

					<div className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black">
						<Plus size={18} />
					</div>
				</div>

				{/* Content */}
				<h2 className="mt-8 text-2xl font-semibold text-white">
					No jobs posted yet
				</h2>

				<p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
					Create your first job posting and start receiving applications
					from qualified candidates.
				</p>

				{/* Actions */}
				<div className="mt-8 flex flex-col gap-3 sm:flex-row">
					<Link
						href="/dashboard/recruiter/jobs/new"
						className=" inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 font-medium text-black transition hover:opacity-90"
					>
						<Plus size={16} />
						Post Your First Job
					</Link>

					<Link
						href="/dashboard/recruiter/company"
						className=" inline-flex h-12 items-center justify-center rounded-xl border border-white/10 bg-zinc-900 px-6 font-medium text-white transition hover:bg-zinc-800"
					>
						Regiter a Company
					</Link>
				</div>

				<p className="mt-8 text-xs text-zinc-600">
					Your job listings will appear here once published.
				</p>
			</div>
		</div>
	);
}
