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

const reportsBarChartData = {
  chart: {
    labels: ["1-1", "1-2", "2-1", "2-2", "3-1", "3-2"],
    datasets: { label: "Tokens", data: [500, 29500, 500, 29500, 500, 29500] },
  },
  items: [
    {
      icon: { color: "primary", component: "library_books" },
      label: "u wallets",
      progress: { content: "15k", percentage: 97 },
    },
    {
      icon: { color: "info", component: "touch_app" },
      label: "time taken",
      progress: { content: "127", percentage: 84.6 },
    },
    {
      icon: { color: "warning", component: "payment" },
      label: "s wallets",
      progress: { content: "573", percentage: 3.67 },
    },
    {
      icon: { color: "error", component: "extension" },
      label: "w - drop",
      progress: { content: "378 ", percentage: 2.4 },
    },
  ],
};

export default reportsBarChartData;
