import { Gear, LayoutSideContent } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Link from "next/link";
import { FaMoneyBills } from "react-icons/fa6";
import { IoMdBusiness } from "react-icons/io";
import { LuBriefcaseBusiness } from "react-icons/lu";
import { RiDashboardLine } from "react-icons/ri";

export function DashboardSidebar() {
	const navItems = [
		{
			icon: RiDashboardLine,
			label: "Dashboard",
			href: "/dashboard/recruiter",
		},
		{
			icon: IoMdBusiness,
			label: "My Companies",
			href: "/dashboard/recruiter/companies",
		},
		{
			icon: LuBriefcaseBusiness,
			label: "Manage Jobs",
			href: "/dashboard/recruiter/jobs",
		},
		{ icon: FaMoneyBills, label: "Applications", href: "/" },
		{ icon: Gear, label: "Settings", href: "/" },
	];

	const navContent = (
		<nav className="flex flex-col gap-1">
			{navItems.map((item) => (
				<Link
					key={item.label}
					href={item.href}
					className=" flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
				>
					<item.icon className="size-5 text-muted" />
					<span>{item.label}</span>
				</Link>
			))}
		</nav>
	);

	return (
		<div className="px-4 flex justify-end pb-5 lg:pb-0 lg:px-0">
			<aside className="hidden lg:block w-64 shrink-0 border-r border-t border-default p-4 ">
				{navContent}
			</aside>

			<Drawer>
				<Button
					className={"lg:hidden rounded-xl w-full flex justify-between"}
					variant="ghost"
				>
					Menu <LayoutSideContent />
				</Button>
				<Drawer.Backdrop>
					<Drawer.Content placement="left">
						<Drawer.Dialog>
							<Drawer.CloseTrigger />
							<Drawer.Header>
								<Drawer.Heading>Hireloop</Drawer.Heading>
							</Drawer.Header>
							<Drawer.Body>{navContent}</Drawer.Body>
						</Drawer.Dialog>
					</Drawer.Content>
				</Drawer.Backdrop>
			</Drawer>
		</div>
	);
}
