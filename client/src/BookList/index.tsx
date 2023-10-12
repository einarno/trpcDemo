import { Button, Card, CardContent, Grid, Paper, Stack, Typography } from "@mui/material"
import { useState } from "react"
import { BookPicker } from "../BookPicker"
import { BookImage } from "../BookImage"
import { BookComponent } from "../Book"

export type Book = {
    id: string
    title: string
    description: string
    author: string
}

export const BookList = () => {
    const [open, setOpen] = useState(false)
    const [books, setBooks] = useState<Book[]>([])
    const setBook = (book: Book) => {
        setBooks((prev) => [...new Set([...prev, book])])
    }
    return (
        <Paper sx={{ backgroundColor: "Background" }}>
            <Grid container minHeight="100vh">
                <Stack gap={1}>
                    <Stack direction="row" gap={5}>
                        <Typography variant="h1">Book List</Typography>
                        <Button onClick={() => setOpen(true)} variant="outlined">Add Book</Button>
                        <BookPicker isOpen={open} onClose={() => setOpen(false)} setBook={setBook} />
                    </Stack>
                    {books.length === 0 ? <Typography variant="body1">Currently no books</Typography>
                        : <Stack gap={1}>
                            {
                                books.map((book) => (
                                    <Card sx={{ backgroundColor: "Highlight" }}>
                                        <CardContent>
                                            <BookComponent book={book} />
                                        </CardContent>
                                    </Card>
                                ))
                            }
                        </Stack>
                    }
                </Stack>
            </Grid>
        </Paper>
    )
}
