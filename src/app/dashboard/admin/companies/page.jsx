import CompanyRegistrationsHeader from "@/components/dashboard/admin/CompanyRegistrationsHeader";
import CompanyRegistrationsStats from "@/components/dashboard/admin/CompanyRegistrationsStats";
import CompanyRegistrationsTable from "@/components/dashboard/admin/CompanyRegistrationsTable";
import { getCompanies } from "@/lib/api/companies";

const AdminComapniesPage = async () => {
	const companies = await getCompanies();

	return (
		<section className="bg-black py-8">
			<div>
				<CompanyRegistrationsHeader companies={companies} />

				<div className="mt-6">
					<CompanyRegistrationsTable companies={companies} />
				</div>

				<div className="mt-6">
					<CompanyRegistrationsStats companies={companies}/>
				</div>
			</div>
		</section>
	);
};

export default AdminComapniesPage;
