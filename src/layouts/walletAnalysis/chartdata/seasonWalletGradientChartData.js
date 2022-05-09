/**
=========================================================
* Soft UI Dashboard React - v3.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const seasonWalletGradientChartData = {
  chart: {
    labels: ["Season 1", "Season 2", "Season 3", "Season 4", "Season 5"],
    datasets: {
      label: "Wallets",
      data: [167854, 187879, 204730, 292309, 316483],
    },
  },
  items: [
    {
      icon: { color: "info", component: "extension" },
      label: "Season 1",
      progress: { content: "167K", percentage: 100 },
    },
    {
      icon: { color: "info", component: "extension" },
      label: "Season 2",
      progress: { content: "187K", percentage: 100 },
    },
    {
      icon: { color: "info", component: "extension" },
      label: "Season 3",
      progress: { content: "204K", percentage: 100 },
    },
    {
      icon: { color: "info", component: "extension" },
      label: "Season 4",
      progress: { content: "292K ", percentage: 100 },
    },
    // {
    //   icon: { color: "info", component: "extension" },
    //   label: "Season 4",
    //   progress: { content: "292309 ", percentage: 100 },
    // },
  ],
};

export default seasonWalletGradientChartData;
