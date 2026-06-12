import ApplicationsTable from "@/components/dashboard/seeker/ApplicationsTable";
import { getApplicationsByApplicant } from "@/lib/api/appications";
import { getUserSession } from "@/lib/core/session";

const applications = [
	{
		_id: "1",
		jobTitle: "Senior Frontend Engineer",
		jobType: "Full-time • Remote",
		companyName: "Stark Industries",
		appliedAt: "2 hours ago",
		status: "Applied",
	},
	{
		_id: "2",
		jobTitle: "Product Designer",
		jobType: "Contract • Hybrid",
		companyName: "Cyberdyne Systems",
		appliedAt: "1 day ago",
		status: "Review",
	},
	{
		_id: "3",
		jobTitle: "Lead Data Scientist",
		jobType: "Full-time • On-site",
		companyName: "Wayne Enterprises",
		appliedAt: "4 days ago",
		status: "Shortlisted",
	},
	{
		_id: "4",
		jobTitle: "Cloud Architect",
		jobType: "Full-time • Remote",
		companyName: "Oscorp Tech",
		appliedAt: "1 week ago",
		status: "Rejected",
	},
	{
		_id: "5",
		jobTitle: "AI Research Engineer",
		jobType: "Full-time • Hybrid",
		companyName: "Hooli Corp",
		appliedAt: "2 weeks ago",
		status: "Offered",
	},
];

const ApplicationsPage = async () => {
	const user = await getUserSession();
	const applicati = await getApplicationsByApplicant(user?.id);

	return (
		<div>
			<ApplicationsTable applications={applications} />
		</div>
	);
};

export default ApplicationsPage;
