"use client";

import type { ReactElement } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import NewsLetterButton from "../ui/newsLetterButon";

function Newsletter(): ReactElement {
  return (
    <Box
      component="section"
      sx={{
        pt: 0,
        pb: 12,
        px: { xs: 2, md: 6 },
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
        {/* Title */}
        <Box sx={{ mb: 3, textAlign: "center" }}>
        <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.875rem", md: "2.25rem" },
              fontWeight: 500,
              color: "#FFFFFF",
              mb: 1.5,
            }}
          >
            Our{" "}
            <Box
              component="span"
              className="animated-gradient-text"
            >
              Newsletter
            </Box>
          </Typography>
        </Box>

        {/* Gradient card + decoration overlay */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1rem",
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2.5,
            // gradient background of the card
            backgroundColor: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.22)"
          }}
        >

          {/* Text block (above both gradient and decoration) */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "32rem",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontWeight: 500,
                fontSize: "1.5rem",
                color: "#FFFFFF",
              }}
            >
              Stay updated with our latest <span className="animated-gradient-text">news</span>
            </Typography>
            <Typography
              component="p"
              sx={{
                mt: 1,
                fontSize: "0.9rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.9)",
              }}
            >
              Join our community and never miss an update about our events and
              speakers.
            </Typography>
          </Box>

          {/* Form block (also above) */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              gap: 1.25,
              width: "100%",
              maxWidth: { xs: "100%", md: 260 },
            }}
          >
            <TextField
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              fullWidth
              InputProps={{
                sx: {
                  height: 48,
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  borderRadius: 2,
                  "& .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    border: "none",
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "#6B7280",
                    opacity: 1,
                  },
                  boxShadow: "0 0 0 0 transparent",
                  "&.Mui-focused": {
                    boxShadow: "0 0 0 2px #A42A2E",
                  },
                },
              }}
            />
            <NewsLetterButton label="Subscribe Now" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Newsletter;
