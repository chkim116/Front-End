import React, { useEffect, useState } from "react";
import PartiPresenter from "./PartiPresenter";
import Axios from "axios";

const PartiContainer = () => {
    const [myBoard, setMyBoard] = useState();

    useEffect(() => {
        const get = async () => {
            try {
                await Axios.get("/mypage/participate").then((res) => {
                    setMyBoard(res.data);
                });
            } catch (err) {
                console.log(err);
            }
        };
        get();
    }, []);

    return <PartiPresenter myBoard={myBoard}></PartiPresenter>;
};

export default PartiContainer;
