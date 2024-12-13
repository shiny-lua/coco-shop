import React, { useState } from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import { minusImg, plusImg } from "../../assets/image";
import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";

interface QuestionItemProps {
	question: number
	expanded: boolean
	onChange: any
}

const SixthSection = () => {
	const { t } = useI18n();
	const [expanded, setExpanded] = useState<string | boolean>(false);

	const handleChange = (panel: string) => (isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
		console.log(isExpanded, panel)
	};

	return (
		<GlobalSpacing>
			<SectionSpacing>
				<SixthSectionWrapper>
					<Typography variant="h2" textAlign="center">
						{t("body.frequently.title")}
					</Typography>

					<QuestionsWrapper>
						{(Array(6).fill(0)).map((i: number, key: number) => (
							<QuestionItem question={key} key={key}
								expanded={expanded === `question-${key}`}
								onChange={handleChange(`question-${key}`)}
							/>
						))}
					</QuestionsWrapper>
				</SixthSectionWrapper>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const QuestionItem = ({ question, expanded, onChange }: QuestionItemProps) => {
	const { t } = useI18n();

	const onClick = () => {
		onChange(!expanded)
	}

	return (
		<QuestionItemContainer>
			<Stack className="question-header" onClick={onClick}>
				<Typography variant="h4">
					{t(`body.frequently.${question}.question`)}
				</Typography>

				{expanded && (
					<img alt="" src={minusImg} />
				)}

				{!expanded && (
					<img alt="" src={plusImg} />
				)}
			</Stack>

			{expanded && (
				<Typography variant="body2">
					{t(`body.frequently.${question}.answer`)}
				</Typography>
			)}
		</QuestionItemContainer>
	)
}

const SixthSectionWrapper = styled(SectionGap)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	h2: {
		fontWeight: 800,
		color: theme.palette.common.typograph2,
	},

	h4: {
		fontWeight: 700,
		color: theme.palette.common.typograph3,
	},

	p: {
		fontWeight: 400,
		color: theme.palette.common.typograph5,
	}
}))

const QuestionsWrapper = styled(Stack)(({ theme }) => ({
	gap: 15,
	display: 'flex',
	flexDirection: 'column',

}))

const QuestionItemContainer = styled(Stack)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	borderRadius: 12,
	border: `1px solid ${theme.palette.common.questionBorder}`,

	'.question-header': {
		display: "flex",
		flexDirection: "row",
		alignItems: 'center',
		justifyContent: 'space-between',

		padding: 20,
		cursor: 'pointer',
		userSelect: "none",

		img: {
			width: 22,
			height: 22,
		}
	},

	p: {
		padding: 25,
		paddingTop: 0,
	}
}))

export { SixthSection };