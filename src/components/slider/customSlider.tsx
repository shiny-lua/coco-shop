import React from 'react';
import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface CustomSliderProps {
	responsive: any
	autoplay?: boolean
	canSwipe?: boolean
	arrows?: boolean
	infinite?: boolean
	slidesToShow?: number
	slidesToScroll?: number
	children: React.ReactNode
	[key: string]: any
}

const CustomSlider = (sliderProps: CustomSliderProps) => {
	const { responsive, children, slidesToScroll = 1, slidesToShow = 1, autoplay = false, canSwipe = false, arrows = false, infinite = false, ...props } = sliderProps
	return (
		<SliderWrapper>
			<Slide slidesToShow={slidesToShow}
				slidesToScroll={slidesToScroll}
				responsive={responsive}
				prevArrow={<PreviewArrow />}
				nextArrow={<NextArrow />}
				autoplay={autoplay}
				canSwipe={canSwipe}
				infinite={infinite}
				arrows={arrows}
				{...props}
			>
				{children}
			</Slide>
		</SliderWrapper>
	)
}

const PreviewArrow = () => {
	return (
		<SliderArrowWrapper className='left-slider-arrow'>
			<NavigateBeforeIcon />
		</SliderArrowWrapper>
	)
}

const NextArrow = () => {
	return (
		<SliderArrowWrapper className='right-slider-arrow'>
			<NavigateNextIcon />
		</SliderArrowWrapper>
	)
}


const SliderWrapper = styled(Stack)({
	display: "flex",
	flexDirection: "column",
	position: "relative",

	'.left-slider-arrow': {
		left: 30,
		opacity: 0,
	},

	'.right-slider-arrow': {
		right: 30,
		opacity: 0,
	},

	'&:hover': {
		'.left-slider-arrow': {
			opacity: 1,
		},

		'.right-slider-arrow': {
			opacity: 1,
		},
	}
})

const SliderArrowWrapper = styled(Stack)(({ theme }) => ({
	zIndex: 2,
	position: "absolute",
	color: theme.palette.common.white,

	width: 50,
	height: 50,
	borderRadius: 50,
	// backgroundColor: theme.palette.common.white,
	boxShadow: `0px 0px 10px ${theme.palette.common.white}`,
	transition: 'opacity 1s ease-in-out',

	display: "flex",
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "center",
	cursor: "pointer",

	svg: {
		fontSize: 50,
	}
}))

export { CustomSlider };