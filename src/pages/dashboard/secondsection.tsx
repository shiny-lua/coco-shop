import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Grid, Stack, Typography } from "@mui/material";
import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";
import { blockchainReferredImg, environmentalImg, projectContributeImg } from "../../assets/image";

const SecondSection = () => {
	const { t } = useI18n();
	
	return (
		<GlobalSpacing>
			<SectionSpacing>
				<SecondSectionContainer>
					<Grid container spacing={5}>
						<Grid item xs={12} lg={6} xl={5}>
							<Stack height="100%" gap={2} direction="column" justifyContent="center">
								<Typography variant="h2">
									{t("body.guide.blockchain.title")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.blockchain.description1")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.blockchain.description2")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.blockchain.description3")}
								</Typography>
							</Stack>
						</Grid>

						<Grid item xs={12} lg={6} xl={7}>
							<Stack height="100%" direction="column" justifyContent="center">
								<img alt="" src={blockchainReferredImg} />
							</Stack>
						</Grid>
					</Grid>

					<Grid container spacing={5} direction={{ xs: "column-reverse", lg: "row" }}>
						<Grid item xs={12} lg={6} xl={7}>
							<Stack height="100%" direction="column" justifyContent="center">
								<img alt="" src={projectContributeImg} />
							</Stack>
						</Grid>

						<Grid item xs={12} lg={6} xl={5}>
							<Stack height="100%" gap={2} direction="column" justifyContent="center">
								<Typography variant="h2">
									{t("body.guide.project.title")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.project.description1")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.project.description2")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.project.description3")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.project.description3")}
								</Typography>
							</Stack>
						</Grid>
					</Grid>

					<Grid container spacing={5}>
						<Grid item xs={12} lg={6} xl={5}>
							<Stack height="100%" gap={2} direction="column" justifyContent="center">
								<Typography variant="h2">
									{t("body.guide.environment.title")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.environment.description1")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.environment.description2")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.environment.description3")}
								</Typography>

								<Typography variant="body2">
									{t("body.guide.environment.description3")}
								</Typography>
							</Stack>
						</Grid>

						<Grid item xs={12} lg={6} xl={7}>
							<Stack height="100%" direction="column" justifyContent="center">
								<img alt="" src={environmentalImg} />
							</Stack>
						</Grid>
					</Grid>
				</SecondSectionContainer>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const SecondSectionContainer = styled(SectionGap)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	img: {
		width: '100%',
		maxWidth: 700,
		margin: 'auto',
	},
}))

export { SecondSection };