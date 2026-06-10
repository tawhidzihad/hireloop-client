"use client";

import { authClient } from "@/lib/auth-client";
import { Label, Radio, RadioGroup } from "@heroui/react";
import { Check, Eye, EyeOff, X } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignupPage() {
	const [role, setRole] = useState("seeker");
	const [showPassword, setShowPassword] = useState(false);
	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get("redirect") || "/";

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
	});

	const password = watch("password", "");
	const confirmPassword = watch("confirmPassword", "");

	const passwordRules = {
		minLength: password.length >= 8,
		hasUppercase: /[A-Z]/.test(password),
		hasLowercase: /[a-z]/.test(password),
		hasNumber: /\d/.test(password),
	};

	const isPasswordValid = Object.values(passwordRules).every(Boolean);

	const passwordsMatch =
		password && confirmPassword && password === confirmPassword;

	const onSubmit = async (formData) => {
		if (!isPasswordValid) return;
		if (!passwordsMatch) return;

		const toastId = toast.loading("Creating account...");

		const { data, error } = await authClient.signUp.email({
			name: formData.name,
			email: formData.email,
			role,
			password: formData.password,
		});

		if (error) {
			toast.error(error.message, {
				id: toastId,
			});
			return;
		}

		if (data) {
			toast.success("Account created successfully!", {
				id: toastId,
			});
			await authClient.signOut();
			router.push(redirectTo);
		}
	};

	const ValidationItem = ({ valid, text }) => (
		<div className="flex items-center gap-2 text-sm">
			{valid ? (
				<Check className="h-4 w-4 text-green-500" />
			) : (
				<X className="h-4 w-4 text-red-500" />
			)}

			<span className={valid ? "text-green-500" : "text-zinc-400"}>
				{text}
			</span>
		</div>
	);

	return (
		<div className="min-h-screen bg-black px-4 py-10">
			<div className="mx-auto flex min-h-[85vh] max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
				{/* Left Side */}
				<div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-linear-to-br from-[#6D5DFD]/20 via-black to-black p-12">
					<h1 className="text-5xl font-bold text-white">Join HireLoop</h1>

					<p className="mt-6 text-lg text-zinc-400">
						Create your account and discover thousands of opportunities
						from world-class companies.
					</p>

					<div className="mt-10 space-y-4">
						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							Smart Job Discovery
						</div>

						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							AI-Powered Matching
						</div>

						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							One Click Apply
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
					<div className="w-full max-w-md">
						<div className="mb-8 text-center">
							<h2 className="text-4xl font-bold text-white">
								Create Account
							</h2>

							<p className="mt-2 text-zinc-400">
								Start your journey today
							</p>
						</div>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
							{/* Name */}
							<div>
								<input
									type="text"
									placeholder="Full Name"
									{...register("name", {
										required: "Name is required",
										minLength: {
											value: 2,
											message: "Minimum 2 characters",
										},
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-[#6D5DFD]"
								/>

								{errors.name && (
									<p className="mt-1 text-sm text-red-500">
										{errors.name.message}
									</p>
								)}
							</div>

							{/* Email */}
							<div>
								<input
									type="email"
									placeholder="Email Address"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email",
										},
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none transition focus:border-[#6D5DFD]"
								/>

								{errors.email && (
									<p className="mt-1 text-sm text-red-500">
										{errors.email.message}
									</p>
								)}
							</div>

							{/* Role Selection */}
							<div className="flex flex-col gap-4">
								<RadioGroup
									defaultValue="seeker"
									name="role"
									orientation="horizontal"
									onChange={(value) => setRole(value)}
								>
									<Radio value="seeker">
										<Radio.Control>
											<Radio.Indicator />
										</Radio.Control>

										<Radio.Content>
											<Label>Job Seeker</Label>
										</Radio.Content>
									</Radio>

									<Radio value="recruiter">
										<Radio.Control>
											<Radio.Indicator />
										</Radio.Control>
										<Radio.Content>
											<Label>Recruiter</Label>
										</Radio.Content>
									</Radio>
								</RadioGroup>
							</div>

							{/* Password */}
							<div className="relative">
								<input
									type={showPassword ? "text" : "password"}
									placeholder="Password"
									{...register("password", {
										required: "Password is required",
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-[#6D5DFD]"
								/>

								<button
									type="button"
									onClick={() => setShowPassword(!showPassword)}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
								>
									{showPassword ? (
										<EyeOff size={18} />
									) : (
										<Eye size={18} />
									)}
								</button>
							</div>

							{/* Password Validation */}
							<div className="rounded-xl border border-white/10 bg-zinc-900 p-4">
								<div className="space-y-2">
									<ValidationItem
										valid={passwordRules.minLength}
										text="Minimum 8 characters"
									/>

									<ValidationItem
										valid={passwordRules.hasUppercase}
										text="One uppercase letter"
									/>

									<ValidationItem
										valid={passwordRules.hasLowercase}
										text="One lowercase letter"
									/>

									<ValidationItem
										valid={passwordRules.hasNumber}
										text="One number"
									/>
								</div>
							</div>

							{/* Confirm Password */}
							<div className="relative">
								<input
									type={showConfirmPassword ? "text" : "password"}
									placeholder="Confirm Password"
									{...register("confirmPassword", {
										required: "Confirm your password",
									})}
									className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 pr-12 text-white outline-none transition focus:border-[#6D5DFD]"
								/>

								<button
									type="button"
									onClick={() =>
										setShowConfirmPassword(!showConfirmPassword)
									}
									className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
								>
									{showConfirmPassword ? (
										<EyeOff size={18} />
									) : (
										<Eye size={18} />
									)}
								</button>
							</div>

							{/* Match Status */}
							{confirmPassword && (
								<p
									className={`text-sm ${
										passwordsMatch ? "text-green-500" : "text-red-500"
									}`}
								>
									{passwordsMatch
										? "✓ Passwords match"
										: "✗ Passwords do not match"}
								</p>
							)}

							{/* Submit */}
							<button
								type="submit"
								disabled={
									!isPasswordValid || !passwordsMatch || isSubmitting
								}
								className="w-full rounded-xl bg-[#6D5DFD] py-3 font-medium text-white transition hover:bg-[#7b6dff] disabled:cursor-not-allowed disabled:opacity-50"
							>
								{isSubmitting
									? "Creating Account..."
									: "Create Account"}
							</button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-zinc-400">
								Already have an account?{" "}
								<Link
									href={`/auth/signin?redirect=${redirectTo}`}
									className="font-medium text-[#6D5DFD]"
								>
									Sign In
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
