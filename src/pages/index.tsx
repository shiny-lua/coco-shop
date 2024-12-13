import React from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";


import { Layout } from "../components/layout/layout";
import { FirstSection } from "./dashboard/herosection";
import { SecondSection } from "./dashboard/secondsection";
import { ThirdSection } from "./dashboard/thirdsection";
import { FourthSection } from "./dashboard/fourthsection";
import { FifthSection } from "./dashboard/fifthsection";
import { SixthSection } from "./dashboard/sixthsection";
import { AnimeSection } from "./dashboard/animesection";
import { PreSaleInfo } from "./dashboard/presaleinfo";

const Dashboard = () => {

  return (
    <Layout>
      <FirstSection />

      <DashboardWrapper>
        <SecondSection />
        <AnimeSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        {/* <SixthSection /> */}
        <PreSaleInfo />
      </DashboardWrapper>
    </Layout >
  )
}

const DashboardWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",

  gap: 140,
  padding: '140px 0px',

  [theme.breakpoints.down('xl')]: {
    gap: 120,
    padding: '60px 0px',
  },

  [theme.breakpoints.down('lg')]: {
    gap: 90,
    padding: '60px 0px',
  },

  [theme.breakpoints.down('md')]: {
    gap: 60,
    padding: '60px 0px',
  },

  [theme.breakpoints.down('sm')]: {
    gap: 40,
    padding: '60px 0px',
  },
}))

export { Dashboard };