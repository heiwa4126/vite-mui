import DoubleArrowOutlinedIcon from "@mui/icons-material/DoubleArrowOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import data from "./projects.json";

const sx1 = {
  py: 1.7 / 2,
  px: 1.8,
  mb: 0.29,
};

const sxPreWrap = { whiteSpace: "pre-wrap" };

interface Project {
  id: number;
  name: string;
}

function Project3({ onSelect }: { onSelect: (selectedProject: Project) => void }) {
  const [value, setValue] = useState(-1);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const newValue = event.target.value;
    if (typeof newValue === "string") return;
    setValue(newValue);
    if (newValue >= 0) {
      onSelect(data.pjList[newValue] as Project);
    }
  };

  return (
    <FormControl>
      <Box>
        <InputLabel id="project-label">プロジェクト</InputLabel>
        <Select
          onChange={handleChange}
          labelId="project-label"
          id="project-select"
          value={value}
          size="small"
          label="プロジェクト"
          sx={{ mr: 0.5, minWidth: 360 }}
        >
          <MenuItem value={-1} key={-1} color="warning">
            <em>- 対象のプロジェクトを選択してください -</em>
          </MenuItem>
          {data?.pjList?.map((project, idx) => (
            <MenuItem value={idx} key={idx}>
              {project.name}
            </MenuItem>
          ))}
        </Select>
        <Button variant="outlined" startIcon={<ReplayIcon />} sx={sx1}>
          プロジェクト再取得
        </Button>
      </Box>
    </FormControl>
  );
}

function Spinner() {
  return (
    <Box display="flex" alignItems="center">
      <CircularProgress size="2em" />
      <Typography color="primary" fontWeight={"bold"} ml={1.2} fontSize={15}>
        Loading...
      </Typography>
    </Box>
  );
}

function QABox({ label, content }: { label: string; content: string }) {
  return (
    <Box component="fieldset" sx={{ borderRadius: 1, mx: -0.1 }}>
      <legend>{label}</legend>
      <Box sx={sxPreWrap}>{content}</Box>
    </Box>
  );
}

function Ex1() {
  const [project, setProject] = useState<Project | null>(null);

  return (
    <>
      <Typography component="h1" variant="h3" gutterBottom>
        Hello, world!
      </Typography>
      <Project3
        onSelect={(newProject: Project) => {
          setProject(newProject);
        }}
      />
      <Box mt={1}>
        <Button variant="contained" endIcon={<DoubleArrowOutlinedIcon />} sx={sx1}>
          もう一度問い合わせ
        </Button>
      </Box>
      <QABox label="回答" content={`ID: ${project?.id}\nNAME: ${project?.name}`} />
      <Typography variant="body2" gutterBottom mt={1} mb={0}>
        ※AIが生成した内容は不正確である場合があります。
      </Typography>
      <QABox label="クエリ" content={`ID: ${project?.id}\nNAME: ${project?.name}`} />
      <Box mt={2}>
        <Button variant="contained" endIcon={<DoubleArrowOutlinedIcon />} sx={sx1}>
          もう一度問い合わせ
        </Button>
      </Box>
      <Box mt={2}>
        <Spinner />
      </Box>
    </>
  );
}

export default Ex1;
