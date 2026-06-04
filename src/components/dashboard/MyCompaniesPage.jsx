import { Plus } from "lucide-react";
import Link from "next/link";
import MyCompanyCard from "./MyCompanyCard";

export default function MyCompaniesPage({ companies }) {
	return (
		<section>
			<div className=" mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
				<div>
					<h1 className="text-3xl font-semibold text-white">
						My Companies
					</h1>

					<p className="mt-2 text-zinc-400">
						Manage your registered companies and their verification
						states.
					</p>
				</div>

				<Link
					href={"/dashboard/recruiter/jobs/new"}
					className=" inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
				>
					<Plus size={16} />
					Register a company
				</Link>
			</div>

			<div className=" grid gap-6 md:grid-cols-2 2xl:grid-cols-3">
				{companies.map((company) => (
					<MyCompanyCard key={company.id} {...company} />
				))}
			</div>
		</section>
	);
}
