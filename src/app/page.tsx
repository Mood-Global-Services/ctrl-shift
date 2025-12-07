// src/app/page.tsx
import type { ReactElement } from "react";
import Image from "next/image";
import { Box } from "@mui/material";

import Hero from "@/components/home/hero";
import About from "@/components/home/about";
import Stats from "@/components/home/stats";
import LastYearCardGrid from "@/components/home/lastYearCardGrid";

import patternImg from "@/assets/images/layer.webp";

export default function Page(): ReactElement {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        maxWidth: "100vw",
        overflowX: "hidden",
        position: "relative",
        color: "#FFFFFF", // default text color similar to [&_h1]:text-white etc.
      }}
    >
      {/* Background layer (fixed) */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          maxWidth: "100vw",
          overflow: "hidden",
          zIndex: -10,
        }}
      >
        {/* Gradient base */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            maxWidth: "100vw",
            height: { xs: "100dvh", md: "100vh" },
            overflowX: "hidden",
            background:
              "linear-gradient(to bottom, #170300 0%, #841403 100%)",
          }}
        />

        {/* Pattern overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            opacity: 0.2,
          }}
        >
          <Image
            src={patternImg}
            alt="Background pattern"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Blur + mask gradient */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backdropFilter: "blur(6px)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black)",
            maskImage:
              "linear-gradient(to bottom, transparent, black)",
          }}
        />
      </Box>

      {/* Main content */}
      <Box component="main">
        <Hero theme="dark" />
        <About />
        <Stats />
        <LastYearCardGrid />
      </Box>
    </Box>
  );
}
