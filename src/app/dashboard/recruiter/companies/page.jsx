import { getRecruiterCompany } from "@/lib/api/companies";
import { getUserSession } from "@/lib/core/session";
import MyCompaniesPage from "./MyCompaniesPage";

const CompanyPage = async () => {
	const user = await getUserSession();
	const company = await getRecruiterCompany(user?.id);

	return (
		<div>
			<MyCompaniesPage
				recruiter={user}
				recruiterCompany={company}
			></MyCompaniesPage>
		</div>
	);
};

export default CompanyPage;
