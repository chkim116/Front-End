import React, { useState, useEffect } from "react";
import BookMarkPresenter from "./BookMarkPresenter";
import Axios from "axios";

const BookMarkContainer = () => {
    const [myBookmark, setMyBookmark] = useState();

    useEffect(() => {
        const getBookmark = async () => {
            try {
                await Axios.get("/mypage/bookmark").then((res) => {
                    setMyBookmark(res.data);
                });
            } catch (err) {
                console.log(err);
            }
        };
        getBookmark();
    }, []);

    return <BookMarkPresenter myBookmark={myBookmark} />;
};

export default BookMarkContainer;
