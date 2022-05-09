/* eslint-disable react/prop-types */
// Soft UI Dashboard React components
import SuiBox from "components/SuiBox";
// import SuiTypography from "components/SuiTypography";
// import SuiAvatar from "components/SuiAvatar";
import SuiBadge from "components/SuiBadge";

// Images
// import team2 from "assets/images/team-2.jpg";

// function Author({ image, name, email }) {
//   return (
//     <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
//       <SuiBox mr={2}>
//         <SuiAvatar src={image} alt={name} size="sm" variant="rounded" />
//       </SuiBox>
//       <SuiBox display="flex" flexDirection="column">
//         <SuiTypography variant="button" fontWeight="medium">
//           {name}
//         </SuiTypography>
//         <SuiTypography variant="caption" color="secondary">
//           {email}
//         </SuiTypography>
//       </SuiBox>
//     </SuiBox>
//   );
// }

function OrderNo({ no }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox ml={2}>{no}</SuiBox>
    </SuiBox>
  );
}

function TokenID({ tokenId }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox>
        <a
          href={`https://immutascan.io/address/0xa7aefead2f25972d80516628417ac46b3f2604af/${tokenId}`}
        >
          {tokenId}
        </a>
      </SuiBox>
    </SuiBox>
  );
}

function Rates({ cnt }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox>{cnt}</SuiBox>
    </SuiBox>
  );
}

function NFTName({ name }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox>{name}</SuiBox>
    </SuiBox>
  );
}

const mostTransferedNFTsTableData = {
  columns: [
    { name: "no", align: "left" },
    { name: "tokenId", align: "center" },
    { name: "nftname", align: "center" },
    { name: "rates", align: "center" },
    { name: "actions", align: "center" },
  ],

  rows: [
    {
      no: <OrderNo no={1} />,
      tokenId: <TokenID tokenId="34594" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={530} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={2} />,
      tokenId: <TokenID tokenId="43153" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={498} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={3} />,
      tokenId: <TokenID tokenId="67669" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={430} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={4} />,
      tokenId: <TokenID tokenId="78401" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={417} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={5} />,
      tokenId: <TokenID tokenId="6430804" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={398} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={6} />,
      tokenId: <TokenID tokenId="6430762" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={380} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={7} />,
      tokenId: <TokenID tokenId="69669" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={372} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={8} />,
      tokenId: <TokenID tokenId="6430805" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={320} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={9} />,
      tokenId: <TokenID tokenId="48690" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={296} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={10} />,
      tokenId: <TokenID tokenId="48653" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={296} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={11} />,
      tokenId: <TokenID tokenId="34594" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={530} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={12} />,
      tokenId: <TokenID tokenId="43153" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={498} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={13} />,
      tokenId: <TokenID tokenId="67669" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={430} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={14} />,
      tokenId: <TokenID tokenId="78401" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={417} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={15} />,
      tokenId: <TokenID tokenId="6430804" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={398} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={16} />,
      tokenId: <TokenID tokenId="6430762" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={380} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={17} />,
      tokenId: <TokenID tokenId="69669" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={372} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={18} />,
      tokenId: <TokenID tokenId="6430805" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={320} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={19} />,
      tokenId: <TokenID tokenId="48690" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={296} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <OrderNo no={20} />,
      tokenId: <TokenID tokenId="48653" />,
      nftname: <NFTName name="UnKnown" />,
      rates: <Rates cnt={296} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
  ],
};

export default mostTransferedNFTsTableData;
