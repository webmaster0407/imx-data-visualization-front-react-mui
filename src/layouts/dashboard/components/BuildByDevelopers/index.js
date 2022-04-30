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

// import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";

// Images

function BuildByDevelopers() {
  return (
    <Card>
      <SuiBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={12}>
            <SuiBox display="flex" flexDirection="column" height="100%">
              <SuiBox pt={1} mb={0.5}>
                <SuiTypography variant="body2" color="text" fontWeight="medium">
                  VEVE Drops
                </SuiTypography>
              </SuiBox>
              <Grid item xs={12} sm={12} xl={12}>
                <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                  Drop 1
                </SuiTypography>
                <SuiBox mb={6}>
                  <SuiTypography variant="body2" color="text">
                    Click to see more detail about the drop 1
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item xs={12} sm={12} xl={12}>
                <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                  Drop 2
                </SuiTypography>
                <SuiBox mb={6}>
                  <SuiTypography variant="body2" color="text">
                    Click to see more detail about the drop 2
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <Grid item xs={12} sm={12} xl={12}>
                <SuiTypography variant="h5" fontWeight="bold" gutterBottom>
                  Drop 3
                </SuiTypography>
                <SuiBox mb={6}>
                  <SuiTypography variant="body2" color="text">
                    Click to see more detail about the drop 3
                  </SuiTypography>
                </SuiBox>
              </Grid>
              <SuiTypography
                component="a"
                href="#"
                variant="button"
                color="text"
                fontWeight="medium"
                sx={{
                  mt: "auto",
                  mr: "auto",
                  display: "inline-flex",
                  alignItems: "center",
                  cursor: "pointer",

                  "& .material-icons-round": {
                    fontSize: "1.125rem",
                    transform: `translate(2px, -0.5px)`,
                    transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
                  },

                  "&:hover .material-icons-round, &:focus  .material-icons-round": {
                    transform: `translate(6px, -0.5px)`,
                  },
                }}
              >
                Read More
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SuiTypography>
            </SuiBox>
          </Grid>
        </Grid>
      </SuiBox>
    </Card>
  );
}

export default BuildByDevelopers;
