// src/components/AboutMenu.tsx
import type { ReactElement } from "react";
import { Box, Stack, Typography } from "@mui/material";
import bgPattern from "@/assets/images/decorationImage.webp";

interface AboutMenuItem {
  title: string;
  subtitle: string;
  badge?: string;
}

const menuItems: AboutMenuItem[] = [
  {
    title: "Speakers",
    subtitle: "Find the speakers of ctrl/shift 2026",
    badge: "Coming soon",
  },
  {
    title: "Team",
    subtitle: "Meet the team behind ctrl/shift 2026",
  },
  {
    title: "Event Location",
    subtitle: "Find the location of our event",
  },
  {
    title: "Archive 2025",
    subtitle: "Previous edition of NapulETH",
  },
  {
    title: "Archive 2024",
    subtitle: "First edition of NapulETH",
  },
];

export function AboutMenu(): ReactElement {
  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        borderRadius: 3,
        p: 2,
        background:
          "linear-gradient(to bottom, #942629 0%, #1a0707 100%)",
        boxShadow: "0 25px 50px -12px rgba(0,0,0,0.6)", // shadow-2xl-ish
        overflow: "hidden",
        border: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <Stack direction="row" spacing={2}>
        {/* Left Column: Navigation Items */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            py: 1,
            pl: 1.5,
          }}
        >
          {menuItems.map((item) => (
            <Box
              key={item.title}
              sx={{
                cursor: "pointer",
                "&:hover .AboutMenu-title": {
                  color: "rgba(255,255,255,0.9)",
                },
                "&:hover .AboutMenu-subtitle": {
                  color: "rgba(255,255,255,0.8)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 0.5,
                }}
              >
                <Typography
                  variant="subtitle1"
                  className="AboutMenu-title"
                  sx={{
                    fontSize: "1rem",
                    fontWeight: 500,
                    lineHeight: 1.1,
                    color: "#FFFFFF",
                  }}
                >
                  {item.title}
                </Typography>
                {item.badge && (
                  <Box
                    component="span"
                    sx={{
                      px: 1,
                      py: 0.25,
                      borderRadius: 999,
                      fontSize: "0.625rem",
                      fontWeight: 300,
                      color: "#FFFFFF",
                      backgroundColor: "rgba(255,255,255,0.2)",
                      whiteSpace: "nowrap",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    {item.badge}
                  </Box>
                )}
              </Box>
              <Typography
                variant="body2"
                className="AboutMenu-subtitle"
                sx={{
                  fontSize: "0.875rem",
                  lineHeight: 1.3,
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {item.subtitle}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Right Column: Image */}
        <Box
          sx={{
            width: 200,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              minHeight: 160,
              borderRadius: 2,
              overflow: "hidden",
              backgroundColor: "#E59804",
            }}
          >
            <Box
              component="img"
              src={bgPattern.src}
              alt="Decorative pattern"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                mixBlendMode: "multiply",
                display: "block",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 100%)",
              }}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
