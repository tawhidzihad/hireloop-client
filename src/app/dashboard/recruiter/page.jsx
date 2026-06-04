"use client";

import DashboardStats from "@/components/dashboard/DashboardStats";
import { useSession } from "@/lib/auth-client";
import {
	Briefcase,
	Building2,
	CheckCircle,
	FileText,
	Globe,
	Shield,
	Users,
	Zap,
} from "lucide-react";

const RecruiterDashboardPage = () => {
	const { data: session, isPending } = useSession();
	const user = session?.user;

	if (isPending) {
		return <div className="max-w-xs mx-auto py-30">Loading....</div>;
	}

	const stats = [
		{
			id: 1,
			title: "Total Job Posts",
			value: "48",
			icon: <FileText size={20} />,
		},
		{
			id: 2,
			title: "Total Applicants",
			value: "1,284",
			icon: <Users size={20} />,
		},
		{
			id: 3,
			title: "Active Jobs",
			value: "18",
			icon: <Zap size={20} />,
		},
		{
			id: 4,
			title: "Jobs Closed",
			value: "32",
			icon: <CheckCircle size={20} />,
		},
	];

	const applications = [
		{
			id: 1,
			name: "Julianne Moore",
			role: "Senior Product Designer",
			date: "Oct 24, 2023",
			experience: "6 years",
			status: "Interviewing",
		},
		{
			id: 2,
			name: "Robert Downey",
			role: "Backend Engineer",
			date: "Oct 23, 2023",
			experience: "4 years",
			status: "New",
		},
		{
			id: 3,
			name: "Emma Stone",
			role: "Marketing Lead",
			date: "Oct 22, 2023",
			experience: "8 years",
			status: "Reviewing",
		},
		{
			id: 4,
			name: "Chris Pratt",
			role: "Product Manager",
			date: "Oct 21, 2023",
			experience: "5 years",
			status: "Rejected",
		},
		{
			id: 5,
			name: "Scarlett Johansson",
			role: "Frontend Developer",
			date: "Oct 20, 2023",
			experience: "3 years",
			status: "Interviewing",
		},
	];

	const companies = [
		{
			id: 1,
			name: "Google Inc.",
			description: "Technology • Mountain View",
			jobs: 24,
			logo: <Globe size={18} />,
		},
		{
			id: 2,
			name: "Meta Platforms",
			description: "Social Media • Menlo Park",
			jobs: 18,
			logo: <Building2 size={18} />,
		},
		{
			id: 3,
			name: "Stripe",
			description: "Fintech • San Francisco",
			jobs: 12,
			logo: <Shield size={18} />,
		},
		{
			id: 4,
			name: "Tesla",
			description: "Automotive • Austin",
			jobs: 31,
			logo: <Zap size={18} />,
		},
		{
			id: 5,
			name: "Airbnb",
			description: "Travel • San Francisco",
			jobs: 15,
			logo: <Briefcase size={18} />,
		},
	];

	return (
		<div className="">
			<DashboardStats
				userName={user?.name}
				stats={stats}
				applications={applications}
				companies={companies}
			></DashboardStats>
		</div>
	);
};

export default RecruiterDashboardPage;
