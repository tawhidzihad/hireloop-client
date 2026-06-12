"use client";

export default function CompanyRegistrationsHeader({ companies }) {
	return (
		<div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
			<div>
				<h1 className="text-3xl font-bold text-white">
					Company Registrations
				</h1>

				<p className="mt-2 text-zinc-500">
					Review and manage company registration requests.
				</p>
			</div>

			<div>
				<h3 className="text-xl font-bold text-white">
					Total {companies.length} Companies
				</h3>
			</div>
		</div>
	);
}
