"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function SignInPage() {
	const [showPassword, setShowPassword] = useState(false);

	const router = useRouter();
	const searchParams = useSearchParams();
	const redirectTo = searchParams.get("redirect") || "/";

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		defaultValues: {
			email: "",
			password: "",
			remember: false,
		},
	});

	const onSubmit = async (formData) => {
		const toastId = toast.loading("Signin your account...");
		const { data, error } = await authClient.signIn.email({
			email: formData.email,
			password: formData.password,
			rememberMe: formData.remember,
		});

		if (error) {
			toast.error(error.message, {
				id: toastId,
			});
			return;
		}

		if (data) {
			toast.success("Signin successful!", {
				id: toastId,
			});
			router.push(redirectTo);
		}
	};

	return (
		<div className="min-h-screen bg-black px-4 py-10">
			<div className="mx-auto flex min-h-[85vh] max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950">
				{/* Left Side */}
				<div className="hidden lg:flex lg:w-1/2 flex-col justify-center bg-linear-to-br from-[#6D5DFD]/20 via-black to-black p-12">
					<h1 className="text-5xl font-bold text-white">Welcome Back</h1>

					<p className="mt-6 text-lg text-zinc-400">
						Sign in to continue exploring jobs, manage applications, and
						grow your career.
					</p>

					<div className="mt-10 space-y-4">
						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							Access Your Dashboard
						</div>

						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							Track Applications
						</div>

						<div className="flex items-center gap-3 text-zinc-300">
							<Check className="h-5 w-5 text-green-500" />
							Discover New Opportunities
						</div>
					</div>
				</div>

				{/* Right Side */}
				<div className="flex w-full items-center justify-center p-6 lg:w-1/2 lg:p-12">
					<div className="w-full max-w-md">
						<div className="mb-8 text-center">
							<h2 className="text-4xl font-bold text-white">Sign In</h2>

							<p className="mt-2 text-zinc-400">
								Welcome back to HireLoop
							</p>
						</div>

						<form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
							{/* Email */}
							<div>
								<input
									type="email"
									placeholder="Email Address"
									{...register("email", {
										required: "Email is required",
										pattern: {
											value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
											message: "Invalid email address",
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

							{errors.password && (
								<p className="text-sm text-red-500">
									{errors.password.message}
								</p>
							)}

							{/* Remember Me + Forgot Password */}
							<div className="flex items-center justify-between">
								<label className="flex items-center gap-2 text-sm text-zinc-400">
									<input
										type="checkbox"
										{...register("remember")}
										className="h-4 w-4 rounded border-white/20 bg-zinc-900"
									/>
									Remember me
								</label>

								<Link
									href="/auth/forgot-password"
									className="text-sm text-[#6D5DFD] hover:underline"
								>
									Forgot Password?
								</Link>
							</div>

							{/* Submit */}
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full rounded-xl bg-[#6D5DFD] py-3 font-medium text-white transition hover:bg-[#7c6fff] disabled:cursor-not-allowed disabled:opacity-50"
							>
								{isSubmitting ? "Signing In..." : "Sign In"}
							</button>
						</form>

						<div className="mt-6 text-center">
							<p className="text-zinc-400">
								Don&lsquo;t have an account?{" "}
								<Link
									href={`/auth/signup?redirect=${redirectTo}`}
									className="font-medium text-[#6D5DFD]"
								>
									Sign Up
								</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
