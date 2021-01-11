import React, { useCallback, useState } from "react";
import styled from "styled-components";
import AuthContainer from "Routes/Common";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { signOutRequest, alertClose } from "modules/sign";
import { searchRequest, signFormShowing } from "modules/header";
import { useInput } from "hooks";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
    return <MuiAlert elevation={7} variant="filled" {...props} />;
}

const Container = styled.div`
    position: fixed;
    background: ${(props) => props.theme.white};
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 500;
`;

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 60px;
<<<<<<< HEAD
    max-width: 1060px;
    z-index: 100;
    padding: 12px;
`;

const Logo = styled.div`
    width: 100%;
    display: flex;

    font-size: ${(props) => props.theme.xls};
    font-weight: bold;
    cursor: pointer;
    flex: 1;
    a {
        color: ${(props) => props.theme.black};
        text-decoration: none;
    }
=======
    max-width: 1024px;
    z-index: 100;
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
>>>>>>> 63e539c... header design
`;

const SearchBar = styled.form`
    display: flex;
    align-items: center;
<<<<<<< HEAD
    background: ${(props) => props.theme.lightenBlack};
    justify-content: space-between;
    border-radius: 12px;
    padding: 0 4px;
    flex: 1;
=======
    background: #f5f8fa;
    border-radius: 12px;
    padding: 0 4px;
>>>>>>> 63e539c... header design
    input {
        all: unset;
        padding: 6px;
        width: 240px;
<<<<<<< HEAD
        text-align: center;
        flex: 1;
        &:focus {
            text-align: left;
        }
    }
    button {
        all: unset;
        cursor: pointer;
    }

    button[type="reset"] {
        all: unset;
        cursor: pointer;
        font-size: ${(props) => props.theme.ms};
        display: ${(props) => (props.showReset ? "block" : "none")};

        &:hover {
            color: ${(props) => props.theme.lightenBlack};
        }
=======
>>>>>>> 63e539c... header design
    }
`;

const Sign = styled.div`
    flex: 1;

    & > div {
        cursor: pointer;
        width: fit-content;
        margin: 0;
        margin-left: auto;
    }
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
`;

const UserProfile = styled.div`
    border: 1px solid ${(props) => props.theme.lightenBlack};
    border-radius: 50%;
    width: 30px;
    margin-right: 50px;
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
    position: relative;

    &:hover ul {
        position: absolute;
        right: -50px;
        height: auto;
        transition: height 300ms;
        background: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.lightenBlack};
    }
`;

const UserProfileMenu = styled.ul`
    position: absolute;
    top: 30px;
    right: 0px;
    width: 120px;
    height: 0px;
    overflow: hidden;
    & > li {
        cursor: pointer;
        padding: 6px;

        &:hover {
            background: ${(props) => props.theme.blue};
            color: ${(props) => props.theme.white};

            a {
                color: ${(props) => props.theme.white};
            }
        }
    }
`;

const Mypage = styled(Link)`
    cursor: pointer;

    &:hover {
        background: ${(props) => props.theme.blue};
        color: ${(props) => props.theme.white};
    }
`;
///////////////////////////////////////////////////////////////////////////////
const Header = () => {
    const dispatch = useDispatch();

    // signin/signup modal on & off
    const { isSign } = useSelector((state) => state.header);
    // 알림창 상태 관리
    const Noti = useSelector((state) => state.sign.Noti);
    // 알림창 열림 여부 판단.

    /// 로그인 알람창
    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        dispatch(alertClose());
    };

    // 모달창 제어
    const onSignModal = useCallback(() => {
        dispatch(signFormShowing());
    }, [dispatch]);

    // search text & text reset
    const history = useHistory();
    const [text, setText, onChange] = useInput("");
    const [searchFail, setSearchFail] = useState(false);

    const onReset = useCallback(() => {
        setText("");
    }, [text]);

    const onSearch = useCallback(
        (e) => {
            e.preventDefault();
            if (!text) {
                setSearchFail(true);
                setTimeout(() => {
                    setSearchFail(false);
                }, 1000);
                return;
            }
            dispatch(searchRequest(text));
            setText("");
            history.push(`/searchpost?search=${text}`);
        },
        [text, dispatch, searchFail]
    );

    // check user
    const user = useSelector((state) => state.sign.isLogin);

    const onLogOut = useCallback(() => {
        dispatch(signOutRequest());
    }, [dispatch]);

    return (
        <>
            <Container>
<<<<<<< HEAD
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={Noti.alertOpen}
                    autoHideDuration={2000}
                    onClose={handleClose}
                >
                    <div>
                        {Noti.LoginDone && (
                            <Alert severity="success">로그인 성공</Alert>
                        )}
                        {Noti.isLogOut && (
                            <Alert severity="info">로그아웃 됨!</Alert>
                        )}
                        {Noti.isFail && (
                            <Alert severity="error">로그인 실패</Alert>
                        )}
                        {Noti.SignUpDone && (
                            <Alert severity="success">회원가입 성공</Alert>
                        )}
                        {Noti.SignUpFail && (
                            <Alert severity="error">회원가입 실패</Alert>
                        )}
                    </div>
                </Snackbar>
                <Snackbar
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                    }}
                    open={searchFail}
                >
                    {searchFail && (
                        <Alert severity="info">검색어를 입력해 주세요!</Alert>
                    )}
                </Snackbar>
                <HeaderContainer>
                    <Logo>
                        <Link to="/">GongGus</Link>
                    </Logo>
                    <SearchBar showReset={text} onSubmit={onSearch}>
                        <button type="reset" onClick={onReset}>
                            X
                        </button>
                        <input
                            type="text"
                            value={text}
                            onChange={onChange}
                            placeholder="검색하세요"
                        />
=======
                <Nav>
                    <Logo>GongGus</Logo>
                    <SearchBar>
                        <input type="text" placeholder="검색하세요.." />
>>>>>>> 63e539c... header design
                        <button type="submit">
                            <AiOutlineSearch size={24} fill="#14171a" />
                        </button>
                    </SearchBar>
<<<<<<< HEAD
                    {user ? (
                        <UserMenu>
                            <Link to="/write">
                                <Button type="primary">글쓰기</Button>
                            </Link>
                            <UserProfile>
                                <FaUserAlt size={18} fill="#657786" />

                                <UserProfileMenu>
                                    <li>
                                        <Mypage to="/mypage">마이페이지</Mypage>
                                    </li>
                                    <li onClick={onLogOut}>로그아웃</li>
                                </UserProfileMenu>
                            </UserProfile>
                        </UserMenu>
                    ) : (
                        <Sign>
                            <div onClick={onSignModal}>회원가입/로그인</div>
                        </Sign>
                    )}
                </HeaderContainer>
=======
                    <Sign>
                        <div onClick={onSignModal}>회원가입/로그인</div>
                    </Sign>
                </Nav>
>>>>>>> 63e539c... header design
            </Container>
            {isSign && (
                <AuthContainer onSignModal={onSignModal} isSign={isSign} />
            )}
        </>
    );
};

export default Header;
