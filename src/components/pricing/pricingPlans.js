import { BarChart3, Crown, Zap } from "lucide-react";

export const pricingPlans = {
	seeker: [
		{
			id: "seeker_free",
			name: "Free",
			price: "$0",
			period: "/forever",
			icon: Crown,
			features: [
				"Browse & save up to 10 jobs",
				"Apply to up to 3 jobs per month",
				"Basic profile",
				"Email alerts",
			],
		},
		{
			id: "seeker_pro",
			name: "Pro",
			price: "$19",
			period: "/month",
			icon: BarChart3,
			popular: true,
			features: [
				"Apply to up to 30 jobs per month",
				"Unlimited saved jobs",
				"Application tracking",
				"Salary insights",
			],
		},
		{
			id: "seeker_premium",
			name: "Premium",
			price: "$39",
			period: "/month",
			icon: Zap,
			features: [
				"Unlimited applications",
				"Profile boost to recruiters",
				"Early access to new jobs",
				"Priority support",
			],
		},
	],

	recruiter: [
		{
			id: "recruiter_free",
			name: "Free",
			price: "$0",
			period: "/forever",
			icon: Crown,
			features: [
				"Up to 3 active job posts",
				"Basic applicant management",
				"Standard listing visibility",
			],
		},
		{
			id: "recruiter_growth",
			name: "Growth",
			price: "$49",
			period: "/month",
			popular: true,
			icon: BarChart3,
			features: [
				"Up to 10 active job posts",
				"Applicant tracking",
				"Basic analytics",
				"Email support",
			],
		},
		{
			id: "recruiter_enterprise",
			name: "Enterprise",
			price: "$149",
			period: "/month",
			icon: Zap,
			features: [
				"Up to 50 active job posts",
				"Advanced analytics dashboard",
				"Featured listings",
				"Priority support",
			],
		},
	],
};
