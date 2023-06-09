import React from 'react'
import AddBookmarkButton from '../Buttons/AddBookmarkButton'
import BookmarkItem from './BookmarkItem';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export default function BookmarkMenu({ showBookmarksMenu, handleOpenWebsite, handleOpenNewTabFromBookmark }) {
    const bookmarks = useSelector(state => state.bookmarksReducer);

    useEffect(() => {
        console.log(bookmarks);
    }, [bookmarks])
    return (
        <div className='bookmarksMenu' style={{ display: showBookmarksMenu ? "flex" : "none" }}>
            <AddBookmarkButton />
            {
                bookmarks.map((bookmark, index) => {
                    return (<BookmarkItem key={index} book={bookmark} handleOpenWebsite={handleOpenWebsite} handleOpenNewTabFromBookmark={handleOpenNewTabFromBookmark} />)
                })
            }
        </div>
    )
}
