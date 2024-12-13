import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Stack, Typography } from "@mui/material";

import { GlobalSpacing, SectionSpacing } from "./common";
import { heroImg } from "../../assets/image";

const Footer = () => {
	const { t } = useI18n();

	return (
		<FooterWrapper>
			<SectionSpacing>
				<FooterContainer>
					{/* <BaseContainer gap={2} justifyContent="center">
						<LinkItem>
							<img alt="" src={discordWhiteImg} />
							<Typography variant="body2">{t("footer.discord")}</Typography>
						</LinkItem>

						<LinkItem>
							<img alt="" src={telegramWhiteImg} />
							<Typography variant="body2">{t("footer.telegram")}</Typography>
						</LinkItem>

						<LinkItem>
							<img alt="" src={youtubueWhiteImg} />
							<Typography variant="body2">{t("footer.youtubue")}</Typography>
						</LinkItem>

						<LinkItem>
							<img alt="" src={tiktokWhiteImg} />
							<Typography variant="body2">{t("footer.tiktok")}</Typography>
						</LinkItem>
					</BaseContainer> */}

					{/* <Stack className="line" /> */}

					<BaseContainer gap={2} justifyContent="space-between" mb={5}>
						<Typography variant="body2">
							{t("footer.copyRight")}
						</Typography>

						<BaseContainer gap={2} justifyContent="center">
							<Typography variant="body2">
								{t("footer.terms")}
							</Typography>

							<Typography variant="body2">
								{t("footer.policy")}
							</Typography>
						</BaseContainer>
					</BaseContainer>
				</FooterContainer>
			</SectionSpacing>
		</FooterWrapper>
	)
}

const FooterWrapper = styled(GlobalSpacing)(({ theme }) => ({
	background: theme.palette.common.heroBg,
	backgroundImage: `url(${heroImg})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: '105% auto',
	backgroundPosition: "center 8%",

	[theme.breakpoints.down("md")]: {
		backgroundSize: "auto auto"
	}
}))

const FooterContainer = styled(Stack)(({ theme }) => ({
	// backgroundColor: theme.palette.common.heroBg,

	gap: 30,
	padding: '60px 0px',

	p: {
		cursor: "pointer",
		color: theme.palette.common.footerTypograph,
	},

	'.line': {
		height: 1,
		backgroundColor: theme.palette.common.footerLineBg,
	},

	[theme.breakpoints.down('lg')]: {
		gap: 25,
		padding: '50px 0px',
	},

	[theme.breakpoints.down('md')]: {
		gap: 20,
		padding: '40px 0px',
	},

	[theme.breakpoints.down('sm')]: {
		gap: 15,
		padding: '30px 0px',
	},
}))

const BaseContainer = styled(Stack)({
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	flexWrap: "wrap",
})

// const LinkItem = styled(Stack)(({ theme }) => ({
// 	gap: 10,
// 	display: "flex",
// 	flexDirection: 'row',
// 	alignItems: "center",
// 	justifyContent: "center",

// 	cursor: "pointer",
// 	borderRadius: '32px',
// 	padding: '12px 16px',
// 	backgroundColor: theme.palette.common.footerLinkBg,

// 	[theme.breakpoints.down('sm')]: {
// 		width: '47%'
// 	},
// }))

export { Footer };