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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Card from "@mui/material/Card";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Soft UI Dashboard React components
// import MasterCard from "examples/Cards/MasterCard";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";
// import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import MostTransferedNFTsTable from "examples/Custom/Page3/MostTransferedNFTsTable";

// Data
import txnChartData from "layouts/market/data/txnChartData";
import TradeChartData from "layouts/market/data/tradeChartData";

// Billing page components
// import PaymentMethod from "layouts/market/components/PaymentMethod";
// import Invoices from "layouts/market/components/Invoices";
// import BillingInformation from "layouts/market/components/BillingInformation";
// import Transactions from "layouts/market/components/Transactions";
import TrasactionsPerTime from "layouts/market/components/TransactionsPerTime";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Data
import mostTransferedNFTsTableData from "layouts/market/data/mostTransferedNFTsTableData";

function Market() {
  const { size } = typography;
  const { columns, rows } = mostTransferedNFTsTableData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SuiBox mt={4}>
        <SuiBox mb={1.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={12} xl={12}>
                  <TrasactionsPerTime
                    title="transactions"
                    description=""
                    value="Trasactions per Hour, Day, Week, Month "
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Txns Per Hour"
                    description="Txns/Hour"
                    value="294"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Txns Per Day"
                    description="Txns/Day"
                    value="7056"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Txns Per Week"
                    description="Txns/Week"
                    value="49392"
                  />
                </Grid>
                <Grid item xs={12} md={6} xl={3}>
                  <DefaultInfoCard
                    icon="account_balance"
                    title="Txns Per Month"
                    description="Txns/Month"
                    value="197568"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={5}>
              <GradientLineChart
                title="Transaction Rate"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                      Trasaction rate{" "}
                      <SuiTypography variant="button" color="text" fontWeight="regular">
                        on every Season
                      </SuiTypography>
                    </SuiTypography>
                  </SuiBox>
                }
                height="17rem"
                chart={txnChartData}
              />
            </Grid>
            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="Trade Rate"
                description={
                  <SuiBox display="flex" alignItems="center">
                    <SuiBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SuiBox>
                    <SuiTypography variant="button" color="text" fontWeight="medium">
                      Shows how often each NFT has been traded{" "}
                      {/* <SuiTypography variant="button" color="text" fontWeight="regular">
                        on every NFTs
                      </SuiTypography> */}
                    </SuiTypography>
                  </SuiBox>
                }
                height="20rem"
                chart={TradeChartData}
              />
            </Grid>
          </Grid>
        </SuiBox>
        <SuiBox mb={3}>
          <SuiBox mb={3}>
            <Card>
              <SuiBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
                <SuiTypography variant="h6">Most Transfered NFTs</SuiTypography>
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
                <MostTransferedNFTsTable columns={columns} rows={rows} />
              </SuiBox>
            </Card>
          </SuiBox>
        </SuiBox>
      </SuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Market;
