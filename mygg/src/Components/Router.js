import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import Footer from "Components/Layouts/Footer";
import Home from "Routes/Home";
import Mypage from "Routes/Mypage";
import Necessity from "Routes/Category/Necessity";
import Food from "Routes/Category/Food";
import Cloth from "Routes/Category/Cloth";
import Goods from "Routes/Category/Goods";
import Beauty from "Routes/Category/Beauty";
import Etc from "Routes/Category/Etc";
import BoardWrite from "Routes/BoardWrite";
import BoardDetail from "Routes/BoardDetail";
import BoardEdit from "Routes/BoardEdit";
import BookMark from "Routes/BookMark";
import Participate from "Routes/Participate";
import MypageEdit from "Routes/MypageEdit";
import Search from "Routes/Search";

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Header />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/mypage" exact component={Mypage} />
                    <Route path="/mypage/edit" exact component={MypageEdit} />
                    <Route path="/necessity" exact component={Necessity} />
                    <Route path="/food" exact component={Food} />
                    <Route path="/cloth" exact component={Cloth} />
                    <Route path="/goods" exact component={Goods} />
                    <Route path="/beauty" exact component={Beauty} />
                    <Route path="/etc" exact component={Etc} />
                    <Route path="/write" exact component={BoardWrite} />
                    <Route path="/detail/:id" exact component={BoardDetail} />
                    <Route path="/edit/:id" exact component={BoardEdit} />
                    <Route path="/participate" exact component={Participate} />
                    <Route path="/bookmark" exact component={BookMark} />
                    <Route path="/searchpost" exact component={Search} />
                    <Redirect from="*" to="/" />
                </Switch>
                <Footer />
            </>
        </BrowserRouter>
    );
};

export default Router;
