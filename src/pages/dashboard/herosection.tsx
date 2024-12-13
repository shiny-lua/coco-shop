import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";
import { GlobalSpacing, SectionSpacing } from "../../components/layout/common";
import { arrowRightImg, heroImg } from "../../assets/image";
import { Link } from "react-router-dom";

const FirstSection = () => {
	const { t } = useI18n();

	return (
		<HeroSectionWrapper>
			<HeroSectionContainer>
				<SectionSpacing flex={1} direction="column">
					<Stack gap={3} flex={1} direction="column" paddingY={6}>
						<Stack flex={1} className="hero-content">
							<Typography variant="h6">
								{t("body.hero.welcome")}
							</Typography>

							<Typography variant="h1">
								{t("body.hero.title")}
							</Typography>

							<Typography variant="h4">
								{t("body.hero.description")}
							</Typography>

							<WhitepaperButton to="/whitepaper.pdf" target="_blank">
								<Typography variant="body2">{t("body.hero.readWhitePaper")}</Typography>
								<img alt="" src={arrowRightImg} />
							</WhitepaperButton>
						</Stack>

						{/* <Stack className="coins-list">
							<img alt="" src={busdImg} />
							<img alt="" src={cardanoImg} />
							<img alt="" src={xrpImg} />
							<img alt="" src={tetherImg} />
							<img alt="" src={solanaImg} />
						</Stack> */}
					</Stack>
				</SectionSpacing>
			</HeroSectionContainer>
		</HeroSectionWrapper>
	)
}

const HeroSectionWrapper = styled(Stack)(({ theme }) => ({
	backgroundColor: theme.palette.common.heroBg,
}))

const HeroSectionContainer = styled(GlobalSpacing)(({ theme }) => ({
	paddingTop: 105,
	minHeight: "100vh",
	backgroundImage: `url(${heroImg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '105% 105%',
	backgroundPosition: "center",

	display: "flex",
	flexDirection: "column",

	'.hero-content': {
		gap: 30,
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",

		'h1, h4, h6': {
			color: theme.palette.common.white
		},

		h1: {
			fontWeight: 800,
			textAlign: "center",
			letterSpacing: '0em',
			lineHeight: '77px'
		},

		h4: {
			opacity: 0.8,
			fontWeight: 400,
			textAlign: "center",
			letterSpacing: '0.0em',
			lineHeight: '33px',
			maxWidth: 780,
		},

		h6: {
			opacity: 0.7,
			fontWeight: 500,
			textAlign: "center",
			letterSpacing: '0.2em',
			textTransform: "uppercase",
		},
	},

	'.coins-list': {
		display: "flex",
		alignItems: 'center',
		flexDirection: "row",
		justifyContent: "space-evenly",
		overflow: 'hidden',

		img: {
			maxWidth: '50%',
		}
	},

	[theme.breakpoints.down("xl2")]: {
		paddingTop: 95,
	},

	[theme.breakpoints.down("lg")]: {
		'.hero-content': {
			gap: 20,
		}
	},

	[theme.breakpoints.down("md")]: {
		backgroundSize: '200% 100%',
		paddingTop: 90,

		'.hero-content': {
			h1: {
				lineHeight: '66px',
			},

			h4: {
				lineHeight: '29px',
			}
		}
	},
}))

const WhitepaperButton = styled(Link)(({ theme }) => ({
	gap: 10,
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",

	cursor: "pointer",
	padding: "16px 24px",
	borderRadius: "32px",
	background: theme.palette.common.buttonBg,

	p: {
		fontWeight: 600,
		color: theme.palette.common.white,
	},

	[theme.breakpoints.down('sm')]: {
		width: '100%',
	}
}))

export { FirstSection };