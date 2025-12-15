"use client";

import type { ReactElement } from "react";
import { useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link as MuiLink,
  type SxProps,
  type Theme,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import Image, { type StaticImageData } from "next/image";

import { SponsorsList } from "@/data/sponsors";
import { PartnersList } from "@/data/partners";
import { MediaPartnersList } from "@/data/mediaPartners";

type PartnerLogo = {
  name: string;
  logo: StaticImageData | string;
  href?: string;
  mobilePercentage?: string;
  percentage?: string;
};

type LogoMarqueeProps = {
  items: PartnerLogo[];
  speedSeconds: number;
  reverse?: boolean;
};

type PartnerCardProps = {
  title: string;
  description: string;
  rows: number; // used for secondary; primary will auto-calc
  items: PartnerLogo[];
  variant?: "primary" | "secondary";
  sx?: SxProps<Theme>;
};

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const scrollReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0); }
`;

function buildRows(items: PartnerLogo[], rowCount: number): PartnerLogo[][] {
  if (!items.length || rowCount <= 0) return [];
  const rows: PartnerLogo[][] = Array.from({ length: rowCount }, () => []);

  items.forEach((item, index) => {
    const rowIndex = index % rowCount;
    rows[rowIndex]!.push(item);
  });

  // If some rows ended up empty, fall back to at least 1 per row by repeating
  for (let i = 0; i < rows.length; i += 1) {
    if (rows[i]!.length === 0) {
      rows[i] = [...items];
    }
  }

  return rows;
}

function LogoMarquee({ items, speedSeconds, reverse }: LogoMarqueeProps) {
  const sequence = useMemo(() => [...items, ...items], [items]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        py: 0.75,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          width: "max-content",
          animation: `${reverse ? scrollReverse : scroll} ${speedSeconds}s linear infinite`,
        }}
      >
        {sequence.map((item, index) => {
          const key = `${item.name}-${index}`;
          const content = (
            <Box
              sx={{
                px: 2.25,
                py: 1.25,
                borderRadius: 9999,
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(15,23,42,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: 120,
                maxWidth: 180,
                mr: 2.25,
                boxShadow: "0 8px 18px rgba(15,23,42,0.18)",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 26,
                }}
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  fill
                  sizes="160px"
                  style={{
                    objectFit: "contain",
                    scale: item.percentage ? parseFloat(item.percentage) / 100 : 1,
                  }}
                />
              </Box>
            </Box>
          );

          return item.href ? (
            <MuiLink
              key={key}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              underline="none"
              sx={{
                display: "inline-flex",
              }}
            >
              {content}
            </MuiLink>
          ) : (
            <Box key={key}>{content}</Box>
          );
        })}
      </Box>
    </Box>
  );
}

function PartnerCard({
  title,
  description,
  rows,
  items,
  variant = "secondary",
  sx,
}: PartnerCardProps) {
  const isPrimary = variant === "primary";

  // For Sponsors (primary) we auto-calc how many rows we need
  const effectiveRows = useMemo(() => {
    if (!items.length) return 0;

    if (!isPrimary) {
      return rows;
    }

    // Sponsors: auto rows based on item count
    // - at least 4 rows so it visually fills
    // - at most 7 rows to avoid being too dense
    // - scale with number of items
    const auto = Math.ceil(items.length / 2);
    const minRows = 5;
    const maxRows = 10;
    return Math.min(maxRows, Math.max(minRows, auto));
  }, [items.length, isPrimary, rows]);

  const rowData = useMemo(
    () => buildRows(items, effectiveRows),
    [items, effectiveRows]
  );

  return (
    <Box
      sx={{
        position: "relative",
        borderRadius: "1.75rem",
        p: { xs: 0, md: 4 },
        height: "100%",
        overflow: "hidden",
        // same gradient as Tracks section
        backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
        border: isPrimary
          ? "1px solid rgba(255,255,255,0.22)"
          : "1px solid rgba(255,255,255,0.22)",
        boxShadow: isPrimary
          ? "0 22px 55px rgba(0,0,0,0.7)"
          : "0 18px 45px rgba(0,0,0,0.55)",
        display: "flex",
        flexDirection: "column",
        gap: 2.5,
        ...sx,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: "0.8rem",
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "rgba(252,210,33,0.96)",
            mb: 0.5,
            px: { xs: 3, md: 0 },
            pt: { xs: 3, md: 0 },
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "1.05rem",
            fontWeight: 500,
            color: "#F9FAFB",
            mb: 1,
            px: { xs: 3, md: 0 },
            pt: { xs: 3, md: 0 },
          }}
        >
          {isPrimary ? "Main ecosystem supporters" : description}
        </Typography>
      </Box>

      {/* Marquees container */}
      <Box
        sx={{
          mt: 1,
          flex: 1,
          borderRadius: "1.25rem",
          px: 0,
          py: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 0.75,
          overflow: "hidden",
          width: "100%",
        }}
      >
        {rowData.map((row, index) => (
          <LogoMarquee
            key={index}
            items={row}
            speedSeconds={24 + index * 4}
            reverse={index % 2 === 1}
          />
        ))}
      </Box>
    </Box>
  );
}

function PartnersSection(): ReactElement {
  const sponsorLogos: PartnerLogo[] = SponsorsList.filter(
    (sponsor) => sponsor.show
  ).map((sponsor) => ({
    name: sponsor.name,
    logo: sponsor.logo,
    href: sponsor.link,
    mobilePercentage: sponsor.mobilePercentage,
    percentage: sponsor.percentage,
  }));

  const partnerLogos: PartnerLogo[] = PartnersList.map((partner) => ({
    name: partner.name,
    logo: partner.logo,
    href: partner.link,
    mobilePercentage: partner.mobilePercentage,
    percentage: partner.percentage,
  }));

  const mediaLogos: PartnerLogo[] = MediaPartnersList.map((mediaPartner) => ({
    name: mediaPartner.name,
    logo: mediaPartner.logo,
    href: mediaPartner.link,
    mobilePercentage: mediaPartner.mobilePercentage,
    percentage: mediaPartner.percentage,
  }));

  // For non-primary we still control rows manually
  const partnerRows = 3;
  const mediaRows = 3;

  return (
    <Box
      component="section"
      sx={{
        pb: {xs: 8, md: 12},
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
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: 6,
          }}
        >
          Partners &amp; Ecosystem
        </Typography>

        <Grid container spacing={3} alignItems="stretch">
          {/* Left: tall Sponsors card */}
          <Grid size={{ xs: 12, md: 6 }}>
            <PartnerCard
              title="Sponsors"
              description="Forward-thinking teams, DAOs, and institutions making ctrl/shift possible."
              rows={4} // base hint; primary will auto-expand from this
              items={sponsorLogos}
              variant="primary"
              sx={{
                minHeight: { xs: 360, md: 420 },
              }}
            />
          </Grid>

          {/* Right: top + bottom square-ish cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 3,
                height: "100%",
              }}
            >
              <PartnerCard
                title="Partners"
                description="Curators, collaborators, and builders amplifying the experience."
                rows={partnerRows}
                items={partnerLogos}
                variant="secondary"
                sx={{
                  flex: 1,
                  minHeight: { xs: 220, md: 200 },
                }}
              />

              <PartnerCard
                title="Media Partners"
                description="Storytellers and platforms sharing ctrl/shift with the world."
                rows={mediaRows}
                items={mediaLogos}
                variant="secondary"
                sx={{
                  flex: 1,
                  minHeight: { xs: 220, md: 200 },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default PartnersSection;
