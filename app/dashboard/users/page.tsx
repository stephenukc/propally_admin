import { Button } from "@/components/button";
import { Heading } from "@/components/heading";
import { Input, InputGroup } from "@/components/input";
import { Select } from "@/components/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import { User } from "./interface";

export const metadata: Metadata = {
  title: "Users",
};

export default async function Users() {
  const data = await fetch(`http://localhost:8000/dashboard/users`, {
    cache: "no-store",
  });
  const users = await data.json();
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Users</Heading>
          <div className="mt-4 flex max-w-xl gap-4">
            <div className="flex-1">
              <InputGroup>
                <MagnifyingGlassIcon />
                <Input name="search" placeholder="Search projects&hellip;" />
              </InputGroup>
            </div>
            <div>
              <Select name="sort_by">
                <option value="name">Sort by name</option>
                <option value="date">Sort by date</option>
                <option value="status">Sort by status</option>
              </Select>
            </div>
          </div>
        </div>
        <Button href="">Create user</Button>
      </div>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>First Name</TableHeader>
            <TableHeader>Last Name</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader className="text-right">Last Login</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.results.map((user: User) => (
            <TableRow
              key={user.id}
              href={`/dashboard/users/${user.id}`}
              title={user.id}
            >
              <TableCell>{user.first_name}</TableCell>
              <TableCell>{user.last_name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell className="text-right">{user.last_login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
