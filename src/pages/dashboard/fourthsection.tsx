import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import { SectionGap } from "../../components/layout/common";
import { heroImg } from "../../assets/image";

const FourthSection = () => {
	const { t } = useI18n();

	return (
		<FourthWrapper>
			<BackgroundSection>
				<FourthContainer>
					<Typography variant="h2">
						{t("body.roadmap.title")}
					</Typography>

					<Timeline position="alternate-reverse">
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step1")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step2")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step3")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step4")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step5")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step6")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
								<CustomTimelineConnector />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step7")}
								</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot />
							</TimelineSeparator>

							<TimelineContent>
								<Typography variant="body2">
									{t("body.roadmap.step8")}
								</Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>
				</FourthContainer>
			</BackgroundSection>
		</FourthWrapper>
	)
}

const FourthWrapper = styled(Stack)(({ theme }) => ({
	padding: '0px 25px',

	[theme.breakpoints.down('lg')]: {
		padding: '0px 20px'
	},

	[theme.breakpoints.down('md')]: {
		padding: '0px 0px'
	}
}))

const BackgroundSection = styled(Stack)(({ theme }) => ({
	borderRadius: '32px',
	backgroundColor: theme.palette.common.heroBg,

	[theme.breakpoints.down('md')]: {
		borderRadius: '0px',
	},
}))

const FourthContainer = styled(SectionGap)(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	padding: `100px 0px`,
	backgroundImage: `url(${heroImg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '105% 105%',
	backgroundPosition: "center",

	h2: {
		textAlign: 'center',
		color: theme.palette.common.white,
	},

	p: {
		color: theme.palette.common.white,
	},

	[theme.breakpoints.down("xl")]: {
		padding: `80px 0px`,
	},

	[theme.breakpoints.down('md')]: {
		padding: '60px 0px',
		backgroundSize: '200% 100%',
	},
}))

const CustomTimelineConnector = styled(TimelineConnector)(({ theme }) => ({
	height: 80,

	[theme.breakpoints.down('md')]: {
		height: 60,
	}
}))

export { FourthSection };