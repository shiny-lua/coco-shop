import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Grid, Stack, Typography } from "@mui/material";

import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";

const preSaleInfomations = [
	"1 Token Price = 0.3USD",
	"Lock-up/3 months",
	"+20% granted"
]

const PreSaleInfo = () => {
	const { t } = useI18n();

	return (
		<GlobalSpacing>
			<SectionSpacing>
				<PreSaleInfoWrapper>
					<Typography variant="h2" textAlign="center">
						{t("body.presaleInfo.title")}
					</Typography>

					<Grid container spacing={{ xs: 2, sm: 3, md: 5 }}>
						{preSaleInfomations.map((title: string, key: number) => (
							<Grid item xs={12} md={6} xl={4} key={key}>
								<PreSaleItem>
									<Typography variant="h3">
										{title}
									</Typography>
								</PreSaleItem>
							</Grid>
						))}
					</Grid>
				</PreSaleInfoWrapper>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const PreSaleInfoWrapper = styled(SectionGap)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	zIndex: 1,

	h2: {
		fontWeight: 800,
	}
}))

const PreSaleItem = styled('div')(({ theme }) => ({
	position: "relative",
	background: theme.palette.common.mainBg,
	backgroundClip: "padding-box",
	border: `solid 1px transparent`,
	padding: "40px 20px",
	borderRadius: '15px',
	userSelect: "none",
	cursor: "pointer",

	'&:before': {
		content: "''",
		position: "absolute",
		top: 0, right: 0, bottom: 0, left: 0,
		background: theme.palette.common.preSaleBorder,
		borderRadius: "inherit",
		margin: '-1px',
		zIndex: -1,
	},

	h3: {
		fontWeight: 700,
		textAlign: "center",
		color: theme.palette.common.typograph3,
	},

	[theme.breakpoints.down("sm")]: {
		padding: "30px 20px",
	}
}))

export { PreSaleInfo };