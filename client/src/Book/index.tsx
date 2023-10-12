import { Stack, Typography } from "@mui/material"
import { BookImage, BookUrl } from "../BookImage"
import { Book } from "../BookList"
import { trpc } from "../utils/trpc"
import { useMemo } from "react"

type Props = {
    book: Book
}

export const BookComponent: React.FC<Props> = ({ book }) => {
    return (
        <Stack direction="row">
            <Stack direction="row" gap={2}>
                {/* <BookImage url={url} /> */}
                <Stack>
                    <Typography variant="h3">{book.title}</Typography>
                    <Typography variant="body1">{book.description}</Typography>
                    <Typography variant="body2">{book.author}</Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}
