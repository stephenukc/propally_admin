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
  title: "Transactions",
};

export default async function Transactions() {
  const data = await fetch(`http://localhost:8000/dashboard/transactions`, {
    cache: "no-store",
  });
  const transactions = await data.json();
  return (
    <>
      <Heading>Transactions</Heading>
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
          {transactions.results.map((transaction) => (
            <TableRow key={transaction.id} href="" title="">
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.description}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>{transaction.amount}</TableCell>
              <TableCell className="text-right">
                {transaction.created_at}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
