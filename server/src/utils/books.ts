export const getBooks = () => {
    return [
        {
            id: '1',
            title: 'The Great Gatsby',
            author: "F. Scott Fitzgerald",
            description: 'The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway\'s interactions with mysterious millionaire Jay Gatsby and Gatsby\'s obsession to reunite with his former lover, Daisy Buchanan.',
        },
        {
            id: '2',
            title: 'The Grapes of Wrath',
            author: "John Steinbeck",
            description: 'The Grapes of Wrath is an American realist novel written by John Steinbeck and published in 1939. The book won the National Book Award and Pulitzer Prize for fiction, and it was cited prominently when Steinbeck was awarded the Nobel Prize in 1962.',
        },
        {
            id: '3',
            title: 'Shouts of Nothingness',
            author: "Tsai Chih Chung",
            description: 'Inspired by the earliest and core texts of Zen Buddhism, Zen Speaks distills the philosophy and wisdom of Zen in a series of illustrated Chinese character cartoon panels that are irreverently humorous and profoundly wise.',
        },

    ]
}
export type BookUrl = { status: "success", url: string } | { status: "couldNotFind" } | { status: "loading" } | { status: "error" }

export const getBookUrl = (id: string): BookUrl => {
    if (id === '3') {
        return { status: "success", url: "https://ia600607.us.archive.org/view_archive.php?archive=/22/items/olcovers24/olcovers24-L.zip&file=240727-L.jpg" }
    }
    if (id === '2') {
        return { status: "error" }
    }
    return { status: "couldNotFind" };
}
