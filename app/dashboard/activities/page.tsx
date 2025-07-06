import { Heading } from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities",
};

export default async function Activities() {
  const data = await fetch(`http://localhost:8000/dashboard/activities`, {
    cache: "no-store",
  });
  const activities = await data.json();
  return (
    <>
      <Heading>Activities</Heading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Title</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Type</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader className="text-right">Date</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.results.map((activity) => (
            <TableRow key={activity.id} href="" title="">
              <TableCell>{activity.title}</TableCell>
              <TableCell>{activity.description}</TableCell>
              <TableCell>{activity.type}</TableCell>
              <TableCell>{activity.amount}</TableCell>
              <TableCell className="text-right">
                {activity.created_at}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
