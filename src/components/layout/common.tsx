import React from "react";
import { styled } from "@mui/material/styles";
import { Stack } from "@mui/material";

const ScrollWrapper = ({ className, children, ...props }: any) => {
  return (
    <ScrollContainer>
      <Stack className={`scrollContainer ${className}`} {...props}>
        {children}
      </Stack>
    </ScrollContainer>
  )
}

const GlobalSpacing = styled(Stack)(({ theme }) => ({
  '@media (min-width: 1800px)': {
    padding: `0px calc((100vw - 1600px)/2)`
  },

  padding: `0px 100px`,

  [theme.breakpoints.down("xl2")]: {
    padding: `0px 85px`,
  },

  [theme.breakpoints.down("xl")]: {
    padding: `0px 60px`,
  },

  [theme.breakpoints.down("lg")]: {
    padding: `0px 45px`,
  },

  [theme.breakpoints.down('md')]: {
    padding: `0px 25px`,
  },

  [theme.breakpoints.down('sm')]: {
    padding: `0px 20px`,
  }
}))

const SectionSpacing = styled(Stack)(({ theme }) => ({
  padding: `0px 60px`,

  [theme.breakpoints.down("xl2")]: {
    padding: `0px 50px`,
  },

  [theme.breakpoints.down("xl")]: {
    padding: `0px 40px`,
  },

  [theme.breakpoints.down("lg")]: {
    padding: `0px 30px`,
  },

  [theme.breakpoints.down('md')]: {
    padding: `0px 20px`,
  },

  [theme.breakpoints.down('sm')]: {
    padding: `0px 10px`,
  }
}))

const SectionGap = styled(Stack)(({ theme }) => ({
  gap: 70,

  [theme.breakpoints.down('xl')]: {
    gap: 60,
  },

  [theme.breakpoints.down('lg')]: {
    gap: 50,
  },

  [theme.breakpoints.down('md')]: {
    gap: 40,
  },

  [theme.breakpoints.down('sm')]: {
    gap: 30,
  },
}))

const ScrollContainer = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',

  '.scrollContainer': {
    width: '100%',
    height: '100%',
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
  },
})

export { GlobalSpacing, SectionSpacing, SectionGap, ScrollWrapper }