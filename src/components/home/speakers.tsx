"use client";

import type { ReactElement } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

import decorationImg from "@/assets/images/decorationImage.webp";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "David Cole",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1642610225765-a1cd62b7b565?w=600&q=80",
  },
  {
    name: "Jane Cooper",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=600&q=80",
  },
  {
    name: "Paul Kim",
    role: "Product Design",
    image:
      "https://images.unsplash.com/photo-1750187655549-b5009f762677?w=600&q=80",
  },
  {
    name: "Emma Banks",
    role: "Operations",
    image:
      "https://images.unsplash.com/photo-1622825312265-5d5caaed05b4?w=600&q=80",
  },
];

function Speakers(): ReactElement {
  return (
    <Box
      component="section"
      sx={{
        pt: 0,
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
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#DCB821",
              mb: 2,
            }}
          >
            SPEAKERS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 500,
              color: "#FFFFFF",
              mb: 1.5,
            }}
          >
            Voices from{" "}
            <Box
              component="span"
              className="animated-gradient-text"
            >
              around
            </Box>{" "}
            the world
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: "1.125rem",
              color: "#D1D5DB",
              maxWidth: "32rem",
            }}
          >
            Faces, stories, and ideas that make our event unforgettable ddd
          </Typography>
        </Box>

        {/* Team grid */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {team.map((member) => (
            <Grid key={member.name} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  cursor: "pointer",
                  "&:hover .team-image": {
                    transform: {xs: "scale(1)", md: "scale(1.05)"},
                  },
                }}
              >
                <Box
                  className="team-image"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    transition: "transform 0.5s ease",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{
                      objectFit: "cover",
                      filter: "blur(12px)",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Speakers;
