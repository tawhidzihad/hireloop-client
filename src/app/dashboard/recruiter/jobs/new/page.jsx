"use client";

import { createJob } from "@/lib/actions/jobs";
import { redirect } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { LuBriefcaseBusiness } from "react-icons/lu";

export default function NewJobPage() {
	const [isRemote, setIsRemote] = useState(false);

	// TODO: Add will be future
	const company = {
		id: "company_001",
		name: "HireLoop Technologies",
		status: "approved",
	};

	const {
		register,
		handleSubmit,
		watch,
		clearErrors,
		reset,
		formState: { errors, isSubmitting },
	} = useForm();

	const minSalary = watch("minSalary");

	const onSubmit = async (data) => {
		const toastId = toast.loading("Job posting...");

		const payload = {
			...data,
			companyId: company.id,
			status: "active",
			isRemote,
		};

		const res = await createJob(payload);
		if (res.insertedId) {
			toast.success("Job posted successfully", {
				id: toastId,
			});
			reset();
			redirect("/dashboard/recruiter/jobs");
		}
	};

	return (
		<div className="w-full md:p-8">
			<div className="overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
				{/* Header */}
				<div className="border-b border-white/10 p-6 md:p-8">
					<h1 className="text-3xl font-bold text-white">Post a New Job</h1>

					<p className="mt-2 text-zinc-400">
						Create a new job opportunity and start receiving applications.
					</p>
				</div>

				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-10 p-6 md:p-8"
				>
					{/* Company */}
					<section>
						<h2 className="mb-4 text-xl font-semibold text-white">
							Company Information
						</h2>

						<div className=" flex flex-col gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 p-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-3">
								<div className=" flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10">
									<LuBriefcaseBusiness
										size={18}
										className="text-zinc-300"
									/>
								</div>

								<div>
									<p className="text-xs text-zinc-500">Posting as</p>

									<h3 className="font-medium text-white">
										{company.name}
										<span className="ml-2 text-zinc-400">
											(Auto-filled)
										</span>
									</h3>
								</div>
							</div>

							<span className=" w-fit rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-sm font-medium text-green-400">
								Approved
							</span>
						</div>

						{company.status !== "approved" && (
							<p className="mt-3 text-sm text-red-400">
								Your company must be approved before posting jobs.
							</p>
						)}
					</section>

					{/* Job Information */}
					<section>
						<h2 className="text-xl font-semibold text-white">
							Job Information
						</h2>

						<p className="mt-1 text-sm text-zinc-500">
							Basic information about the position.
						</p>

						<div className="mt-6 grid gap-5 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Job Title *
								</label>

								<input
									type="text"
									placeholder="Senior Frontend Developer"
									{...register("jobTitle", {
										required: "Job title is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
								/>

								{errors.jobTitle && (
									<p className="mt-2 text-sm text-red-500">
										{errors.jobTitle.message}
									</p>
								)}
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Job Category *
								</label>

								<select
									{...register("jobCategory", {
										required: "Category is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none"
								>
									<option value="">Select Category</option>
									<option value="frontend">
										Frontend Development
									</option>
									<option value="backend">Backend Development</option>
									<option value="fullstack">
										Full Stack Development
									</option>
									<option value="design">UI/UX Design</option>
									<option value="marketing">Marketing</option>
								</select>
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Job Type *
								</label>

								<select
									{...register("jobType", {
										required: "Job type is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none"
								>
									<option value="">Select Type</option>
									<option value="full-time">Full Time</option>
									<option value="part-time">Part Time</option>
									<option value="remote">Remote</option>
									<option value="contract">Contract</option>
									<option value="internship">Internship</option>
								</select>
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Application Deadline *
								</label>

								<input
									type="date"
									{...register("deadline", {
										required: "Deadline is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
								/>
							</div>
						</div>
					</section>

					{/* Salary */}
					<section className="border-t border-white/10 pt-10">
						<h2 className="text-xl font-semibold text-white">
							Salary Information
						</h2>

						<div className="mt-6 grid gap-5 md:grid-cols-3">
							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Minimum Salary
								</label>

								<input
									type="number"
									{...register("minSalary")}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Maximum Salary
								</label>

								<input
									type="number"
									{...register("maxSalary", {
										validate: (value) =>
											!value ||
											Number(value) > Number(minSalary) ||
											"Maximum salary must be greater than minimum salary",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none"
								/>

								{errors.maxSalary && (
									<p className="mt-2 text-sm text-red-500">
										{errors.maxSalary.message}
									</p>
								)}
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Currency
								</label>

								<select
									{...register("currency")}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white"
								>
									<option value="USD">USD</option>
									<option value="EUR">EUR</option>
									<option value="BDT">BDT</option>
								</select>
							</div>
						</div>
					</section>

					{/* Location */}
					<section className="border-t border-white/10 pt-10">
						<h2 className="text-xl font-semibold text-white">Location</h2>

						<div className="mt-5 flex items-center gap-3">
							<input
								type="checkbox"
								id="remote"
								checked={isRemote}
								onChange={() => {
									setIsRemote(!isRemote);
									if (!isRemote) {
										clearErrors(["city", "country"]);
									}
								}}
								className="h-4 w-4"
							/>

							<label htmlFor="remote" className="text-zinc-300">
								Fully Remote Position
							</label>
						</div>

						<div className="mt-6 grid gap-5 md:grid-cols-2">
							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									City
								</label>

								<input
									type="text"
									disabled={isRemote}
									placeholder="Dhaka"
									{...register("city", {
										required: !isRemote && "City is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none disabled:opacity-50"
								/>
								{errors.city && (
									<p className="mt-2 text-sm text-red-500">
										{errors.city.message}
									</p>
								)}
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Country
								</label>

								<input
									type="text"
									disabled={isRemote}
									placeholder="Bangladesh"
									{...register("country", {
										required: !isRemote && "Country is required",
									})}
									className="h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none disabled:opacity-50"
								/>
								{errors.country && (
									<p className="mt-2 text-sm text-red-500">
										{errors.country.message}
									</p>
								)}
							</div>
						</div>
					</section>

					{/* Description */}
					<section className="border-t border-white/10 pt-10">
						<h2 className="text-xl font-semibold text-white">
							Job Description
						</h2>

						<div className="mt-6 space-y-5">
							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Responsibilities *
								</label>

								<textarea
									rows={6}
									{...register("responsibilities", {
										required: "Responsibilities are required",
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-white outline-none focus:border-[#6D5DFD]"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Requirements *
								</label>

								<textarea
									rows={6}
									{...register("requirements", {
										required: "Requirements are required",
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-white outline-none focus:border-[#6D5DFD]"
								/>
							</div>

							<div>
								<label className="mb-2 block text-sm text-zinc-400">
									Benefits (Optional)
								</label>

								<textarea
									rows={4}
									{...register("benefits")}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-white outline-none focus:border-[#6D5DFD]"
								/>
							</div>
						</div>
					</section>

					{/* Footer */}
					<div className="flex flex-col-reverse gap-3 border-t border-white/10 pt-8 sm:flex-row sm:justify-end">
						<button
							type="reset"
							className="rounded-xl border border-white/10 px-5 py-3 text-white transition hover:bg-white/5"
						>
							Cancel
						</button>

						<button
							type="submit"
							disabled={isSubmitting}
							className="rounded-xl bg-[#6D5DFD] px-5 py-3 font-medium text-white transition hover:bg-[#7d70ff] disabled:opacity-50"
						>
							{isSubmitting ? "Publishing..." : "Publish Job"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
