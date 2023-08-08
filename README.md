# StarBoard Metrics Stablecoin Dashboard

## Overview

StarBoard Metrics is a comprehensive dashboard for stablecoin statistics, built using a modern stack including React, JavaScript, Tailwind CSS, and multiple data sources such as HelloMoon API and SolScan.

This dashboard aims to provide detailed metrics on the stablecoin market, facilitating insights into market capitalization, ownership distribution, token transfers, and more.

## Directory Structure

```bash
StarBoard-Metrics
│
├── .vscode
├── .gitignore
├── package.json
├── README.md
│
├── Frontend
│ ├── node_modules
│ ├── public
│ ├── src
│ │ ├── api
│ │ │ ├── helloMoonApi.js
│ │ │ ├── ... (Other API files)
│ │ │
│ │ ├── components
│ │ │ ├── Charts
│ │ │ ├── Helper
│ │ │ ├── shared
│ │ │ │ ├── Footer.jsx
│ │ │ │ ├── ... (Other shared components)
│ │ │ ├── Table
│ │ │ ├── ... (Other component files)
│ │ │
│ │ ├── context
│ │ │ ├── DataContext.js
│ │ │
│ │ ├── lib
│ │ ├── pages
│ │ ├── utils
│ │ ├── App.jsx
│ │ ├── index.css
│ │ ├── index.js
│ │
│ ├── .env
│ ├── LICENSE
│ ├── package.json
│ ├── postcss.config.js
│ ├── tailwind.config.js
│ ├── yarn.lock
│
└── Packages

```

## Technical Stack

- Front-end Framework:\*\* React.js
- Styling: Tailwind CSS
- API Integration: Axios
- Data Sources:
  - HelloMoon API
  - SolScan
  - Puppeteer Scraper Engine
- Hosting: Vercel

## Setup and Installation

1. Clone the repository:

```bash
git clone https://github.com/thisissamridh/StarBoard-Metrics.git
Navigate to the project directory:

cd StarBoard-Metrics/Frontend

Install dependencies:
yarn install

Run the development server:
yarn start

The dashboard will now be running at http://localhost:3000/.

```

## Data Insights

### Market Overview:

Total Market Cap: $1.56 Billion
Market Cap Change in the Last 7 Days: -0.01%
... [Other metrics]
Stablecoin Market Cap Over Time:
A visualization of market cap trends for various stablecoins between 12/5/22 to 8/8/23.

Stablecoin Market Cap Distribution:
Distribution of market cap across various stablecoins such as USDT, USDC, PAIU, etc.

... [Other data sections]

## Dependencies

- Core:
- react: ^18.1.0
- axios: ^1.4.0
- tailwindcss: ^3.1.2
  ... [Other core dependencies]

- Development:
- prettier: ^2.7.0
- postcss: ^8.4.14
  ... [Other dev dependencies]
  See package.json for the complete list of dependencies and scripts.

## License

[MIT](https://choosealicense.com/licenses/mit/)

This project is licensed under the MIT License. See the LICENSE file for details.

## Contributing

Contributions are always welcome!

For more details and visualizations, visit the deployed application. If you encounter any issues or have suggestions for improvements, please raise them in the GitHub repository.

Please adhere to this project's `code of conduct`.

## Authors

- [@thisisamridh](https://www.github.com/thisissamridh)
- [@AbhinawRatan](https://github.com/AbhinawRatan)
