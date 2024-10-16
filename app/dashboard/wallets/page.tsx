import { Heading } from "@/components/heading";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

export default function Wallets() {
  return (
    <>
      <Heading>Wallets</Heading>
      <TabGroup className="mt-14">
        <TabList className="flex gap-4">
          <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">
            User Wallets
          </Tab>
          <Tab className="rounded-full py-1 px-3 text-sm/6 font-semibold focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-black">
            Project Wallets
          </Tab>
        </TabList>
        <TabPanels className="mt-3">
          <TabPanel>
            <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
              <TableHead>
                <TableRow>
                  <TableHeader>User</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader>User</TableHeader>
                  <TableHeader className="text-right">User</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="1" href="" title="">
                  <TableCell>User</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell>User</TableCell>
                  <TableCell className="text-right">User</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
          <TabPanel>
            <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
              <TableHead>
                <TableRow>
                  <TableHeader>Project</TableHeader>
                  <TableHeader>Project</TableHeader>
                  <TableHeader>Project</TableHeader>
                  <TableHeader>Project</TableHeader>
                  <TableHeader className="text-right">Project</TableHeader>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key="1" href="" title="">
                  <TableCell>Project</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell>Project</TableCell>
                  <TableCell className="text-right">Project</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </>
  );
}
