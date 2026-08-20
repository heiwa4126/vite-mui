import DoubleArrowOutlined from "@mui/icons-material/DoubleArrowOutlined";
import ReplayIcon from "@mui/icons-material/Replay";
import {
	Box,
	BoxProps,
	Button,
	CircularProgress,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	SelectChangeEvent,
	SxProps,
	Theme,
	Typography
} from "@mui/material";
import { ReactNode, useState } from "react";
import { H1, P2 } from "./Tags";
import data from "./projects.json";

const sxPreWrap: SxProps<Theme> = { whiteSpace: "pre-wrap" };

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

	const label = "プロジェクト名";
	return (
		<FormControl fullWidth>
			<Box sx={{ display: "flex" }}>
				<InputLabel id="project">{label}</InputLabel>
				<Select
					sx={{ flexGrow: 1 }}
					onChange={handleChange}
					labelId="project"
					id="project-select"
					value={value}
					size="small"
					label={label}
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
				<Button variant="outlined" startIcon={<ReplayIcon />} size="small" sx={{ ml: 0.5 }}>
					プロジェクト再取得
				</Button>
			</Box>
		</FormControl>
	);
}

function Spinner({ children, ...props }: BoxProps) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }} {...props}>
			<CircularProgress size="2em" />
			<Typography color="primary" sx={{ fontWeight: "bold", ml: 1.2, fontSize: 15 }}>
				{children}
			</Typography>
		</Box>
	);
}

interface QABoxProps extends BoxProps {
	children: ReactNode;
	label: string;
}

function QABox({ children, label, ...props }: QABoxProps) {
	return (
		<Box role="group" aria-label={label} sx={{ borderRadius: 1, mx: -0.1 }} {...props}>
			<Box>{label}</Box>
			<Box sx={sxPreWrap}>{children}</Box>
		</Box>
	);
}

function Ex1() {
	const [project, setProject] = useState<Project | null>(null);

	return (
		<>
			<H1 gutterBottom>Example 1</H1>
			<Project3
				onSelect={(newProject: Project) => {
					setProject(newProject);
				}}
			/>
			<Box sx={{ mt: 1 }}>
				<Button variant="contained" endIcon={<DoubleArrowOutlined />}>
					もう一度問い合わせ
				</Button>
			</Box>
			<QABox label="回答" sx={{ mt: 1 }}>{`ID: ${project?.id}\nNAME: ${project?.name}`}</QABox>
			<P2 color="warning.main" sx={{ mt: 1, mb: 0 }}>
				※AIが生成した内容は不正確である場合があります。
			</P2>
			<QABox label="クエリ">{`ID: ${project?.id}\nNAME: ${project?.name}`}</QABox>
			<Box sx={{ mt: 1.5 }}>
				<Button variant="contained" endIcon={<DoubleArrowOutlined />}>
					もう一度問い合わせ
				</Button>
			</Box>
			<Spinner sx={{ mt: 2 }}>dummy...</Spinner>
		</>
	);
}

export default Ex1;
