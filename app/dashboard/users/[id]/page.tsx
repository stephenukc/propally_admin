import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import { Subheading } from "@/components/heading";
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
import { User } from "../interface";

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const data = await fetch(
    `http://localhost:8000/dashboard/users/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const user: User = await data.json();

  return {
    title: `${user.first_name} ${user.last_name}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetch(
    `http://localhost:8000/dashboard/users/${params.id}`,
    {
      cache: "no-store",
    }
  );
  const user: User = await data.json();

  return (
    <>
      <div className="max-lg:hidden">
        <Link
          href="/dashboard/users"
          className="inline-flex items-center gap-2 text-sm/6 text-zinc-500 dark:text-zinc-400"
        >
          <ChevronLeftIcon className="size-4 fill-zinc-400 dark:fill-zinc-500" />
          Users
        </Link>
      </div>
      <Subheading className="mt-12">User Details</Subheading>
      <DescriptionList>
        <DescriptionTerm>ID</DescriptionTerm>
        <DescriptionDetails>{user.id}</DescriptionDetails>

        <DescriptionTerm>First Name</DescriptionTerm>
        <DescriptionDetails>{user.first_name}</DescriptionDetails>

        <DescriptionTerm>Last Name</DescriptionTerm>
        <DescriptionDetails>{user.last_name}</DescriptionDetails>

        <DescriptionTerm>Email</DescriptionTerm>
        <DescriptionDetails>{user.email}</DescriptionDetails>

        <DescriptionTerm>Last Login</DescriptionTerm>
        <DescriptionDetails>{user.last_login}</DescriptionDetails>
      </DescriptionList>
      <Subheading className="mt-12">Wallets</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Available Balance</TableHeader>
            <TableHeader>Ledger Balance</TableHeader>
            <TableHeader>Currency</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader className="text-right">Created At</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.wallets.map((wallet) => (
            <TableRow key={wallet.id} href="" title={wallet.id}>
              <TableCell>{wallet.available_balance}</TableCell>
              <TableCell>{wallet.ledger_balance}</TableCell>
              <TableCell>{wallet.currency}</TableCell>
              <TableCell>{wallet.status}</TableCell>
              <TableCell className="text-right">{wallet.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Subheading className="mt-12">Investments</Subheading>
      <Table className="mt-4 [--gutter:theme(spacing.6)] lg:[--gutter:theme(spacing.10)]">
        <TableHead>
          <TableRow>
            <TableHeader>Project</TableHeader>
            <TableHeader>Amount</TableHeader>
            <TableHeader>Currency</TableHeader>
            <TableHeader>Date</TableHeader>
            <TableHeader>Equity Stake</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader className="text-right">Investment Value</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {user.portfolio.map((investment) => (
            <TableRow key={investment.id} href="" title={investment.id}>
              <TableCell>{investment.project.property.name}</TableCell>
              <TableCell>{investment.amount}</TableCell>
              <TableCell>{investment.project.currency}</TableCell>
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
      <Subheading className="mt-12">Quick Insights</Subheading>
      <DescriptionList>
        <DescriptionTerm>Number of Properties</DescriptionTerm>
        <DescriptionDetails>
          {user.quick_insights.number_of_properties}
        </DescriptionDetails>

        <DescriptionTerm>Cost Basis</DescriptionTerm>
        <DescriptionDetails>
          {user.quick_insights.cost_basis}
        </DescriptionDetails>

        <DescriptionTerm>Available to Invest</DescriptionTerm>
        <DescriptionDetails>
          {user.quick_insights.available_to_invest}
        </DescriptionDetails>

        <DescriptionTerm>Available to Withdraw</DescriptionTerm>
        <DescriptionDetails>
          {user.quick_insights.available_to_withdraw}
        </DescriptionDetails>
      </DescriptionList>
      <Subheading className="mt-12">Key Financials</Subheading>
      <DescriptionList>
        <DescriptionTerm>Monthly Net Cash Flow</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.monthly_net_cash_flow}
        </DescriptionDetails>

        <DescriptionTerm>Monthly Net Cash Flow Date</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.monthly_net_cash_flow_date}
        </DescriptionDetails>

        <DescriptionTerm>Total Net Cash Flow</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.total_net_cash_flow}
        </DescriptionDetails>

        <DescriptionTerm>Capital Appreciation</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.capital_appreciation}
        </DescriptionDetails>

        <DescriptionTerm>Capital Appreciation Date</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.capital_appreciation_date}
        </DescriptionDetails>

        <DescriptionTerm>Portfolio Net Profit</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.portfolio_net_profit}
        </DescriptionDetails>

        <DescriptionTerm>Portfolio Percentage Change</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.portfolio_percentage_change}
        </DescriptionDetails>

        <DescriptionTerm>Portfolio Value</DescriptionTerm>
        <DescriptionDetails>
          {user.key_financials.portfolio_value}
        </DescriptionDetails>
      </DescriptionList>
    </>
  );
}
