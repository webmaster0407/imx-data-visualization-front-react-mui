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
      <SuiBox>
        <a href={`https://immutascan.io/address/${name}`}>{name}</a>
      </SuiBox>
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

// eslint-disable-next-line camelcase
function HODL({ hodlInfo }) {
  return (
    <SuiBox alignItems="center" px={1} py={0.5}>
      <SuiBox>{hodlInfo}</SuiBox>
    </SuiBox>
  );
}

const largestWalletsData = {
  columns: [
    { name: "no", align: "left" },
    { name: "name", align: "center" },
    { name: "nfts", align: "center" },
    { name: "hodl", align: "center" },
    { name: "actions", align: "center" },
  ],

  rows: [
    {
      no: <WalletNo no={1} />,
      name: <WalletName name="0x068dc912c63f6834d8019ef35886907a2eca4281" />,
      nfts: <NFTs cnt={1310} />,
      hodl: <HODL hodlInfo="3%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={2} />,
      name: <WalletName name="0xfeacf08c1b4b6d00a124522fb58ca85858ac0bab" />,
      nfts: <NFTs cnt={1089} />,
      hodl: <HODL hodlInfo="7%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={3} />,
      name: <WalletName name="0xfeacf08c1b4b6d00a124522fb58ca85858ac0bab" />,
      nfts: <NFTs cnt={880} />,
      hodl: <HODL hodlInfo="4%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={4} />,
      name: <WalletName name="0x1db53a8d17eea4cb225ac2c3dcf9febda0a6df19" />,
      nfts: <NFTs cnt={620} />,
      hodl: <HODL hodlInfo="8%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={5} />,
      name: <WalletName name="0xdc9e3ede3d29c9647d102742eafe4b28b470ead8" />,
      nfts: <NFTs cnt={437} />,
      hodl: <HODL hodlInfo="15%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={6} />,
      name: <WalletName name="0xa632c9d3ca141b5f86d79892740aaf1a3b00c64e" />,
      nfts: <NFTs cnt={219} />,
      hodl: <HODL hodlInfo="23%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={7} />,
      name: <WalletName name="0x8162494fd92e583c9f00604cbba25096cbcaa8de" />,
      nfts: <NFTs cnt={215} />,
      hodl: <HODL hodlInfo="17%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={8} />,
      name: <WalletName name="0x65770fa8abc050d03f501d056f91b377eae7e03d" />,
      nfts: <NFTs cnt={198} />,
      hodl: <HODL hodlInfo="34%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={9} />,
      name: <WalletName name="0x4d8a5862ea9ddaa35ca14fd588d8fdf3fe704ef8" />,
      nfts: <NFTs cnt={197} />,
      hodl: <HODL hodlInfo="46%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={10} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={11} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={12} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={162} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={13} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={156} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={14} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={150} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={15} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={143} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={16} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={130} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={17} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={127} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={18} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={126} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={19} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={120} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={20} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={113} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={21} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={22} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={23} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={24} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={25} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={26} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={27} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={28} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={29} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={30} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={31} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={32} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={33} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={34} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={35} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={36} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={37} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={38} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={39} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={40} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={41} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={42} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={43} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={44} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={45} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={46} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={47} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={48} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={49} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
    {
      no: <WalletNo no={50} />,
      name: <WalletName name="0xf9436d1561220271b71eb92047fb8f6683ed9e61" />,
      nfts: <NFTs cnt={168} />,
      hodl: <HODL hodlInfo="12%" />,
      actions: (
        <SuiBadge variant="gradient" badgeContent="View" color="success" size="xs" container />
      ),
    },
  ],
};

export default largestWalletsData;
