"use client";

import { useState } from "react";

import CompanyForm from "@/components/dashboard/CompanyForm";
import EmptyCompanyState from "@/components/dashboard/EmptyCompanyState";
import CompanyProfileCard from "@/components/ui/CompanyProfileCard";

export default function MyCompaniesPage({ recruiter, recruiterCompany }) {
	const [company, setCompany] = useState(recruiterCompany);
	const [isEditing, setIsEditing] = useState(false);

	const handleSaveCompany = (companyData) => {
		setCompany(companyData);
		setIsEditing(false);
	};

	return (
		<section className="pt-10">
			{!company?._id ? (
				<>
					{isEditing ? (
						<CompanyForm
							company={null}
							onSubmit={handleSaveCompany}
							recruiter={recruiter}
							onCancel={() => setIsEditing(false)}
						/>
					) : (
						<EmptyCompanyState onRegister={() => setIsEditing(true)} />
					)}
				</>
			) : isEditing ? (
				<CompanyForm
					company={company}
					onSubmit={handleSaveCompany}
					onCancel={() => setIsEditing(false)}
				/>
			) : (
				<CompanyProfileCard
					company={company}
					onEdit={() => setIsEditing(true)}
				/>
			)}
		</section>
	);
}