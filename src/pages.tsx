import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import App1 from "./components/App1";
import Ex1 from "./components/Ex1";
import GridFlex from "./components/GridFlex";
// import Nav from "./components/Nav";
// import NavList from "./components/NavLList";
import Emotion1 from "./components/Emotion1";
import Types from "./components/Types";

export interface page {
  label: string;
  url: string;
  component: JSX.Element;
  icon?: JSX.Element;
}

const pages: page[] = [
  { label: "home", url: "/", component: <App1 />, icon: <HouseOutlinedIcon /> },
  { label: "types", component: <Types />, url: "/types" },
  { label: "Grid & Flex", component: <GridFlex />, url: "/gridflex" },
  { label: "emotion1", component: <Emotion1 />, url: "/emotion1" },
  { label: "example1", component: <Ex1 />, url: "/ex1" },
  // { label: "nav", component: <Nav />, url: "/nav" },
  // { label: "navlist", component: <NavList />, url: "/navlist" },
];

export default pages;
