"use client";

import { useState, type ReactElement } from "react";
import NextLink from "next/link";
import Image from "next/image";

import {
  Box,
  Container,
  IconButton,
  Link as MuiLink,
  Stack,
} from "@mui/material";
import type { SvgIconComponent } from "@mui/icons-material";

import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { AnimatePresence, motion } from "motion/react";
import { AboutMenu } from "@/components/layout/aboutMenu";
import logoImg from "@/assets/images/logo.webp";

type HeaderTheme = "light" | "dark";

export interface HeaderProps {
  theme?: HeaderTheme;
}

type SocialLink = {
  name: "X" | "Instagram" | "Linkedin" | "Telegram";
  href: string;
  Icon: SvgIconComponent;
};

const SOCIAL_LINKS: readonly SocialLink[] = [
  { name: "X", Icon: TwitterIcon, href: "#" },
  { name: "Instagram", Icon: InstagramIcon, href: "#" },
  { name: "Linkedin", Icon: LinkedInIcon, href: "#" },
  { name: "Telegram", Icon: TelegramIcon, href: "#" },
] as const;

type SocialName = (typeof SOCIAL_LINKS)[number]["name"];

const desktopNavLinkSx = (dark: boolean) => ({
  position: "relative" as const,
  fontSize: "1rem",
  fontWeight: 500,
  textDecoration: "none",
  color: dark ? "#FFFFFF" : "#942629",
  opacity: 1,
  transition: "opacity 0.2s ease",
  "&:hover": {
    opacity: 0.7,
  },
  "&::after": {
    content: '""',
    position: "absolute" as const,
    left: 0,
    bottom: -4,
    height: 2,
    width: "100%",
    backgroundColor: dark ? "#FFFFFF" : "#942629",
    transform: "scaleX(0)",
    transformOrigin: "left",
    transition: "transform 0.3s ease",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
  },
});

function Header({ theme = "dark" }: HeaderProps): ReactElement {
  const isDark = theme === "dark";

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hoveredDesktopIcon, setHoveredDesktopIcon] =
    useState<SocialName | null>(null);
  const [hoveredMobileIcon, setHoveredMobileIcon] =
    useState<SocialName | null>(null);
  const [aboutOpen, setAboutOpen] = useState<boolean>(false);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        borderBottom: "1px solid",
        borderColor: isDark
          ? "rgba(255,255,255,0.1)"
          : "rgba(0,0,0,0.05)",
        px: { xs: 2, md: 3 },
        // transparent by default
        bgcolor: "transparent",
        backdropFilter: "none",
        WebkitBackdropFilter: "none",
        transition:
          "background-color 0.25s ease, backdrop-filter 0.25s ease, -webkit-backdrop-filter 0.25s ease",
        // frosted glass on hover
        "&:hover": {
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          bgcolor: isDark
            ? "rgba(23,3,0,0.55)" // warm dark glass
            : "rgba(250,234,202,0.9)", // light glass
        },
        color: isDark ? "#FFFFFF" : "#000000",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "64rem", // ~ max-w-5xl
          mx: "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Logo */}
        <Box
          component={NextLink}
          href="/"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            textDecoration: "none",
            color: isDark ? "#FFFFFF" : "#000000",
            opacity: 1,
            transition: "opacity 0.2s ease",
            "&:hover": { opacity: 0.8 },
          }}
        >
          <Image
            src={logoImg}
            alt="Logo"
            height={18}
            style={{ width: "auto", height: 18 }}
            priority
          />
        </Box>

        {/* Desktop Navigation */}
        <Stack
          component="nav"
          direction="row"
          spacing={4}
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          <MuiLink
            component={NextLink}
            href="/"
            sx={desktopNavLinkSx(isDark)}
          >
            Home
          </MuiLink>

          <Box
            sx={{ position: "relative" }}
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <MuiLink
              component={NextLink}
              href="#about"
              sx={{
                ...desktopNavLinkSx(isDark),
                display: "inline-flex",
                alignItems: "center",
                gap: 0.5,
              }}
            >
              About
            </MuiLink>
            <Box
              sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                pt: 3,
                transform: aboutOpen
                  ? "translate(-50%, 0)"
                  : "translate(-50%, 8px)",
                opacity: aboutOpen ? 1 : 0,
                visibility: aboutOpen ? "visible" : "hidden",
                transition:
                  "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease",
              }}
            >
              <AboutMenu />
            </Box>
          </Box>
        </Stack>

        {/* Desktop Social Icons */}
        <Stack
          direction="row"
          spacing={0}
          sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
        >
          {SOCIAL_LINKS.map(({ name, href, Icon }) => {
            const isHovered = hoveredDesktopIcon === name;
            const baseColor = isDark ? "#FFFFFF" : "#942629";

            return (
              <Box
                key={name}
                component="a"
                href={href}
                aria-label={name}
                onMouseEnter={() => setHoveredDesktopIcon(name)}
                onMouseLeave={() => setHoveredDesktopIcon(null)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 1.5,
                  bgcolor: "transparent",
                }}
              >
                <Icon
                  sx={{
                    fontSize: 24,
                    transition: "color 0.2s ease",
                    color: isHovered ? "#DCB821" : baseColor,
                  }}
                />
              </Box>
            );
          })}
        </Stack>

        {/* Mobile Menu Button */}
        <IconButton
          onClick={() => setIsOpen(true)}
          sx={{
            display: { xs: "flex", md: "none" },
            color: "#FFFFFF",
          }}
          aria-label="Open menu"
        >
          <MenuIcon sx={{ fontSize: 24 }} />
        </IconButton>
      </Container>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              height: "100dvh",
              width: "100vw",
              background:
                "linear-gradient(to bottom, #170300 0%, #841403 100%)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                height: 64,
                px: 2,
                borderBottom: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <Box
                component={NextLink}
                href="/"
                onClick={() => setIsOpen(false)}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src={logoImg}
                  alt="Logo"
                  height={18}
                  style={{ width: "auto", height: 18 }}
                  priority
                />
              </Box>
              <IconButton
                onClick={() => setIsOpen(false)}
                sx={{ color: "#FFFFFF" }}
                aria-label="Close menu"
              >
                <CloseIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Box>

            <Box
              sx={{
                flex: 1,
                p: 4,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Stack
                component="nav"
                spacing={3}
                sx={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {[
                  { label: "Home", href: "/" },
                  { label: "Speakers", href: "#speakers" },
                  { label: "Team", href: "#team" },
                  { label: "Event Location", href: "#location" },
                  { label: "Archive 2025", href: "#archive-2025" },
                  { label: "Archive 2024", href: "#archive-2024" },
                ].map(({ label, href }) => (
                  <MuiLink
                    key={label}
                    component={NextLink}
                    href={href}
                    onClick={() => setIsOpen(false)}
                    sx={{
                      fontSize: "1.5rem",
                      fontWeight: 500,
                      color: "#FFFFFF",
                      textDecoration: "none",
                      opacity: 1,
                      transition: "opacity 0.2s ease",
                      "&:hover": { opacity: 0.7 },
                    }}
                  >
                    {label}
                  </MuiLink>
                ))}
              </Stack>

              <Box sx={{ mx: "auto", mb: 2 }}>
                <Stack
                  direction="row"
                  spacing={0}
                  sx={{
                    display: { xs: "flex", md: "none" },
                    alignItems: "center",
                  }}
                >
                  {SOCIAL_LINKS.map(({ name, href, Icon }) => {
                    const isHovered = hoveredMobileIcon === name;

                    return (
                      <Box
                        key={name}
                        component="a"
                        href={href}
                        aria-label={name}
                        onMouseEnter={() => setHoveredMobileIcon(name)}
                        onMouseLeave={() => setHoveredMobileIcon(null)}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 40,
                          height: 40,
                          borderRadius: 1.5,
                          bgcolor: "transparent",
                        }}
                      >
                        <Icon
                          sx={{
                            fontSize: 24,
                            transition: "color 0.2s ease",
                            color: isHovered ? "#DCB821" : "#FFFFFF",
                          }}
                        />
                      </Box>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
}

export default Header;
