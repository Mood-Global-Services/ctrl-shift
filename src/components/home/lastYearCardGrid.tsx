"use client";

import type { ReactElement } from "react";
import { Box, Container, Grid } from "@mui/material";
import Image from "next/image";

import quantumImg from "@/assets/images/lastVersion/stats/quantum.webp";
import web3Img from "@/assets/images/lastVersion/stats/web3.webp";
import networkingImg from "@/assets/images/lastVersion/stats/networking.webp";
import aiImg from "@/assets/images/lastVersion/stats/ai.webp";
import lawImg from "@/assets/images/lastVersion/stats/law.webp";
import artImg from "@/assets/images/lastVersion/stats/art.webp";
import foodImg from "@/assets/images/lastVersion/stats/food.webp";
import institutionsImg from "@/assets/images/lastVersion/stats/institutions.webp";

const cards = [
  {
    tag: "Quantum Computing",
    image: quantumImg,
  },
  {
    tag: "AI",
    image: aiImg,
  },
  {
    tag: "Web3",
    image: web3Img,
  },
  {
    tag: "Law",
    image: lawImg,
  },
  {
    tag: "Institutions",
    image: institutionsImg,
  },
  {
    tag: "Art",
    image: artImg,
  },
  {
    tag: "Networking Opportunities",
    image: networkingImg,
  },
  {
    tag: "Amazing Food",
    image: foodImg,
  },
];

function LastYearCardGrid(): ReactElement {
  return (
    <Box
      component="section"
      sx={{
        pb: 12, // ~ 6rem (Tailwind pb-24)
        px: { xs: 4, md: 6 }, // ~ px-4 md:px-6
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem", // ~ max-w-5xl
          mx: "auto",
        }}
      >
        <Grid
          container
          spacing={3} // ~ gap-6
        >
          {cards.map((card) => (
            <Grid key={card.tag} size={{ xs: 12, md: 6 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "1.5rem", // rounded-3xl
                  overflow: "hidden",
                  height: 320,
                  cursor: "pointer",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
                  // group + hover effects
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
                    className="w-full h-full object-cover"
                    fill
                    priority
                    sizes="100vw"
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
                      backgroundColor: "#942629",
                      color: "#FFFFFF",
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      fontSize: "0.875rem",
                      fontWeight: 500,
                    }}
                  >
                    {card.tag}
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default LastYearCardGrid;
