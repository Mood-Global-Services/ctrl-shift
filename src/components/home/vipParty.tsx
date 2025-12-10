"use client";

import type { ReactElement } from "react";
import { useRef, useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
    Link,
} from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView } from "motion/react";
import NewTicketsButton from "@/components/ui/newTicketsButton";

// Use your real images here
import vipImg1 from "@/assets/images/vipParty/1.webp";
import vipImg2 from "@/assets/images/vipParty/2.webp";

const VIP_IMAGES: StaticImageData[] = [vipImg1, vipImg2];

function VIPParty(): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);

    const [videoOpen, setVideoOpen] = useState(false);

    const handleOpenLightbox = (img: StaticImageData) => {
        setActiveImage(img);
        setLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
        setTimeout(() => setActiveImage(null), 150);
    };

    const handleOpenVideo = () => {
        setVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setVideoOpen(false);
    };

    return (
        <>
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
                    {/* SECTION TITLE – centered above everything */}
                    <Box sx={{ mb: 6, textAlign: "center" }}>
                        <Typography
                            component="h2"
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: "1.9rem", md: "2.25rem" },
                                letterSpacing: "-0.03em",
                                lineHeight: 1.15,
                                color: "#FFFFFF",
                            }}
                        >
                            <span className="animated-gradient-text">VIP Party</span>
                        </Typography>
                    </Box>

                    <Grid
                        container
                        spacing={{ xs: 4, md: 6 }}
                        alignItems="stretch" // make both columns same height
                    >
                        {/* LEFT COLUMN – text + IMAGES + button */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={
                                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                                }
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                style={{ height: "100%" }}
                            >
                                <Stack
                                    spacing={3}
                                    alignItems="flex-start"
                                    sx={{ height: "100%" }}
                                >
                                    <Stack
                                        direction="row"
                                        spacing={1.5}
                                        sx={{
                                            mt: 1,
                                            width: "100%",
                                            justifyContent: "flex-start",
                                            flexWrap: "wrap",
                                        }}
                                    >
                                        {VIP_IMAGES.map((img, index) => (
                                            <Box
                                                key={index}
                                                sx={{
                                                    position: "relative",
                                                    width: "45%",
                                                    borderRadius: 2,
                                                    overflow: "hidden",
                                                    cursor: "pointer",
                                                    aspectRatio: "4/3",
                                                    boxShadow: "0 14px 34px rgba(0,0,0,0.55)",
                                                    "&:hover img": {
                                                        transform: "scale(1.05)",
                                                    },
                                                }}
                                                onClick={() => handleOpenLightbox(img)}
                                            >
                                                <Image
                                                    src={img}
                                                    alt={`VIP Party ${index + 1}`}
                                                    fill
                                                    sizes="(max-width: 900px) 33vw, 200px"
                                                    style={{
                                                        objectFit: "cover",
                                                        transition: "transform 0.5s ease",
                                                    }}
                                                />
                                            </Box>
                                        ))}
                                    </Stack>
                                    {/* Paragraph */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "rgba(249,250,251,0.9)",
                                            fontSize: "0.98rem",
                                            maxWidth: "32rem",
                                            textAlign: "left",
                                        }}
                                    >
                                        An intimate evening for builders, partners, and friends of
                                        ctrl/shift. Expect a mix of deep conversations, live music,
                                        and unexpected moments – all with Naples as the backdrop.
                                        Limited capacity, curated guest list.
                                    </Typography>

                                    {/* IMAGE STRIP – this is the part you weren’t seeing */}


                                    {/* Button */}
                                    <Box mt={-2}>
                                        <Link
                                            href="https://luma.com/hfs5ijms"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                width: { xs: "70%", md: "auto" },
                                                borderRadius: 999,
                                            }}
                                        >
                                            <NewTicketsButton label="Get your tickets" />
                                        </Link>
                                    </Box>
                                </Stack>
                            </motion.div>
                        </Grid>

                        {/* RIGHT COLUMN – clickable frame that opens video viewer */}
                        <Grid size={{ xs: 12, md: 6 }}>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                animate={
                                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }
                                }
                                transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
                                style={{ height: "100%" }}
                            >
                                <Box
                                    onClick={handleOpenVideo}
                                    sx={{
                                        height: "100%",
                                        borderRadius: "1.5rem",
                                        overflow: "hidden",
                                        boxShadow: "0 18px 45px rgba(0,0,0,0.55)",
                                        border: "1px solid rgba(255,255,255,0.14)",
                                        backgroundColor: "#000000",
                                        cursor: "pointer",
                                        position: "relative",
                                    }}
                                >
                                    {/* Poster image */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                        }}
                                    >
                                        <Image
                                            src={vipImg1}
                                            alt="VIP Aftermovie"
                                            fill
                                            sizes="(max-width: 900px) 100vw, 50vw"
                                            style={{ objectFit: "cover" }}
                                        />
                                    </Box>

                                    {/* Dark overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "radial-gradient(circle at center, rgba(0,0,0,0.1), rgba(0,0,0,0.65))",
                                        }}
                                    />

                                    {/* Play button overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 72,
                                                height: 72,
                                                borderRadius: "999px",
                                                background:
                                                    "radial-gradient(circle at 30% 30%, #FCD221, #B07510)",
                                                boxShadow: "0 14px 30px rgba(0,0,0,0.7)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                            }}
                                        >
                                            <Box
                                                component="span"
                                                sx={{
                                                    display: "inline-block",
                                                    marginLeft: "4px",
                                                    width: 0,
                                                    height: 0,
                                                    borderTop: "10px solid transparent",
                                                    borderBottom: "10px solid transparent",
                                                    borderLeft: "16px solid #1F0900",
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* IMAGE LIGHTBOX */}
            <ImageLightbox
                open={lightboxOpen}
                image={activeImage}
                onClose={handleCloseLightbox}
            />

            {/* VIDEO LIGHTBOX */}
            <VideoLightbox open={videoOpen} onClose={handleCloseVideo} />
        </>
    );
}

type ImageLightboxProps = {
    open: boolean;
    image: StaticImageData | null;
    onClose: () => void;
};

function ImageLightbox({
    open,
    image,
    onClose,
}: ImageLightboxProps): ReactElement | null {
    if (!open || !image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "relative",
                    maxWidth: "60vw",
                    maxHeight: "60vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={image}
                    alt="VIP Party"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 16,
                    }}
                />
                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 6,
                        right: 3,
                        minWidth: "auto",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        bgcolor: "rgba(0,0,0,0.6)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        "&:hover": {
                            bgcolor: "rgba(0,0,0,0.8)",
                        },
                    }}
                >
                    Close
                </Button>
            </motion.div>
        </motion.div>
    );
}

type VideoLightboxProps = {
    open: boolean;
    onClose: () => void;
};

function VideoLightbox({
    open,
    onClose,
}: VideoLightboxProps): ReactElement | null {
    if (!open) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                backgroundColor: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "relative",
                    maxWidth: "960px",
                    width: "90vw",
                    aspectRatio: "16 / 9",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    controls
                    autoPlay
                    preload="metadata"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 16,
                        objectFit: "cover",
                        backgroundColor: "#000",
                    }}
                >
                    {/* Replace with your real file in /public */}
                    <source src="/aftermovie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        minWidth: "auto",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        "&:hover": {
                            bgcolor: "rgba(0,0,0,0.9)",
                        },
                    }}
                >
                    Close
                </Button>
            </motion.div>
        </motion.div>
    );
}

export default VIPParty;
