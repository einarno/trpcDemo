import { Avatar, Dialog, DialogContent, DialogTitle, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material"
import { Book } from "../BookList"
import { trpc } from "../utils/trpc"

type Props = {
    isOpen: boolean
    onClose: () => void
    setBook: (book: Book) => void
}

export const BookPicker: React.FC<Props> = ({ isOpen, onClose, setBook }) => {
    // const books = trpc.getBooks.useQuery()
    const books: any = []
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <DialogTitle>Pick a book</DialogTitle>
            <DialogContent>
                <List>
                    {books.data?.map((book: Book) => (
                        <ListItem
                            key={book.id}
                            onClick={() => {
                                setBook(book)
                                onClose()
                            }}
                        >
                            <ListItemText primary={book.title} secondary={book.description} />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    )
}
