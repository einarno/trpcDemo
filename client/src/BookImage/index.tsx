import { Box, Typography } from "@mui/material"

export type BookUrl = { status: "success", url: string } | { status: "couldNotFind" } | { status: "loading" } | { status: "error" }

export const BookImage = ({ url }: { url: BookUrl }) => {
    if (url.status === "success") {
        return (
            <Box
                component="img"
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
                alt="The book coveer"
                src={url.url}
            />
        )
    }
    if (url.status === "loading") {
        return (
            <Box
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
            >
                <Typography variant="h3">Loading...</Typography>
            </Box>
        )
    }
    if (url.status === "couldNotFind") {
        return (
            <Box
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
            >
                <Typography variant="h3">Could not find image</Typography>
            </Box>
        )
    }
    if (url.status === "error") {
        return (
            <Box
                sx={{
                    height: 233,
                    width: 350,
                    maxHeight: { xs: 233, md: 167 },
                    maxWidth: { xs: 350, md: 250 },
                }}
            >
                <Typography variant="h3">Error getting book image</Typography>
            </Box>
        )
    }
}
