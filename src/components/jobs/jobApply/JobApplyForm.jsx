"use client";

import { submitApplication } from "@/lib/actions/applications";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function JobApplyForm({ applicant, job }) {
	const router = useRouter();

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: applicant?.name || "",
			email: applicant?.email || "",
		},
	});

	const submitHandler = async (data) => {
		const newApplicationData = {
			...data,
			applicantId: applicant?.id,
			jobId: job?._id,
			jobTitle: job?.jobTitle,
			companyName: job?.companyName,
			companyWebsite: job?.companyWebsite,
			companyId: job?.companyId,
			status: "applied",
		};

		const res = await submitApplication(newApplicationData);

		if (res.insertedId) {
			toast.success("Your application has been submitted successfully.");
			router.push("/jobs");
		}
	};

	return (
		<form
			onSubmit={handleSubmit(submitHandler)}
			className="rounded-3xl border border-white/10 bg-[#202024] p-6"
		>
			<h2 className="mb-6 text-2xl font-semibold text-white">
				Application Details
			</h2>

			<div className="grid gap-5 md:grid-cols-2">
				<div>
					<label className="mb-2 block text-sm text-zinc-400">
						Full Name
					</label>

					<input
						{...register("name", {
							required: "Name is required",
						})}
						readOnly
						className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
					/>

					{errors.name && (
						<p className="mt-2 text-sm text-red-500">
							{errors.name.message}
						</p>
					)}
				</div>

				<div>
					<label className="mb-2 block text-sm text-zinc-400">Email</label>

					<input
						{...register("email", {
							required: "Email is required",
						})}
						readOnly
						className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
					/>
				</div>
			</div>

			<div className="mt-5">
				<label className="mb-2 block text-sm text-zinc-400">
					Portfolio / Website
				</label>

				<input
					{...register("portfolio", {
						required: "Portfolio website is required",
					})}
					placeholder="https://yourportfolio.com"
					className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
				/>
				{errors.portfolio && (
					<p className="mt-2 text-sm text-red-500">
						{errors.portfolio.message}
					</p>
				)}
			</div>

			<div className="mt-5">
				<label className="mb-2 block text-sm text-zinc-400">
					Resume Link
				</label>

				<input
					{...register("resume", {
						required: "Resume link is required",
					})}
					placeholder="Google Drive / Resume URL"
					className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
				/>

				{errors.resume && (
					<p className="mt-2 text-sm text-red-500">
						{errors.resume.message}
					</p>
				)}
			</div>

			<div className="mt-5">
				<label className="mb-2 block text-sm text-zinc-400">
					Cover Letter
				</label>

				<textarea
					{...register("coverLetter", {
						required: "Cover letter is required",
					})}
					placeholder="Google Drive / Cover Letter URL"
					rows={6}
					className="w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-white outline-none focus:border-[#6D5DFD]"
				/>

				{errors.coverLetter && (
					<p className="mt-2 text-sm text-red-500">
						{errors.coverLetter.message}
					</p>
				)}
			</div>

			<div className="mt-8 flex justify-end">
				<button
					type="submit"
					disabled={isSubmitting}
					className="rounded-xl bg-[#6D5DFD] px-6 py-3 font-medium text-white transition hover:bg-[#7d70ff]"
				>
					{isSubmitting ? "Submitting..." : "Submit Application"}
				</button>
			</div>
		</form>
	);
}
