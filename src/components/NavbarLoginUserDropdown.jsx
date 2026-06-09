import { ArrowRightFromSquare } from "@gravity-ui/icons";
import { Avatar, Dropdown, Label } from "@heroui/react";
import Link from "next/link";

export function NavbarLoginUserDropdown({ handleSignOut, user }) {
	const initials =
		user?.name
			?.trim()
			?.split(" ")
			?.slice(0, 2)
			?.map((word) => word[0])
			?.join("") || "U";

	return (
		<Dropdown>
			<Dropdown.Trigger className="rounded-full">
				<Avatar>
					<Avatar.Image
						alt={user?.name}
						src={user?.image}
						referrerPolicy="no-referrer"
					/>
					<Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
				</Avatar>
			</Dropdown.Trigger>

			<Dropdown.Popover placement="bottom right" offset={20}>
				<div className="px-3 pt-3 pb-1">
					<div className="flex items-center gap-2">
						<Avatar size="sm">
							<Avatar.Image
								alt={user?.name}
								src={user?.image}
								referrerPolicy="no-referrer"
							/>
							<Avatar.Fallback delayMs={600}>{initials}</Avatar.Fallback>
						</Avatar>
						<div className="flex flex-col gap-0">
							<p className="text-sm leading-5 font-medium">
								{user?.name}
							</p>
							<p className="text-xs leading-none text-muted">
								{user?.email}
							</p>
						</div>
					</div>
				</div>

				<Dropdown.Menu
					onAction={(key) => {
						if (key === "logout") {
							handleSignOut();
						}
					}}
				>
					<Dropdown.Item
						id="dashboard"
						textValue="Dashboard"
						as={Link}
						href="/dashboard/recruiter"
					>
						<Label>Dashboard</Label>
					</Dropdown.Item>

					<Dropdown.Item id="logout" textValue="Logout" variant="danger">
						<div className="flex w-full items-center justify-between gap-2">
							<Label>Log Out</Label>
							<ArrowRightFromSquare className="size-3.5 text-danger" />
						</div>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown.Popover>
		</Dropdown>
	);
}
