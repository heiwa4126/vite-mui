import data from "./projects.json";
import ReplayIcon from "@mui/icons-material/Replay";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material";
import { useState } from "react";

const sx1 = {
  py: 1.7 / 2,
  px: 1.8,
  mb: 0.29,
};

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
          <MenuItem value={-1} key={-1}>
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
      <Typography variant="body1" gutterBottom>
        ID:{project?.id}
        <br />
        NAME: {project?.name}
      </Typography>
    </>
  );
}

export default Ex1;
