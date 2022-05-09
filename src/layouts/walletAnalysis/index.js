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

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import LaragestWalletTable from "examples/Custom/Page2/LaragestWalletTable";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";

// Data
import largestWalletsData from "layouts/walletAnalysis/data/largestWalletsData";
// import projectsTableData from "layouts/tables/data/projectsTableData";

// chart Data
// import reportsBarChartData from "layouts/tables/chartdata/reportsBarChartData";
import seasonWalletGradientChartData from "layouts/walletAnalysis/chartdata/seasonWalletGradientChartData";
import walletDistributionGradientLineChartData from "layouts/walletAnalysis/chartdata/walletDistributionGradientLineChartData";

import walletTimeData from "layouts/walletAnalysis/walletTimeData/walletTimeData";
// import hodlWalletsData from "layouts/tables/hodlWalletsData/hodlWalletsData";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

function WalletAnalysis() {
  const { columns, rows } = largestWalletsData;
  // const { columns: prCols, rows: prRows } = hodlWalletsData;
  const { chart, items } = seasonWalletGradientChartData;

  // const { chart, items } = reportsBarChartData;
  const { size } = typography;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={7}>
            <GradientLineChart
              title="Wallet Distribution"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    Average 1.88 Token{" "}
                    <SuiTypography variant="button" color="text" fontWeight="regular">
                      in every wallet
                    </SuiTypography>
                  </SuiTypography>
                </SuiBox>
              }
              height="20rem"
              chart={walletDistributionGradientLineChartData}
            />
          </Grid>
          <Grid item xs={12} lg={5}>
            <ReportsBarChart
              title="Wallets"
              description={
                <>
                  (<strong>+8.2% Wallets</strong>) than last Season
                </>
              }
              chart={chart}
              items={items}
            />
          </Grid>
        </Grid>
      </SuiBox>
      <SuiBox mb={3}>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Largest Wallets : Season 1</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <LaragestWalletTable columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        {/* <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Largest Wallets : Season 2</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Largest Wallets : Season 3</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Largest Wallets : Season 4</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox>
        <SuiBox mb={3}>
          <Card>
            <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <SuiTypography variant="h6">Largest Wallets : Season 5</SuiTypography>
            </SuiBox>
            <SuiBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rows} />
            </SuiBox>
          </Card>
        </SuiBox> */}
        <SuiBox mb={6}>
          <Grid item xs={12} lg={12}>
            <GradientLineChart
              title="Wallets Against Time in Season1"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="primary" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    Wallets Against Time in Season1{" "}
                  </SuiTypography>
                </SuiBox>
              }
              height="15rem"
              chart={walletTimeData}
            />
          </Grid>
        </SuiBox>
        <SuiBox mb={6}>
          <Grid item xs={12} lg={12}>
            <GradientLineChart
              title="Wallets Against Time in Season2"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="primary" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    Wallets Against Time in Season2{" "}
                  </SuiTypography>
                </SuiBox>
              }
              height="15rem"
              chart={walletTimeData}
            />
          </Grid>
        </SuiBox>
        <SuiBox mb={6}>
          <Grid item xs={12} lg={12}>
            <GradientLineChart
              title="Wallets Against Time in Season3"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="primary" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    Wallets Against Time in Season3{" "}
                  </SuiTypography>
                </SuiBox>
              }
              height="15rem"
              chart={walletTimeData}
            />
          </Grid>
        </SuiBox>
        <SuiBox mb={6}>
          <Grid item xs={12} lg={12}>
            <GradientLineChart
              title="Wallets Against over the all time"
              description={
                <SuiBox display="flex" alignItems="center">
                  <SuiBox fontSize={size.lg} color="primary" mb={0.3} mr={0.5} lineHeight={0}>
                    <Icon className="font-bold">arrow_upward</Icon>
                  </SuiBox>
                  <SuiTypography variant="button" color="text" fontWeight="medium">
                    Wallets Against over the all time{" "}
                  </SuiTypography>
                </SuiBox>
              }
              height="15rem"
              chart={walletTimeData}
            />
          </Grid>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default WalletAnalysis;
