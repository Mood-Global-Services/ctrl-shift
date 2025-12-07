"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion, useScroll, useTransform } from "motion/react";

import crestImg from "@/assets/images/relic.webp";
import starImg from "@/assets/images/star.webp";
import sunImg from "@/assets/images/sun.webp";
import columnImg from "@/assets/images/column.webp";

type HeroTheme = "light" | "dark";

export interface HeroProps {
  theme?: HeroTheme;
}

export function Hero({ theme = "light" }: HeroProps): ReactElement {
  const { scrollY } = useScroll();
  const isDark = theme === "dark";

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
        mb: 12,
        px: { xs: 1.5, md: 3 },
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "80vh",
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
              top: { xs: "2%", md: "3%" },
              zIndex: 0,
            }}
          >
            <motion.div style={{ y: yCrest }}>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src={crestImg}
                  alt="Decorative crest"
                  height={100}
                  style={{
                    width: "auto",
                    height: "100px",
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
              left: { xs: "5%", md: "20%" },
              top: { xs: "5%", md: "3%" },
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
                  height={120}
                  style={{
                    width: "auto",
                    height: "100px",
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
              right: { xs: "5%", md: "20%" },
              top: { xs: "5%", md: "4%" },
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
                  height={100}
                  style={{
                    width: "auto",
                    height: "80px",
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
              left: { xs: "-7rem", md: 0 }, // -left-28 md:left-0
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
                  height={350}
                  style={{
                    width: "auto",
                    height: "350px",
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
              right: { xs: "-7rem", md: 0 }, // -right-28 md:right-0
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
                  height={350}
                  style={{
                    width: "auto",
                    height: "350px",
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
            sx={{
              position: "relative",
              zIndex: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              component="h1"
              className="animated-gradient-text"
              sx={{
                fontWeight: 500,
                fontSize: {
                  xs: "2.25rem", // text-4xl
                  md: "3rem", // text-5xl
                  lg: "3.5rem", // 56px approx
                },
                letterSpacing: "-0.04em",
                lineHeight: 1.1,
                mb: 3,
                maxWidth: "56rem", // max-w-4xl
              }}
            >
              <span>Southern</span> <span>Italy’s</span>
              <br />
              <span>Gateway</span> <span>to</span> <span>the</span>{" "}
              <span>Future</span>
            </Typography>

            <Typography
              component="p"
              sx={{
                maxWidth: "32rem", // max-w-lg
                fontSize: { xs: "0.95rem", md: "1rem" },
                mb: 5,
                fontWeight: 400,
                lineHeight: 1.6,
                color: isDark ? "#FFFFFF" : "#1A1A1A",
              }}
            >
              <Box
                component="span"
                sx={{
                  display: "block",
                  mb: 1,
                  fontWeight: 600,
                }}
              >
                8–14 June 2026 · Naples, Italy
              </Box>
              A world-class summit uniting the pioneers of AI, Quantum
              Computing, and Web3.
            </Typography>

            {/* Buttons – keep your exact structure & classes */}
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {/* Get your tickets */}
              <div className="hero-btn-wrapper">
                <button className="hero-btn">
                  Get your tickets
                </button>
                <div className="hero-btn-border" aria-hidden="true" />
              </div>

              {/* Become a sponsor */}
              <div className="hero-btn-wrapper">
                <button className="hero-btn">
                  <div className="relative w-full h-full overflow-hidden rounded-md flex items-center justify-center">
                    {/* Ghost element for sizing */}

                    {/* Animated content */}
                    <span className="absolute inset-0 flex items-center justify-center">
                      <span className="relative mr-2 overflow-hidden whitespace-nowrap transition-all duration-300 ease-in-out group-hover:mr-0 group-hover:max-w-0 group-hover:opacity-0 font-medium text-[16px]">
                        Become a sponsor
                      </span>
                      <ArrowForwardIcon
                        sx={{ fontSize: 16 }}
                        className="relative h-4 w-4 transition-all duration-300 group-hover:animate-pulse-scale"
                      />
                    </span>
                  </div>
                </button>
                <div className="hero-btn-border" aria-hidden="true" />
              </div>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
