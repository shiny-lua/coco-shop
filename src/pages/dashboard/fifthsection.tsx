import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Grid, Stack, Typography } from "@mui/material";
import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";
import { teamMemberImg1, teamMemberImg2, teamMemberImg3, teamMemberImg4, twitterImg2 } from "../../assets/image";

interface MemberInfoType {
	img: any
}

const membersInfo: MemberInfoType[] = [
	{ img: teamMemberImg1 },
	{ img: teamMemberImg2 },
	{ img: teamMemberImg4 },
	{ img: teamMemberImg3 },
]

const FifthSection = () => {
	const { t } = useI18n();

	return (
		<GlobalSpacing>
			<SectionSpacing>
				<FifthSectionWrapper>
					<Typography variant="h2" textAlign='center'>
						{t("body.ourteam.title")}
					</Typography>

					<Grid container spacing={3}>
						{membersInfo.map((member: MemberInfoType, index: number) => (
							<Grid item xs={12} md={6} xl={3} key={index}>
								<TeamCardContainer>
									<img alt="" src={member.img} className={index > 0 ? "coming-soon" : ""} />

									<Stack className="team-member-content">
										<Stack p={0.8} direction="row" justifyContent="end">
											{/* <Stack className="member-link">
												<img alt="" src={twitterImg2} />
											</Stack> */}
										</Stack>

										<Stack className="member-content">
											{index === 0 && (
												<Typography variant="h3">
													{t(`body.ourteam.member.${index + 1}.name`)}
												</Typography>
											)}

											{index > 0 && (
												<Typography variant="h3">
													{t(`body.ourteam.comingSoon`)}
												</Typography>
											)}


											{/* <Typography variant="h4">
												{t(`body.ourteam.member.${index + 1}.skill`)}
											</Typography> */}
										</Stack>
									</Stack>
								</TeamCardContainer>
							</Grid>
						))}
					</Grid>
				</FifthSectionWrapper>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const FifthSectionWrapper = styled(SectionGap)({
	display: "flex",
	flexDirection: "column",
})

const TeamCardContainer = styled(Stack)(({ theme }) => ({
	height: '100%',
	borderRadius: 16,
	position: "relative",

	maxWidth: 350,
	margin: 'auto',

	img: {
		width: '100%',
		height: '100%',
	},

	'.coming-soon': {
		filter: "blur(20px)",
	},

	'.team-member-content': {
		width: '100%',
		height: '100%',
		position: 'absolute',

		padding: 15,
		display: 'flex',
		flexdirection: 'column',
		justifyContent: 'space-between',

		'.member-link': {
			padding: 10,
			borderRadius: '50px',
			backgroundColor: theme.palette.common.iconBg,
			cursor: 'pointer',
		},

		'.member-content': {
			gap: 10,
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			cursor: 'pointer',

			h3: {
				fontSize: 24,
				fontWeight: 800,
				lineHeight: '24px',
				color: theme.palette.common.memberColor,
			},

			h4: {
				fontSize: 16,
				lineHeight: '20px',
				fontWeight: 500,
				color: theme.palette.common.memberColor1,
			},

			padding: 20,
			borderRadius: '12px',
			background: theme.palette.common.memberBg,
			border: `1px solid ${theme.palette.common.memberBorder}`,

			[theme.breakpoints.down('md')]: {
				h3: {
					fontSize: 20,
				},

				h4: {
					fontSize: 16,
					lineHeight: '20px',
					fontWeight: 500,
				}
			}
		}
	},

	[theme.breakpoints.down('sm')]: {
		maxWidth: '100%',
	}
}))

export { FifthSection };