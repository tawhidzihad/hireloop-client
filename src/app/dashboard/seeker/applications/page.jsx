import ApplicationsTable from "@/components/dashboard/seeker/ApplicationsTable";
import { getApplicationsByApplicant } from "@/lib/api/appications";
import { getUserSession } from "@/lib/core/session";

const ApplicationsPage = async () => {
	const user = await getUserSession();
	const applications = await getApplicationsByApplicant(user?.id);

	return (
		<div>
			<ApplicationsTable applications={applications} />
		</div>
	);
};

export default ApplicationsPage;
