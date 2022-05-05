/* eslint-disable react/prop-types */
// @mui material components
// import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";
import SuiProgress from "components/SuiProgress";

// Images
// import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
// import logoInvesion from "assets/images/small-logos/logo-invision.svg";
// import logoJira from "assets/images/small-logos/logo-jira.svg";
// import logoSlack from "assets/images/small-logos/logo-slack.svg";
// import logoWebDev from "assets/images/small-logos/logo-webdev.svg";
// import logoXD from "assets/images/small-logos/logo-xd.svg";

function Completion({ value, color }) {
  return (
    <SuiBox display="flex" alignItems="center">
      <SuiTypography variant="caption" color="text" fontWeight="medium">
        {value}%&nbsp;
      </SuiTypography>
      <SuiBox width="8rem">
        <SuiProgress value={value} color={color} variant="gradient" label={false} />
      </SuiBox>
    </SuiBox>
  );
}

function Address({ walleAddress }) {
  return (
    <SuiBox alignItems="center">
      <SuiBox>{walleAddress}</SuiBox>
    </SuiBox>
  );
}

// const action = (
//   <Icon sx={{ cursor: "pointer", fontWeight: "bold" }} fontSize="small">
//     more_vert
//   </Icon>
// );

const hodlWalletsData = {
  columns: [
    { name: "address", align: "left" },
    // { name: "nfts", align: "left" },
    { name: "percent", align: "left" },
    { name: "to", align: "center" },
  ],

  rows: [
    {
      address: <Address walleAddress="0xd361f5602f0e0f36d0c103f89c860e267a22c2c0" />,
      // nfts: (
      //   <SuiTypography variant="button" color="text" fontWeight="medium">
      //     145089
      //   </SuiTypography>
      // ),
      percent: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          0 % ~ 10 %
        </SuiTypography>
      ),
      to: <Completion value={10} color="info" />,
    },
    {
      address: <Address walleAddress="0x8d92311c023486d620f719b96a305344ca25e6d3" />,
      // nfts: (
      //   <SuiTypography variant="button" color="text" fontWeight="medium">
      //     145089
      //   </SuiTypography>
      // ),
      percent: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          10 % ~ 20 %
        </SuiTypography>
      ),
      to: <Completion value={20} color="info" />,
    },
    {
      address: <Address walleAddress="0x8e4be39bee8e0e1df207db1d94a7c9fbf7624e15" />,
      // nfts: (
      //   <SuiTypography variant="button" color="text" fontWeight="medium">
      //     145089
      //   </SuiTypography>
      // ),
      percent: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          20 % ~ 30 %
        </SuiTypography>
      ),
      to: <Completion value={30} color="info" />,
    },
    {
      address: <Address walleAddress="0x63ac9af5f6827ac170e0e109882b56ede9493b4a" />,
      // nfts: (
      //   <SuiTypography variant="button" color="text" fontWeight="medium">
      //     145089
      //   </SuiTypography>
      // ),
      percent: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          30 % ~ 40 %
        </SuiTypography>
      ),
      to: <Completion value={40} color="info" />,
    },
    {
      address: <Address walleAddress="0x3a5b777dededcddb5cf675de7f6b817fa34684e8" />,
      // nfts: (
      //   <SuiTypography variant="button" color="text" fontWeight="medium">
      //     145089
      //   </SuiTypography>
      // ),
      percent: (
        <SuiTypography variant="caption" color="text" fontWeight="medium">
          40 % ~ 50 %
        </SuiTypography>
      ),
      to: <Completion value={50} color="info" />,
    },
  ],
};

export default hodlWalletsData;
