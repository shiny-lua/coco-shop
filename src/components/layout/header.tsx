import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useI18n } from "react-simple-i18n";
import { styled } from "@mui/material/styles";
import { Menu, Stack, Typography } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';


import { GlobalSpacing } from "./common";
import { useGlobalContext } from "../../provider";
import { arrowDownImg, globeImg, hamburgerImg, logoImg } from "../../assets/image";

interface HeaderProps {
  sticky: string
}

interface LanguageListType {
  key: string
  value: string
}

interface MenuSettingProps {
  onClick?: any
}

const languageList: LanguageListType[] = [
  { key: 'en', value: 'English' },
  { key: 'jp', value: '日本語' }
]

const Header = ({ sticky }: HeaderProps) => {
  const [menuEL, setMenuEL] = useState<null | HTMLElement>(null);

  const onOpenMunu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEL(event.currentTarget);
  }

  const onCloseMenu = () => {
    setMenuEL(null);
  }

  return (
    <HeaderWrapper>
      <HeaderContainer sticky={sticky}>
        <LogoWrapper to='/'>
          <img alt="" src={logoImg} />
          <Typography variant="h3">CLIP</Typography>
        </LogoWrapper>

        <DesktopLinksContainer>
          <MenuLinks />
        </DesktopLinksContainer>

        <DesktopMenuContainer>
          <MenuSetting />
        </DesktopMenuContainer>

        <ResponsiveMenu>
          <Stack onClick={onOpenMunu} sx={{ cursor: "pointer" }}>
            <img alt="" src={hamburgerImg} />
          </Stack>

          <Menu anchorEl={menuEL}
            open={Boolean(menuEL)} onClose={onCloseMenu}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
            transformOrigin={{ vertical: 'top', horizontal: 'right', }}
            PaperProps={{ sx: { mt: 4 } }}
          >
            <ResponsiveMenuContainer>
              <MobileLinksContainer onClick={onCloseMenu}>
                <MenuLinks />
              </MobileLinksContainer>

              <MobileMenuContainer>
                <MenuSetting onClick={onCloseMenu} />
              </MobileMenuContainer>
            </ResponsiveMenuContainer>
          </Menu>
        </ResponsiveMenu>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

const MenuLinks = () => {
  const { t } = useI18n();

  return (
    <>
      <Link to='/'>
        <Typography variant="h5">{t('home.home')}</Typography>
      </Link>

      <Link to="/whitepaper.pdf" target="_blank">
        <Typography variant="h5">{t('home.whitePaper')}</Typography>
      </Link>

      <Link to='/'>
        <Typography variant="h5">{t('home.contactUs')}</Typography>
      </Link>

      <Link to='/Contracts_Audit.pdf' target="_blank">
        <Typography variant="h5">{t('home.contractsAudit')}</Typography>
      </Link>
    </>
  )
}

const MenuSetting = ({ onClick }: MenuSettingProps) => {
  return (
    <>
      <LanguageMenu onClick={onClick} />

      {/* <Stack className="menu-item-container">
        <img alt="" src={discordImg} />
      </Stack>

      <Stack className="menu-item-container">
        <img alt="" src={twitterImg1} />
      </Stack>

      <Stack className="menu-item-container">
        <img alt="" src={openseaImg} />
      </Stack> */}
    </>
  )
}

const LanguageMenu = ({ onClick }: MenuSettingProps) => {
  const [{ lang }, { dispatch }] = useGlobalContext();
  const [menuEL, setMenuEL] = useState<null | HTMLElement>(null);

  const onOpenMunu = (event: React.MouseEvent<HTMLElement>) => {
    setMenuEL(event.currentTarget);
  }

  const onCloseMenu = () => {
    setMenuEL(null);
    if (onClick) onClick();
  }

  const onChangeLang = (item: LanguageListType) => {
    if (item.key !== lang) {
      dispatch({ type: 'lang', payload: item.key })
    }
  }

  return (
    <>
      <Stack className="menu-item-container language-select" onClick={onOpenMunu}>
        <img alt="" src={globeImg} />

        <Stack gap={1.5} direction="row">
          <Typography variant="h5">{lang}</Typography>
          <img alt="" src={arrowDownImg} />
        </Stack>
      </Stack>

      <Menu anchorEl={menuEL}
        open={Boolean(menuEL)} onClose={onCloseMenu}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
        transformOrigin={{ vertical: 'top', horizontal: 'right', }}
        PaperProps={{ sx: { mt: 4 } }}
      >
        <LanguageMenuWrapper onClick={onCloseMenu}>
          {languageList.map((item: LanguageListType, key: number) => (
            <Stack className="language-item" key={key} onClick={() => { onChangeLang(item) }}>
              <Checkbox inputProps={{ 'aria-label': 'controlled' }} checked={item.key === lang} />
              <Typography variant="h6">{item.value}</Typography>
            </Stack>
          ))}
        </LanguageMenuWrapper>
      </Menu>
    </>
  )
}

const HeaderWrapper = styled(GlobalSpacing)(({ theme }) => ({
  zIndex: 10,
  top: 25, left: 0,
  width: "100vw",
  position: 'fixed',

  [theme.breakpoints.down("md")]: {
    // top: 20,
  },
}))

const HeaderContainer = styled(Stack)<{ sticky: string }>(({ theme, sticky }) => ({
  height: 80,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",

  backdropFilter: sticky ? 'blur(20px)' : 'none',
  transition: sticky ? 'box-shadow 0.6s ease-out 0s' : 'box-shadow 0.6s ease-in 0s',
  boxShadow: sticky ? '0 3px 10px rgb(0 0 0 / 0.2)' : 'none',

  padding: '0px 25px',
  borderRadius: "50px",
  color: theme.palette.common.black,
  backgroundColor: theme.palette.common.white,

  [theme.breakpoints.down("xl2")]: {
    height: 70,
  },

  [theme.breakpoints.down("md")]: {
    height: 65,
    padding: '0px 20px',
  },
}))

const LogoWrapper = styled(Link)({
  gap: 10,
  height: '100%',
  display: "flex",
  flexDirection: "row",
  alignItems: "center",

  img: {
    height: '50%'
  },

  h3: {
    fontWeight: 800,
  },
})

const LinksWrapper = styled(Stack)(({ theme }) => ({
  gap: 35,

  a: {
    cursor: "pointer",

    '&:hover': {
      opacity: 0.5,
    }
  },

  [theme.breakpoints.down("xl")]: {
    gap: 30,
  },

  [theme.breakpoints.down("md")]: {
    gap: 25,
  }
}))

const DesktopLinksContainer = styled(LinksWrapper)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("lg")]: {
    display: "none",
  }
}))

const MobileLinksContainer = styled(LinksWrapper)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("lg")]: {
    gap: 10,
    display: "flex",
    flexDirection: "column",
  },

  a: {
    borderRadius: 12,
    padding: '16px 20px 16px 20px',
    background: theme.palette.common.menuLinkBg,
    border: `1px solid ${theme.palette.common.menuLinkBorder}`,
  }
}))

const MenuContainer = styled(Stack)(({ theme }) => ({
  gap: 10,
  flexWrap: "wrap",
  display: "flex",
  flexDirection: "row",

  '.language-select': {
    border: `1px solid ${theme.palette.common.iconBorder}`,

    h5: {
      textTransform: 'uppercase',
    },
  },

  '.menu-item-container': {
    gap: 10,
    display: "flex",
    flexDirection: "row",

    padding: 12,
    cursor: "pointer",
    borderRadius: '50px',
    backgroundColor: theme.palette.common.iconBg,

    '&:hover': {
      opacity: 0.75,
    }
  },
}))

const DesktopMenuContainer = styled(MenuContainer)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    display: "none"
  }
}))

const MobileMenuContainer = styled(MenuContainer)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down("lg")]: {
    display: 'flex',
  }
}))

const ResponsiveMenu = styled(Stack)(({ theme }) => ({
  display: "none",
  color: theme.palette.common.white,

  [theme.breakpoints.down("lg")]: {
    display: "block"
  },

  "&:hover": {
    opacity: 0.75,
  }
}))

const ResponsiveMenuContainer = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 250,

  gap: 15,
  padding: 15,
  borderRadius: 30,
  background: theme.palette.common.menuBg,
  border: `1px solid ${theme.palette.common.menuBorder}`,
}))

const LanguageMenuWrapper = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: 150,

  gap: 5,
  borderRadius: 10,
  padding: '5px 0px',
  background: theme.palette.common.white,
  border: `1px solid ${theme.palette.common.menuBorder}`,

  '.language-item': {
    gap: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    cursor: 'pointer',

    padding: 10,
    borderRadius: 20,
    background: theme.palette.common.menuBg,
    border: `1px solid ${theme.palette.common.iconBorder}`,

    '.MuiCheckbox-root': {
      padding: 'unset !important',
      color: theme.palette.common.typograph2,
    }
  }
}))

export { Header };