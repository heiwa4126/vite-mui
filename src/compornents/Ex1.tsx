/** @jsxImportSource @emotion/react */
import { Typography } from "@mui/material";
import "./Ex1.css";
import { css } from "@emotion/react";

function Ex1() {
  return (
    <>
      <h1
        css={css`
          color: red;
        `}
      >
        Hello, world!
      </h1>
      <Typography>Almost before we knew it, we had left the ground.</Typography>
      <p>Almost before we knew it, we had left the ground.</p>
      <Typography>人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利を承認することは</Typography>
      <p>人類社会のすべての構成員の固有の尊厳と平等で譲ることのできない権利を承認することは</p>
    </>
  );
}

export default Ex1;
