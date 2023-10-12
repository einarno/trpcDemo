import { Stack, Typography } from "@mui/material"

type Book = {
    id: string
    title: string
}

type Props = {
    books: Book[]
}

export const BookList = () => {
    return (
        <Stack>
            <Typography variant="h1">Book List</Typography>
            <Typography variant="body1">Currently no books</Typography>
        </Stack>
    )
}
