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

function WalletNo({ no }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox ml={2}>{no}</SuiBox>
    </SuiBox>
  );
}

function WalletName({ name }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox>{name}</SuiBox>
    </SuiBox>
  );
}

function NFTs({ cnt }) {
  return (
    <SuiBox display="flex" alignItems="center" px={1} py={0.5}>
      <SuiBox>{cnt}</SuiBox>
    </SuiBox>
  );
}

// function Function({ job, org }) {
//   return (
//     <SuiBox display="flex" flexDirection="column">
//       <SuiTypography variant="caption" fontWeight="medium" color="text">
//         {job}
//       </SuiTypography>
//       <SuiTypography variant="caption" color="secondary">
//         {org}
//       </SuiTypography>
//     </SuiBox>
//   );
// }

const largestWalletsData = {
  columns: [
    { name: "no", align: "left" },
    { name: "name", align: "center" },
    { name: "nfts", align: "center" },
    { name: "actions", align: "center" },
    // { name: "employed", align: "center" },
    // { name: "action", align: "center" },
  ],

  rows: [
    {
      no: <WalletNo no={1} />,
      name: <WalletName name="0x068dc912c63f6834d8019ef35886907a2eca4281" />,
      nfts: <NFTs cnt={1310} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="primary" size="xs" container />
      ),
      // employed: (
      //   <SuiTypography variant="caption" color="secondary" fontWeight="medium">
      //     23/04/18
      //   </SuiTypography>
      // ),
      // action: (
      //   <SuiTypography
      //     component="a"
      //     href="#"
      //     variant="caption"
      //     color="secondary"
      //     fontWeight="medium"
      //   >
      //     Edit
      //   </SuiTypography>
      // ),
    },
    {
      no: <WalletNo no={2} />,
      name: <WalletName name="0xfeacf08c1b4b6d00a124522fb58ca85858ac0bab" />,
      nfts: <NFTs cnt={1089} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="primary" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={3} />,
      name: <WalletName name="0xfeacf08c1b4b6d00a124522fb58ca85858ac0bab" />,
      nfts: <NFTs cnt={880} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="warning" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={4} />,
      name: <WalletName name="0x1db53a8d17eea4cb225ac2c3dcf9febda0a6df19" />,
      nfts: <NFTs cnt={620} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="warning" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={5} />,
      name: <WalletName name="0xdc9e3ede3d29c9647d102742eafe4b28b470ead8" />,
      nfts: <NFTs cnt={437} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={6} />,
      name: <WalletName name="0xa632c9d3ca141b5f86d79892740aaf1a3b00c64e" />,
      nfts: <NFTs cnt={219} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={7} />,
      name: <WalletName name="0x8162494fd92e583c9f00604cbba25096cbcaa8de" />,
      nfts: <NFTs cnt={215} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={8} />,
      name: <WalletName name="0x65770fa8abc050d03f501d056f91b377eae7e03d" />,
      nfts: <NFTs cnt={198} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="light" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={9} />,
      name: <WalletName name="0x4d8a5862ea9ddaa35ca14fd588d8fdf3fe704ef8" />,
      nfts: <NFTs cnt={197} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="light" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={10} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="light" size="xs" container />
      ),
    },
  ],
};

export default largestWalletsData;
