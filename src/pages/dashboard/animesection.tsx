import React from "react";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Stack, Typography, useMediaQuery } from "@mui/material";
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';
import { GlobalSpacing, SectionGap, SectionSpacing } from "../../components/layout/common";
import { animeImg1, animeImg2, animeImg3 } from "../../assets/image";
import { CustomSlider } from "../../components/slider/customSlider";

const responsiveSettings = [
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1
		}
	}, {
		breakpoint: 0,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
		}
	}
]

const AnimeSection = () => {
	const { t } = useI18n();
	const isDesktop = useMediaQuery('(min-width:768px)');

	return (
		<GlobalSpacing>
			<SectionSpacing>
				<AnimeSectionWrapper>
					<Typography variant="h2" textAlign='center'>
						{t("body.anime.title")}
					</Typography>

					<CustomSlider responsive={responsiveSettings} arrows={!isDesktop} canSwipe={!isDesktop}>
						<AnimeItem>
							<img alt="" src={animeImg1} />
						</AnimeItem>

						<AnimeItem>
							<img alt="" src={animeImg2} />
						</AnimeItem>

						<AnimeItem>
							<img alt="" src={animeImg3} />
						</AnimeItem>
					</CustomSlider>
				</AnimeSectionWrapper>
			</SectionSpacing>
		</GlobalSpacing>
	)
}

const AnimeSectionWrapper = styled(SectionGap)({
	display: "flex",
	flexDirection: "column",
})

const AnimeItem = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	padding: "0px 10px",
	userSelect: "none",

	img: {
		width: "100%",
		height: "auto",
	}
})

export { AnimeSection };