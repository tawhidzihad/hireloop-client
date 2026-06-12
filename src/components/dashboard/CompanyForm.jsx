"use client";

import { createCompany } from "@/lib/actions/companies";
import { Building2, MapPin, Upload } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const industries = [
	"Technology",
	"Software Development",
	"Artificial Intelligence",
	"FinTech",
	"E-Commerce",
	"Healthcare",
	"Education",
	"Telecommunications",
	"Marketing & Advertising",
	"Real Estate",
	"Manufacturing",
	"Logistics & Supply Chain",
	"Media & Entertainment",
	"Cybersecurity",
	"Transportation & Technology",
	"Travel & Hospitality",
	"Consumer Electronics",
	"Technology & Internet Services",
	"Software & Cloud Computing",
	"Entertainment & Streaming",
	"Semiconductor & AI",
	"Music Streaming",
	"Automotive & Clean Energy",
];

const companySizes = [
	"1-10 employees",
	"11-50 employees",
	"51-200 employees",
	"201-500 employees",
	"501-1000 employees",
	"1001-5000 employees",
	"5000+ employees",
];

export default function CompanyForm({
	company,
	onSubmit,
	onCancel,
	recruiter,
}) {
	const router = useRouter();

	const [logoPreview, setLogoPreview] = useState(company?.logo || "");

	const {
		register,
		handleSubmit,
		reset,
		setValue,
		formState: { errors },
	} = useForm({
		defaultValues: {
			name: "",
			category: "",
			location: "",
			size: "",
			website: "",
			description: "",
			logo: "",
		},
	});

	useEffect(() => {
		if (company) {
			reset(company);
			setLogoPreview(company.logo);
		}
	}, [company, reset]);

	const handleLogoChange = async (e) => {
		const file = e.target.files?.[0];
		if (!file) return;

		setLogoPreview(URL.createObjectURL(file));

		// ImgBB Upload
		const formData = new FormData();
		formData.append("image", file);

		try {
			const res = await fetch(
				`https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
				{
					method: "POST",
					body: formData,
				},
			);

			const data = await res.json();

			if (data.success) {
				setValue("logo", data.data.url);
			}
		} catch (error) {
			console.error(error);
		}
	};

	const submitHandler = async (data) => {
		const newCompanyData = {
			...data,
			recruiterId: recruiter?.id,
			status: company && company?.status ? company.status : "Pending",
		};
		onSubmit(newCompanyData);

		const responseData = await createCompany(newCompanyData);
		if (responseData.insertedId) {
			const registaredCompany = {
				...newCompanyData,
				_id: responseData.insertedId,
			};
			onSubmit(registaredCompany);
			toast.success("Company profile created successfully!");
		}
	};

	return (
		<div className="rounded-3xl border border-white/10 bg-[#1f1f1f] p-6 md:p-8">
			<div className="mb-8">
				<h2 className="text-3xl font-semibold text-white">
					{company ? "Edit Company" : "Register Company"}
				</h2>

				<p className="mt-2 text-zinc-500">
					Fill in your company information.
				</p>
			</div>

			<form onSubmit={handleSubmit(submitHandler)} className="space-y-8">
				{/* Image upload and preview */}
				<div>
					<label className="mb-3 block text-sm font-medium text-zinc-300">
						Company Logo
					</label>

					<input
						type="hidden"
						{...register("logo", {
							required: "Company logo is required",
						})}
					/>

					<div className="flex flex-col gap-4 sm:flex-row sm:items-center">
						<div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-zinc-900">
							{logoPreview ? (
								<Image
									src={logoPreview}
									alt="Logo"
									fill
									className="object-cover"
								/>
							) : (
								<Building2 className="text-zinc-600" />
							)}
						</div>

						<label className="cursor-pointer">
							<input
								type="file"
								accept="image/*"
								className="hidden"
								onChange={handleLogoChange}
							/>

							<div className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white hover:bg-zinc-800">
								<Upload size={16} />
								Upload Company Logo
							</div>
						</label>
					</div>

					{errors.logo && (
						<p className="mt-2 text-sm text-red-500">
							{errors.logo.message}
						</p>
					)}
				</div>

				{/* Information */}
				<div className="grid gap-5 md:grid-cols-2">
					{/* Company Name */}
					<div>
						<label className="mb-2 block text-sm text-zinc-400">
							Company Name
						</label>

						<input
							{...register("name", {
								required: "Company name is required",
							})}
							placeholder="e.g. Acme Corp"
							className="focus:border-[#6D5DFD] outline-none h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white"
						/>

						{errors.name && (
							<p className="mt-2 text-sm text-red-500">
								{errors.name.message}
							</p>
						)}
					</div>

					{/* Industry / category */}
					<div>
						<label className="mb-2 block text-sm text-zinc-400">
							Industry
						</label>

						<select
							{...register("category", {
								required: "Industry is required",
							})}
							className=" h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
						>
							<option value="" className="bg-zinc-900">
								Select Industry
							</option>

							{industries.map((industry) => (
								<option
									key={industry}
									value={industry}
									className="bg-zinc-900"
								>
									{industry}
								</option>
							))}
						</select>

						{errors.category && (
							<p className="mt-2 text-sm text-red-500">
								{errors.category.message}
							</p>
						)}
					</div>

					{/* Location */}
					<div>
						<label className="mb-2 block text-sm text-zinc-400">
							Location
						</label>

						<div className="relative">
							<MapPin
								size={18}
								className="text-white/40 absolute left-4 top-1/2 -zinc-500 -translate-y-1/2"
							/>

							<input
								placeholder="e.g. Dhaka, Bangladesh"
								{...register("location", {
									required: "Location is required",
								})}
								className=" h-12 w-full rounded-xl border border-white/10 bg-zinc-900 pl-11 pr-4 text-white outline-none focus:border-[#6D5DFD]"
							/>
						</div>

						{errors.location && (
							<p className="mt-2 text-sm text-red-500">
								{errors.location.message}
							</p>
						)}
					</div>

					{/* Employee Count Range */}
					<div>
						<label className="mb-2 block text-sm text-zinc-400">
							Company Size
						</label>

						<select
							{...register("size", {
								required: "Company size is required",
							})}
							className=" h-12 w-full rounded-xl border border-white/10 bg-zinc-900 px-4 text-white outline-none focus:border-[#6D5DFD]"
						>
							<option value="" className="bg-zinc-900">
								Select company size
							</option>

							{companySizes.map((size) => (
								<option key={size} value={size} className="bg-zinc-900">
									{size}
								</option>
							))}
						</select>

						{errors.size && (
							<p className="mt-2 text-sm text-red-500">
								{errors.size.message}
							</p>
						)}
					</div>
				</div>

				{/* Website URL */}
				<div>
					<label className="mb-2 block text-sm text-zinc-400">
						Website URL
					</label>

					<div className="flex h-12 overflow-hidden rounded-xl border border-white/10 bg-zinc-900 transition-all duration-200 focus-within:border-[#6D5DFD] focus-within:ring-1 focus-within:ring-[#6D5DFD]/30">
						<div className=" flex items-center border-r border-white/10 bg-white/5 px-4 text-zinc-400">
							https://
						</div>

						<input
							type="text"
							placeholder="www.company.com"
							{...register("website", {
								required: "Website is required",
							})}
							className=" flex-1 bg-transparent px-4 text-white outline-none placeholder:text-zinc-500"
						/>
					</div>
				</div>

				{/* Description */}
				<div>
					<label className="mb-2 block text-sm text-zinc-400">
						Brief Description
					</label>

					<textarea
						rows={5}
						{...register("description", {
							required: "Description is required",
						})}
						className="outline-none focus:border-[#6D5DFD] w-full rounded-xl border border-white/10 bg-zinc-900 p-4 text-white"
						placeholder="Tell us about your company's mission and culture..."
					/>

					{errors.description && (
						<p className="mt-2 text-sm text-red-500">
							{errors.description.message}
						</p>
					)}
				</div>

				<div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
					<button
						type="reset"
						onClick={onCancel}
						className="rounded-xl border border-white/10 px-6 py-3 text-white"
					>
						Cancel
					</button>

					<button
						type="submit"
						className="rounded-xl bg-white px-6 py-3 font-medium text-black"
					>
						{company ? "Update Company" : "Register Company"}
					</button>
				</div>
			</form>
		</div>
	);
}
