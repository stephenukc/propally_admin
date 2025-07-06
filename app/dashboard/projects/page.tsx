import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownMenu,
} from "@/components/dropdown";
import { Heading } from "@/components/heading";
import { Input, InputGroup } from "@/components/input";
import { Link } from "@/components/link";
import { Select } from "@/components/select";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Image from "next/image";
import { Project } from "./interface";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function ProjectsPage() {
  const data = await fetch(`http://localhost:8000/dashboard/projects`, {
    cache: "no-store",
  });
  const projects = await data.json();
  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="max-sm:w-full sm:flex-1">
          <Heading>Projects</Heading>
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
        <Button href="/dashboard/projects/create">Create project</Button>
      </div>
      <ul className="mt-10">
        <>
          {projects.results.map((project: Project, index: number) => (
            <li key={project.id}>
              <Divider soft={index > 0} />
              <div className="flex items-center justify-between">
                <div key={project.id} className="flex gap-6 py-6">
                  <div className="w-32 shrink-0">
                    <Link
                      href={`/dashboard/projects/${project.id}`}
                      aria-hidden="true"
                    >
                      <Image
                        className="aspect-[3/2] rounded-lg shadow"
                        src={project.images[0].url}
                        alt=""
                        width={500}
                        height={500}
                      />
                    </Link>
                  </div>
                  <div className="space-y-1.5">
                    <div className="text-base/6 font-semibold">
                      <Link href={`/dashboard/projects/${project.id}`}>
                        {project.name}
                      </Link>
                    </div>
                    <div className="text-xs/6 text-zinc-500">
                      {project.project_type}
                      <span aria-hidden="true"> - </span>
                      {project.city}
                    </div>
                    <div className="text-xs/6 text-zinc-600">
                      {project.address}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Badge
                    className="max-sm:hidden"
                    color={
                      project.project_status === "FUNDING" ? "lime" : "zinc"
                    }
                  >
                    {project.project_status}
                  </Badge>
                  <Dropdown>
                    <DropdownButton plain aria-label="More options">
                      <EllipsisVerticalIcon />
                    </DropdownButton>
                    <DropdownMenu anchor="bottom end">
                      <DropdownItem href={`/dashboard/projects/${project.id}`}>
                        View
                      </DropdownItem>
                      <DropdownItem>Edit</DropdownItem>
                      <DropdownItem>Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </li>
          ))}
        </>
      </ul>
    </>
  );
}
