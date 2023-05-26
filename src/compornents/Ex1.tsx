/** @jsxImportSource @emotion/react */
import { Button, FormControl, InputLabel, MenuItem, Select, Box } from "@mui/material";
import "./Ex1.css";
import { css } from "@emotion/react";
import ReplayIcon from "@mui/icons-material/Replay";

const sx1 = {
  py: 1.7 / 2,
  px: 1.8,
  mb: 0.29,
};

function Ex1() {
  return (
    <>
      <h1
        css={css`
          color: red;
        `}
      >
        {/* 普通の要素にはsxが使えない */}
        Hello, world!
      </h1>
      <FormControl>
        <Box>
          <InputLabel id="demo-simple-select-filled-label">プロジェクト</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={-1}
            size="small"
            label="プロジェクト"
            sx={{ mr: 0.5 }}
          >
            <MenuItem value={-1}>
              <em>- 対象のプロジェクトを選択してください -</em>
            </MenuItem>
            <MenuItem value={1}>プロジェクトA</MenuItem>
            <MenuItem value={2}>プロジェクトB</MenuItem>
            <MenuItem value={3}>プロジェクトC</MenuItem>
          </Select>
          <Button variant="outlined" startIcon={<ReplayIcon />} sx={sx1}>
            プロジェクト再取得
          </Button>
        </Box>
      </FormControl>
    </>
  );
}

export default Ex1;
