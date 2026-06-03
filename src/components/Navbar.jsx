"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Spinner } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Navbar() {
	const { data: session, isPending } = authClient.useSession();
	const user = session?.user;

	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Browse Jobs", href: "/jobs" },
		{ name: "Company", href: "/company" },
		{ name: "Pricing", href: "/pricing" },
	];

	const handleSignOut = async () => {
		const toastId = toast.loading("Signing out...");
		await authClient.signOut({
			fetchOptions: {
				onSuccess: () => {
					toast.success("Signed out successfully", {
						id: toastId,
					});
					router.push("/");
				},
			},
		});
	};

	return (
		<header className="w-full py-6 px-4 bg-black">
			<div className="max-w-7xl mx-auto">
				<div className="bg-[#202024] rounded-xl px-6 lg:px-8 h-18 flex items-center justify-between border border-white/5 ">
					{/* Logo */}
					<Link href="/" className="flex items-center">
						<Image
							src="/images/logo.png"
							alt="HireLoop"
							width={1000}
							height={1000}
							className="h-12 w-auto"
							priority
						/>
					</Link>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-10">
						{navLinks.map((item) => (
							<Link
								key={item.name}
								href={item.href}
								className=" text-white/90 text-sm font-medium transition hover:text-white"
							>
								{item.name}
							</Link>
						))}

						<div className="h-6 w-px bg-white/15" />

						{isPending ? (
							<div className="flex flex-col items-center">
								<Spinner size="lg" className="text-[#7565FF]" />
							</div>
						) : user ? (
							<div className="flex items-center gap-3">
								<p>
									Hey{" "}
									<span className="text-[#7565FF]">{user?.name}</span>
								</p>
								<Button variant="outline" onClick={handleSignOut}>
									Log Out
								</Button>
							</div>
						) : (
							<>
								<Link
									href="/auth/signin"
									className="text-[#7565FF] font-medium hover:text-[#8a7cff] transition"
								>
									Sign In
								</Link>

								<Link href={"/auth/signup"}>
									<Button className=" bg-[#6D5DFD] text-white font-medium px-7 min-w-33.75 h-12 hover:scale-[1.03] transition-all rounded-xl">
										Get Started
									</Button>
								</Link>
							</>
						)}
					</div>

					{/* Mobile Button */}
					<button
						onClick={() => setIsOpen(!isOpen)}
						className="md:hidden text-white"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden mt-3 bg-[#202024] rounded-2xl p-5 border border-white/5">
						<div className="flex flex-col gap-5">
							{navLinks.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={() => setIsOpen(false)}
									className="text-white/90"
								>
									{item.name}
								</Link>
							))}

							{isPending ? (
								<div className="flex justify-start items-center">
									<Spinner size="lg" className="text-[#7565FF]" />
								</div>
							) : user ? (
								<div className="flex items-center justify-between">
									<p>
										Hey{" "}
										<span className="text-[#7565FF]">
											{user?.name}
										</span>
									</p>
									<Button variant="ghost" onClick={handleSignOut}>
										Log Out
									</Button>
								</div>
							) : (
								<>
									<Link
										href={"/auth/signin"}
										className="text-[#7565FF]"
									>
										Sign In
									</Link>

									<Link href={"/auth/signup"}>
										<Button className="bg-[#6D5DFD] text-white w-full">
											Get Started
										</Button>
									</Link>
								</>
							)}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
