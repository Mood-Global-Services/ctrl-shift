"use client";

import type { ReactElement } from "react";
import { useRef } from "react";
import Image from "next/image";
import { Box, Stack, Container, Typography, Link } from "@mui/material";
import NewSponsorsButton from "@/components/ui/newSponsorsButton";
import NewTicketsButton from "@/components/ui/newTicketsButton";
import { motion, useScroll, useTransform, useInView } from "motion/react";

import crestImg from "@/assets/images/relic.webp";
import starImg from "@/assets/images/star.webp";
import sunImg from "@/assets/images/sun.webp";
import columnImg from "@/assets/images/column.webp";

import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

type HeroTheme = "light" | "dark";

export interface HeroProps {
  theme?: HeroTheme;
}

function Hero({ theme = "light" }: HeroProps): ReactElement {
  const { scrollY } = useScroll();
  const isDark = theme === "dark";

  const contentRef = useRef<HTMLDivElement | null>(null);
  const isContentInView = useInView(contentRef, {
    amount: 0.4,
    once: true,
  });

  // Parallax motion values
  const yLeft = useTransform(scrollY, [0, 500], [0, 100]);
  const yRight = useTransform(scrollY, [0, 500], [0, -80]);
  const yStar = useTransform(scrollY, [0, 500], [0, -50]);
  const ySun = useTransform(scrollY, [0, 500], [0, -60]);
  const yCrest = useTransform(scrollY, [0, 500], [0, -40]);

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        mt: { xs: 4, md: 6 },
        mb: { xs: 8, md: 12 },
        px: { xs: 1.5, md: 3 },
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: "100%", lg: "1200px", xl: "1440px" },
          mx: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: {
              xs: "80vh",
              md: "82vh",
              lg: "85vh",
              xl: "90vh",
            },
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            px: { xs: 2, md: 0 },
          }}
        >
          {/* Floating Crest - Top Center */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
              top: {
                xs: "2%",
                md: "1%",  // slightly higher on laptop
                lg: "2%",  // slightly higher on desktop
                xl: "8%",
              },
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: yCrest }}>
              <motion.div
                animate={{ y: [-8, 0, -8] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={crestImg}
                  alt="Decorative crest"
                  height={140}
                  style={{
                    width: "auto",
                    // slightly larger overall (helps md / lg)
                    height: "clamp(90px, 12vh, 170px)",
                    opacity: 0.9,
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* Floating Star - Top Left-ish */}
          <Box
            sx={{
              position: "absolute",
              left: {
                xs: "4%",
                md: "16%", // closer to center on laptop
                lg: "14%", // closer to center on desktop
                xl: "8%",
              },
              top: {
                xs: "6%",
                md: "1%",  // higher on laptop
                lg: "3%",  // higher on desktop
                xl: "12%",
              },
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: yStar }}>
              <motion.div
                animate={{ y: [-10, 20, -10] }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={starImg}
                  alt="Decorative star"
                  height={150}
                  style={{
                    width: "auto",
                    // slightly larger overall
                    height: "clamp(90px, 13vh, 190px)",
                    opacity: 0.9,
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* Floating Sun - Top Right-ish */}
          <Box
            sx={{
              position: "absolute",
              right: {
                xs: "4%",
                md: "16%", // closer to center on laptop
                lg: "14%", // closer to center on desktop
                xl: "8%",
              },
              top: {
                xs: "6%",
                md: "1%",  // higher on laptop
                lg: "3%",  // higher on desktop
                xl: "12%",
              },
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: ySun }}>
              <motion.div
                animate={{ y: [10, -15, 10] }}
                transition={{
                  duration: 7.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Image
                  src={sunImg}
                  alt="Decorative sun"
                  height={140}
                  style={{
                    width: "auto",
                    // slightly larger overall
                    height: "clamp(85px, 12vh, 180px)",
                    opacity: 0.9,
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* Floating Column Left */}
          <Box
            sx={{
              position: "absolute",
              left: {
                xs: "-5rem",
                sm: "-4rem",
                md: "-2rem",
                lg: "-1rem",
                xl: "0",
              },
              top: "55%",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: yLeft }}>
              <motion.div
                animate={{ y: [-28, 20, -28] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={columnImg}
                  alt="Decorative column"
                  height={420}
                  style={{
                    width: "auto",
                    height: "clamp(260px, 45vh, 520px)",
                    opacity: 0.9,
                    objectFit: "contain",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* Floating Column Right (mirrored) */}
          <Box
            sx={{
              position: "absolute",
              right: {
                xs: "-5rem",
                sm: "-4rem",
                md: "-2rem",
                lg: "-1rem",
                xl: "0",
              },
              top: "53%",
              transform: "translateY(-50%)",
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: yRight }}>
              <motion.div
                animate={{ y: [20, -20, 20] }}
                transition={{
                  duration: 9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <Image
                  src={columnImg}
                  alt="Decorative column"
                  height={420}
                  style={{
                    width: "auto",
                    height: "clamp(260px, 45vh, 520px)",
                    opacity: 0.9,
                    objectFit: "contain",
                    transform: "scaleX(-1)",
                  }}
                  priority
                />
              </motion.div>
            </motion.div>
          </Box>

          {/* Main Content */}
          <Box
            ref={contentRef}
            sx={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* Date pill – appears first */}
            <Stack
              component={motion.div}
              direction="row"
              alignItems="center"
              justifyContent="center"
              px={2}
              py={0.5}
              spacing={0.75}
              initial={{ opacity: 0, y: 16 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: 0,
              }}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                borderRadius: 10,
                mb: 2,
              }}
            >
              <CalendarTodayOutlinedIcon
                sx={{ fontSize: 16, color: "#FFFFFF" }}
              />
              <Typography variant="body1">
                8–14 June 2026 · Naples, Italy
              </Typography>
            </Stack>

            {/* Title second */}
            <Typography
              component={motion.h1}
              className="animated-gradient-text"
              initial={{ opacity: 0, y: 20 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: 0.2,
              }}
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "2.25rem",
                  md: "3rem",
                  lg: "4rem",
                },
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                mb: 3,
                maxWidth: "56rem",
              }}
            >
              <span>Southern</span> <span>Italy’s</span>
              <br />
              <span>Gateway</span> <span>to</span> <span>the</span>{" "}
              <span>Future</span>
            </Typography>

            {/* Subtitle third (with buttons) */}
            <Typography
              component={motion.p}
              initial={{ opacity: 0, y: 18 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.45,
              }}
              sx={{
                maxWidth: "32rem",
                fontSize: { xs: "0.95rem", md: "1rem" },
                mb: 3,
                fontWeight: 400,
                lineHeight: 1.6,
                color: isDark ? "#FFFFFF" : "#1A1A1A",
              }}
            >
              A world-class summit uniting the pioneers of AI, Quantum
              Computing, and Web3.
            </Typography>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              animate={
                isContentInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.45,
              }}
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
              }}
            >
              <Link
                href="https://luma.com/i03cosbf?locale=en-GB"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewTicketsButton label="Get your tickets" />
              </Link>
              <Link
                href="https://docsend.com/v/sbjcj/ctrlshift2026"
                target="_blank"
                rel="noopener noreferrer"
              >
                <NewSponsorsButton label="Become a sponsor" />
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;
