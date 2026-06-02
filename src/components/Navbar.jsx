"use client";

import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const navLinks = [
		{ name: "Browse Jobs", href: "/jobs" },
		{ name: "Company", href: "/company" },
		{ name: "Pricing", href: "/pricing" },
	];

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

						<Link
							href="/login"
							className="text-[#7565FF] font-medium hover:text-[#8a7cff] transition"
						>
							Sign In
						</Link>

						<Button className=" bg-[#6D5DFD] text-white font-medium px-7 min-w-33.75 h-12 hover:scale-[1.03] transition-all rounded-xl">
							Get Started
						</Button>
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

							<Link href="/login" className="text-[#7565FF]">
								Sign In
							</Link>

							<Button className="bg-[#6D5DFD] text-white w-full">
								Get Started
							</Button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
