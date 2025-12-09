"use client";

import type { ReactElement } from "react";
import { useRef } from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "motion/react";

import quantumImg from "@/assets/images/lastVersion/stats/quantum.webp";
import web3Img from "@/assets/images/lastVersion/stats/web3.webp";
import networkingImg from "@/assets/images/lastVersion/stats/networking.webp";
import aiImg from "@/assets/images/lastVersion/stats/ai.webp";
import lawImg from "@/assets/images/lastVersion/stats/law.webp";
import artImg from "@/assets/images/lastVersion/stats/art.webp";
import foodImg from "@/assets/images/lastVersion/stats/food.webp";
import institutionsImg from "@/assets/images/lastVersion/stats/coppo.webp";

const cards = [
  { tag: "Quantum Computing", image: quantumImg },
  { tag: "AI", image: aiImg },
  { tag: "Web3", image: web3Img },
  { tag: "Law", image: lawImg },
  { tag: "Institutions", image: institutionsImg },
  { tag: "Art", image: artImg },
  { tag: "Networking Opportunities", image: networkingImg },
  { tag: "Amazing Food", image: foodImg },
];

function LastYearCardGrid(): ReactElement {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(sectionRef, {
    amount: 0.15,      // was 0.25 – trigger a bit earlier
    once: true,
  });

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        pb: 12,
        px: { xs: 2, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem",
          mx: "auto",
        }}
      >
        <Grid container spacing={3}>
          {cards.map((card, index) => {
            // faster stagger
            const rowIndex = Math.floor(index / 2);
            const baseDelay = rowIndex * 0.12; // was 0.25
            const colOffset = (index % 2) * 0.03; // was 0.06
            const delay = baseDelay + colOffset;

            return (
              <Grid key={card.tag} size={{ xs: 12, md: 6 }}>
                <Box
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 20 }
                  }
                  transition={{
                    duration: 0.4,     // was 0.55
                    ease: "easeOut",
                    delay,
                  }}
                  sx={{
                    position: "relative",
                    borderRadius: "1.5rem",
                    overflow: "hidden",
                    height: 320,
                    cursor: "pointer",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                    "&:hover .card-image": {
                      transform: "scale(1.10)",
                    },
                    "&:hover .card-overlay": {
                      backgroundColor: "rgba(0,0,0,0.20)",
                    },
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Image layer */}
                  <Box
                    className="card-image"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      transition: "transform 0.7s ease",
                      transformOrigin: "center center",
                    }}
                  >
                    <Image
                      src={card.image}
                      alt={card.tag}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 768px) 50vw, 100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>

                  {/* Overlay layer */}
                  <Box
                    className="card-overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      backgroundColor: "rgba(0,0,0,0.10)",
                      transition: "background-color 0.3s ease",
                      pointerEvents: "none",
                      zIndex: 1,
                    }}
                  />

                  {/* Tag pill */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 24,
                      left: 24,
                      zIndex: 2,
                    }}
                  >
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        border: "1px solid rgba(255,255,255,0.10)",
                        backgroundSize: "cover",
                        backgroundPosition: "center center",
                        backgroundRepeat: "repeat",
                        backgroundImage:
                          "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23E59804%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22M299-225-406 780l353 185 851-848%22 fill=%22%23AC6F16%22%2F%3E%3Cpath d=%22M1191-144 126 639l744 429 429-799%22 fill=%22%23E59804%22%2F%3E%3Cpath d=%22m1421 392-629 63 1307 1244 67-957%22 fill=%22%23E59804%22%2F%3E%3Cpath d=%22m-454 144-54 1372 1064 31 480-165%22 fill=%22%23DCB821%22%2F%3E%3Cpath d=%22m1300 941-991 381 1197 928 265-1274%22 fill=%22%23DCB821%22%2F%3E%3Cpath d=%22m1243 695-395 543 1428 961 81-1285%22 fill=%22%23E59804%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-182%22 y=%22-182%22 width=%222364%22 height=%221364%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22182%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
                        color: "#181818",
                        px: 2,
                        py: 1,
                        borderRadius: 999,
                        fontSize: "0.875rem",
                        fontWeight: 500,
                        boxShadow:
                          "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 18px 45px rgba(0,0,0,0.55)",
                        transition:
                          "background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
                        overflow: "hidden",
                        "&:hover": {
                          backgroundColor: "#0A0508",
                          borderColor: "rgba(255,255,255,0.20)",
                          transform: "scale(1.02)",
                          color: "#FFFFFF",
                        },
                      }}
                    >
                      {card.tag}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

export default LastYearCardGrid;
