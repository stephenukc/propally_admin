export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  last_login: string;
  portfolio: {
    id: string;
    current_equity: string;
    monthly_net_cash_flow: string;
    monthly_net_cash_flow_date: string;
    total_net_cash_flow: string;
    capital_appreciation: string;
    capital_appreciation_date: string;
    investment_net_profit: string;
    investment_percentage_change: string;
    investment_value: string;
    investment_value_history: {
      investment_value: number;
      date: string;
    }[];
    project: {
      id: string;
      property: {
        name: string;
        city: string;
        country: string;
        property_images: {
          url: string;
          order: number;
        }[];
      };
      term: number;
      currency: string;
      project_type: string;
      target_roi: string;
      number_of_investors: number;
      updated_at: string;
      project_status: string;
    };
    amount: string;
    equity_stake: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  wallets: {
    id: string;
    ledger_balance: string;
    available_balance: string;
    currency: string;
    pin: string;
    status: string;
    created_at: string;
    updated_at: string;
  }[];
  key_financials: {
    monthly_net_cash_flow: string;
    monthly_net_cash_flow_date: string;
    total_net_cash_flow: string;
    capital_appreciation: string;
    capital_appreciation_date: string;
    portfolio_net_profit: string;
    portfolio_percentage_change: string;
    portfolio_value: string;
  };
  quick_insights: {
    number_of_properties: string;
    cost_basis: string;
    available_to_invest: string;
    available_to_withdraw: string;
  };
  watchlist: object[];
  portfolio_value_history: {
    portfolio_value: number;
    date: string;
  }[];
  investment_share_by_project_type: {
    project_type: string;
    count: number;
    share: number;
  }[];
  investment_share_by_location: {
    location: string;
    count: number;
    share: number;
  }[];
}
