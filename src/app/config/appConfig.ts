const companyName = import.meta.env.VITE_COMPANY_NAME;
const portfolioUrl = import.meta.env.VITE_PORTFOLIO_URL;

if (!companyName) {
  throw new Error('VITE_COMPANY_NAME is not set.');
}

if (!portfolioUrl) {
  throw new Error('VITE_PORTFOLIO_URL is not set.');
}

export const appConfig = {
  companyName,
  portfolioUrl,
};
