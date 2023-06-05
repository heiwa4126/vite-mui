import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";

interface page {
  label: string;
  url: string;
  icon?: JSX.Element;
}

const pages: page[] = [
  { label: "home", url: "/", icon: <HouseOutlinedIcon /> },
  { label: "types", url: "/types" },
  { label: "grid & flex", url: "/gridflex" },
  { label: "emotion1", url: "/emotion1" },
  { label: "example1", url: "/ex1" },
  { label: "nav", url: "/nav" },
  { label: "navlist", url: "/navlist" },
];

export default pages;
