/* const bookUrl = trpc.getBooksUrl.useQuery(book.id)
const url: BookUrl = useMemo(() => {
    if (bookUrl.isError) {
        return { status: "error" }
    }
    if (bookUrl.isLoading) {
        return { status: "loading" }
    }
    return bookUrl.data.url
}, [bookUrl]) */
