import { Badge } from "@/components/badge";
import { Button } from "@/components/button";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import { Divider } from "@/components/divider";
import { Heading, Subheading } from "@/components/heading";
import { Link } from "@/components/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import { ChevronLeftIcon } from "@heroicons/react/16/solid";
import type { Metadata } from "next";
import Image from "next/image";
import { Project } from "../interface";
import { Disburse } from "./disburse";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetch(
    `http://localhost:8000/dashboard/projects/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const project: Project = await data.json();

  return {
    title: project.property.name,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `http://localhost:8000/dashboard/projects/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const project: Project = await data.json();

  return (
    <>
      <div className="max-lg:hidden">
        <Link
          href="/dashboard/projects"
          className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Projects
        </Link>
      </div>
      <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-wrap items-center gap-6">
          <div className="w-32 shrink-0">
            <Image
              className="aspect-[3/2] rounded-lg shadow"
              src={project.property.property_images[0].url}
              alt=""
              width={500}
              height={500}
            />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              <Heading>{project.property.name}</Heading>
              <Badge
                color={project.project_status === "FUNDING" ? "lime" : "zinc"}
              >
                {project.project_status}
              </Badge>
            </div>
            <div className="mt-2 text-sm/6 text-zinc-500">
              {project.property.address}
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <Button outline>Edit</Button>
          <Disburse>Disburse</Disburse>
        </div>
      </div>
      <div className="mt-8 grid gap-8 sm:grid-cols-3">
        <div>
          <Divider />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Available Balance
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {project.wallet.available_balance}
          </div>
        </div>
        <div>
          <Divider />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Ledger Balance
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {project.wallet.ledger_balance}
          </div>
        </div>
        <div>
          <Divider />
          <div className="mt-6 text-lg/6 font-medium sm:text-sm/6">
            Currency
          </div>
          <div className="mt-3 text-3xl/8 font-semibold sm:text-2xl/8">
            {project.currency}
          </div>
        </div>
      </div>
      <Subheading className="mt-12">Investments</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Equity Stake</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader className="text-right">Investment Value</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {project.investments.map((investment) => (
            <TableRow key={investment.id} href="" title={investment.id}>
              <TableCell>{investment.amount}</TableCell>
              <TableCell>{investment.created_at}</TableCell>
              <TableCell>{investment.equity_stake}</TableCell>
              <TableCell>{investment.status}</TableCell>
              <TableCell className="text-right">
                {investment.investment_value}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Subheading className="mt-12">Project Details</Subheading>
      <DescriptionList>
        <DescriptionTerm>Funding Target</DescriptionTerm>
        <DescriptionDetails>{project.funding_target}</DescriptionDetails>

        <DescriptionTerm>Amount Funded</DescriptionTerm>
        <DescriptionDetails>{project.amount_funded}</DescriptionDetails>

        <DescriptionTerm>Number of Investors</DescriptionTerm>
        <DescriptionDetails>{project.number_of_investors}</DescriptionDetails>

        <DescriptionTerm>Term</DescriptionTerm>
        <DescriptionDetails>{project.term}</DescriptionDetails>

        <DescriptionTerm>Project Type</DescriptionTerm>
        <DescriptionDetails>{project.project_type}</DescriptionDetails>

        <DescriptionTerm>Investment Type</DescriptionTerm>
        <DescriptionDetails>{project.investment_type}</DescriptionDetails>

        <DescriptionTerm>Project Status</DescriptionTerm>
        <DescriptionDetails>{project.project_status}</DescriptionDetails>

        <DescriptionTerm>Target ROI</DescriptionTerm>
        <DescriptionDetails>{project.target_roi}</DescriptionDetails>

        <DescriptionTerm>Minimum Investment</DescriptionTerm>
        <DescriptionDetails>{project.minimum_investment}</DescriptionDetails>

        <DescriptionTerm>Unit Price</DescriptionTerm>
        <DescriptionDetails>{project.unit_price}</DescriptionDetails>

        <DescriptionTerm>Number of Slots</DescriptionTerm>
        <DescriptionDetails>{project.number_of_slots}</DescriptionDetails>

        <DescriptionTerm>Available Slots</DescriptionTerm>
        <DescriptionDetails>{project.available_slots}</DescriptionDetails>

        <DescriptionTerm>Target Mortgage</DescriptionTerm>
        <DescriptionDetails>{project.target_mortgage}</DescriptionDetails>

        <DescriptionTerm>Total Equity Offering</DescriptionTerm>
        <DescriptionDetails>{project.total_equity_offering}</DescriptionDetails>

        <DescriptionTerm>Mortgage Annual Interest Rate</DescriptionTerm>
        <DescriptionDetails>
          {project.mortgage_annual_interest_rate}
        </DescriptionDetails>

        <DescriptionTerm>Funding Opening Date</DescriptionTerm>
        <DescriptionDetails>{project.funding_opening_date}</DescriptionDetails>

        <DescriptionTerm>Funding Closing Date</DescriptionTerm>
        <DescriptionDetails>{project.funding_closing_date}</DescriptionDetails>

        <DescriptionTerm>Target Annual ROI</DescriptionTerm>
        <DescriptionDetails>{project.target_annual_roi}</DescriptionDetails>

        <DescriptionTerm>Target IRR</DescriptionTerm>
        <DescriptionDetails>{project.target_irr}</DescriptionDetails>

        <DescriptionTerm>Realised ROI</DescriptionTerm>
        <DescriptionDetails>{project.realised_roi}</DescriptionDetails>

        <DescriptionTerm>Realised IRR</DescriptionTerm>
        <DescriptionDetails>{project.realised_irr}</DescriptionDetails>

        <DescriptionTerm>Target Completion Date</DescriptionTerm>
        <DescriptionDetails>
          {project.target_completion_date}
        </DescriptionDetails>

        <DescriptionTerm>Actual Completion Date</DescriptionTerm>
        <DescriptionDetails>
          {project.actual_completion_date}
        </DescriptionDetails>

        <DescriptionTerm>Target Annual Rental Yield</DescriptionTerm>
        <DescriptionDetails>
          {project.target_annual_rental_yield}
        </DescriptionDetails>

        <DescriptionTerm>Realised Annual Rental Yield</DescriptionTerm>
        <DescriptionDetails>
          {project.realised_annual_rental_yield}
        </DescriptionDetails>

        <DescriptionTerm>Status</DescriptionTerm>
        <DescriptionDetails>{project.status}</DescriptionDetails>

        <DescriptionTerm>Created At</DescriptionTerm>
        <DescriptionDetails>{project.created_at}</DescriptionDetails>

        <DescriptionTerm>Updated At</DescriptionTerm>
        <DescriptionDetails>{project.updated_at}</DescriptionDetails>
      </DescriptionList>
      <Subheading className="mt-12">Property Details</Subheading>
      <DescriptionList>
        <DescriptionTerm>City</DescriptionTerm>
        <DescriptionDetails>{project.property.city}</DescriptionDetails>

        <DescriptionTerm>State</DescriptionTerm>
        <DescriptionDetails>{project.property.state}</DescriptionDetails>

        <DescriptionTerm>Province</DescriptionTerm>
        <DescriptionDetails>{project.property.province}</DescriptionDetails>

        <DescriptionTerm>County</DescriptionTerm>
        <DescriptionDetails>{project.property.county}</DescriptionDetails>

        <DescriptionTerm>Country</DescriptionTerm>
        <DescriptionDetails>{project.property.country}</DescriptionDetails>
      </DescriptionList>
    </>
  );
}
