import { Heading } from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";

export default function Users() {
  return (
    <>
      <Heading>Users</Heading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Something</TableHeader>
            <TableHeader>Something</TableHeader>
            <TableHeader>Something</TableHeader>
            <TableHeader>Something</TableHeader>
            <TableHeader className="text-right">Amount</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="1" href="" title="">
            <TableCell>Something</TableCell>
            <TableCell>Something</TableCell>
            <TableCell>Something</TableCell>
            <TableCell>Something</TableCell>
            <TableCell className="text-right">Something</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
