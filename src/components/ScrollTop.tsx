import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useScrollTrigger } from "@mui/material";

export function ScrollTop() {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const handleClick = () => {
    const anchor = document.querySelector("#back-to-top-anchor");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: (theme) => theme.spacing(1),
          right: (theme) => theme.spacing(1),
        }}
      >
        <Fab size="small" color="primary" aria-label="scroll back to top">
          <KeyboardDoubleArrowUpIcon />
        </Fab>
      </Box>
    </Zoom>
  );
}

export default ScrollTop;
