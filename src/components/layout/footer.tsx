"use client";

import type { ReactElement } from "react";
import { Box, Container, Link, Typography } from "@mui/material";
import { Instagram, LinkedIn, Send } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';

function Footer(): ReactElement {
  return (
    <Box
      component="footer"
      sx={{
        py: 10,
        px: { xs: 4, md: 6 },
        borderTop: "1px solid rgba(255,255,255,0.5)",
        backgroundColor: "rgba(6,6,6,0)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem",
          mx: "auto",
        }}
      >
        {/* Top columns */}
        <Box
          sx={{
            display: { xs: "grid", md: "flex" },
            gridTemplateColumns: {
              xs: "repeat(2, minmax(0, 1fr))",
              md: "none",
            },
            columnGap: { xs: 4, md: 8 },
            rowGap: { xs: 4, md: 0 },
            justifyContent: { md: "space-between" },
            mb: 4,
          }}
        >
          {/* ABOUT US */}
          <Box
            sx={{
              flexBasis: { md: "auto" },
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Typography
              component="h4"
              className="animated-gradient-text"
              sx={{
                fontWeight: 700,
                mb: { xs: 2.75, md: 2 }, // more space on mobile
                fontSize: { xs: "0.95rem", md: "0.875rem" }, // slightly bigger on mobile
                textTransform: "uppercase",
              }}
            >
              About us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                pt: {xs: 1, md: 0},
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 1 }, // more spacing between items on mobile
                fontSize: { xs: "0.95rem", md: "0.875rem" },
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="/team"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.google.com/maps/place/Villa+Doria+d'Angri/data=!4m2!3m1!1s0x0:0x8549f64b85877f64?sa=X&ved=1t:2428&ictx=111&language=it&hl=it"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Location
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.napuleth.org/archive/2025"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Archive 2025
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.napuleth.org/archive/2024"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Archive 2024
                </Link>
              </li>
            </Box>
          </Box>

          {/* JOIN US */}
          <Box
            sx={{
              flexBasis: { md: "auto" },
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Typography
              component="h4"
              className="animated-gradient-text"
              sx={{
                fontWeight: 700,
                mb: { xs: 2.75, md: 2 },
                fontSize: { xs: "0.95rem", md: "0.875rem" },
                textTransform: "uppercase",
              }}
            >
              Join us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                pt: {xs: 1, md: 0},
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 1 },
                fontSize: { xs: "0.95rem", md: "0.875rem" },
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="https://docsend.com/view/zaw8ij7k9avkcg6z"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Sponsor us
                </Link>
              </li>
              <li>
                <Link
                  href="https://speak.ctrlshift.events/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Join as a speaker
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Text us
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  Volunteer
                </Link>
              </li>
            </Box>
          </Box>

          {/* FOLLOW US */}
          <Box
            sx={{
              flexBasis: { md: "auto" },
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Typography
              component="h4"
              className="animated-gradient-text"
              sx={{
                fontWeight: 700,
                mb: { xs: 2.75, md: 2 },
                fontSize: { xs: "0.95rem", md: "0.875rem" },
                textTransform: "uppercase",
              }}
            >
              Follow us
            </Typography>
            <Box
              component="ul"
              sx={{
                listStyle: "none",
                p: 0,
                pt: {xs: 1, md: 0},
                m: 0,
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.5, md: 1 },
                fontSize: { xs: "0.95rem", md: "0.875rem" },
                color: "rgba(249,250,251,0.65)",
              }}
            >
              <li>
                <Link
                  href="https://x.com/napulETH"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <XIcon sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  X
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/napulETH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <Instagram sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/napul-eth"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <LinkedIn sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Linkedin
                </Link>
              </li>
              <li>
                <Link
                  href="https://t.me/napuleth"
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  sx={{
                    color: "inherit",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    "&:hover": { color: "#FFFFFF" },
                  }}
                >
                  <Send sx={{ fontSize: 16, color: "#FFFFFF" }} />
                  Telegram
                </Link>
              </li>
            </Box>
          </Box>

          {/* DATE & LOCATION */}
          <Box
            sx={{
              flexBasis: { md: "auto" },
              flexShrink: 0,
              minWidth: 0,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1.75, md: 2.5 }, // closer sections so cell height is closer to "Follow us"
              }}
            >
              <Box>
                <Typography
                  component="h4"
                  className="animated-gradient-text"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "0.875rem" },
                    textTransform: "uppercase",
                  }}
                >
                  Date
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "0.875rem" },
                    color: "rgba(249,250,251,0.65)",
                    pt: {xs: 1, md: 0},
                  }}
                >
                  13 - 14 -15 June 2026
                </Typography>
              </Box>

              <Box>
                <Typography
                  component="h4"
                  className="animated-gradient-text"
                  sx={{
                    fontWeight: 700,
                    mb: { xs: 1.25, md: 1.5 },
                    fontSize: { xs: "0.95rem", md: "0.875rem" },
                    textTransform: "uppercase",
                  }}
                >
                  Location
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "0.95rem", md: "0.875rem" },
                    color: "rgba(249,250,251,0.65)",
                    pt: {xs: 1, md: 0},
                  }}
                >
                  Villa Doria D&apos;Angri, Via Francesco Petrarca,
                  <br />
                  80, 80123 Napoli NA
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Bottom bar */}
        <Box
          sx={{
            mt: 10,
            pt: 4,
            borderTop: "1px solid rgba(229,231,235,0.35)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            fontSize: { xs: "0.8rem", md: "0.75rem" },
            color: "rgba(249,250,251,0.6)",
          }}
        >
          <Typography sx={{ fontSize: { xs: "0.8rem", md: "0.75rem" } }}>
            © 2026 ctrl/shift. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
