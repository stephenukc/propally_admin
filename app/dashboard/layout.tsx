import DashboardLayout from "./dashboard-layout";

export default function ApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
