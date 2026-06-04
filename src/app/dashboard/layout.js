import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const DashboardLayout = ({ children }) => {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="flex flex-col  lg:flex-row">
				{/* Sidebar */}
				<DashboardSidebar />

				{/* Main Content */}
				<main className="flex-1 overflow-x-hidden">
					<div className="p-4 md:p-6 lg:p-8 border-t">{children}</div>
				</main>
			</div>
		</div>
	);
};

export default DashboardLayout;
