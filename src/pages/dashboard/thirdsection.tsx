import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Grid, Stack, Typography } from "@mui/material";

import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";
import { afforestationImg, biomaspowerImg, evBatteryImg, idolImg } from "../../assets/image";

const ThirdSection = () => {
	const { t } = useI18n();

	return (
		<GlobalSpacing>
			<SectionSpacing>
				<ThirdSectionContainer>
					<Typography variant="h2">
						{t("body.service.title")}
					</Typography>

					<Stack maxWidth={1100} margin='auto'>
						<Grid container spacing={3}>
							<Grid item xs={12} lg={6}>
								<CardContainer gap={3}>
									<img alt="" src={afforestationImg} />

									<Stack gap={2} direction="column">
										<Typography variant="body1">
											{t("body.service.afforestation.title")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.afforestation.description1")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.afforestation.description2")}
										</Typography>
									</Stack>
								</CardContainer>
							</Grid>

							<Grid item xs={12} lg={6}>
								<CardContainer gap={3}>
									<img alt="" src={evBatteryImg} />

									<Stack gap={2} direction="column">
										<Typography variant="body1">
											{t("body.service.evBattery.title")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.evBattery.description1")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.evBattery.description2")}
										</Typography>
									</Stack>
								</CardContainer>
							</Grid>

							<Grid item xs={12} lg={6}>
								<CardContainer gap={3}>
									<img alt="" src={biomaspowerImg} />

									<Stack gap={2} direction="column">
										<Typography variant="body1">
											{t("body.service.biomass.title")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.biomass.description1")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.biomass.description2")}
										</Typography>
									</Stack>
								</CardContainer>
							</Grid>

							<Grid item xs={12} lg={6}>
								<CardContainer gap={3}>
									<img alt="" src={idolImg} />

									<Stack gap={2} direction="column">
										<Typography variant="body1">
											{t("body.service.idol.title")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.idol.description1")}
										</Typography>

										<Typography variant="body2">
											{t("body.service.idol.description2")}
										</Typography>
									</Stack>
								</CardContainer>
							</Grid>
						</Grid>
					</Stack>
				</ThirdSectionContainer>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const ThirdSectionContainer = styled(SectionGap)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",

	h2: {
		textAlign: "center",
	},
}))

const CardContainer = styled(Stack)(({ theme }) => ({
	maxWidth: 550,
	height: '100%',
	display: "flex",
	flexDirection: "column",
	margin: 'auto',

	padding: 15,
	borderRadius: 25,
	border: `1px solid ${theme.palette.common.serviceBorder}`
}))

export { ThirdSection };