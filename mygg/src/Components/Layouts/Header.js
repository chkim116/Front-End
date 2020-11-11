import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import AuthContainer from "Routes/Common";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "modules/user";
import { signFormShowing } from "modules/header";
import { useInput } from "hooks";
import { Link } from "react-router-dom";
import theme from "Components/Theme";

const Container = styled.div`
    position: fixed;
    background: ${theme.white};
    top: 0;
    height: 60px;
    width: 100%;
    z-index: 500;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 60px;
    max-width: 1060px;
    z-index: 100;
`;

const Logo = styled.div`
    font-size: ${theme.xls};
    font-weight: bold;
    cursor: pointer;

    a {
        color: ${theme.black};
        text-decoration: none;
    }
`;

const SearchBar = styled.form`
    display: flex;
    align-items: center;
    background: ${theme.lightenBlack};
    border-radius: 12px;
    padding: 0 4px;

    input {
        all: unset;
        padding: 6px;
        width: 240px;
        text-align: center;

        &:focus {
            text-align: left;
        }
    }

    button[type="reset"] {
        font-size: ${theme.ms};
        display: ${(props) => (props.showReset ? "block" : "none")};

        &:hover {
            color: ${theme.lightenBlack};
        }
    }
`;

const Sign = styled.div`
    cursor: pointer;
`;

const UserMenu = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    &:hover ul {
        padding: 6px 0;
        height: 165px;
        transition: height 300ms;
        background: ${theme.white};
        border: 1px solid ${theme.lightenBlack};
    }
`;

const UserProfile = styled.div`
    border: 1px solid ${theme.lightenBlack};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: pointer;
`;

const UserProfileMenu = styled.ul`
    position: absolute;
    top: 30px;
    left: -8px;
    width: 120px;
    height: 0px;
    overflow: hidden;
    & > li {
        cursor: pointer;
        padding: 6px;

        &:hover {
            background: ${theme.blue};
            color: ${theme.white};
        }
    }
`;

const Header = () => {
    const dispatch = useDispatch();

    // signin/signup modal on & off
    const { isSign } = useSelector((state) => state.header);

    const onSignModal = useCallback(() => {
        dispatch(signFormShowing());
    }, [isSign, dispatch]);

    // search text & text reset

    const [text, setText, onChange] = useInput("");

    const onReset = useCallback(() => {
        setText("");
    }, [text]);

    // check user
    const [users, setUser] = useState("");
    const user = useSelector((state) => state.user.isLogin);

    const onLogOut = useCallback(() => {
        dispatch(logOut());
    }, [dispatch]);

    useEffect(() => {
        setUser(user);
    }, [user]);

    return (
        <>
            <Container>
                <Nav>
                    <Logo>
                        <Link to="/">GongGus</Link>
                    </Logo>
                    <SearchBar showReset={text}>
                        <button type="reset" onClick={onReset}>
                            X
                        </button>
                        <input
                            type="text"
                            value={text}
                            onChange={onChange}
                            placeholder="검색하세요.."
                        />
                        <button type="submit">
                            <AiOutlineSearch size={24} fill="#14171a" />
                        </button>
                    </SearchBar>
                    {users ? (
                        <UserMenu>
                            <UserProfile>
                                <FaUserAlt size={18} fill="#657786" />
                            </UserProfile>
                            <UserProfileMenu>
                                <li>메뉴1</li>
                                <li>메뉴2</li>
                                <li>메뉴3</li>
                                <li>메뉴4</li>
                                <li onClick={onLogOut}>로그아웃</li>
                            </UserProfileMenu>
                        </UserMenu>
                    ) : (
                        <Sign>
                            <div onClick={onSignModal}>회원가입/로그인</div>
                        </Sign>
                    )}
                </Nav>
            </Container>
            {isSign && (
                <AuthContainer onSignModal={onSignModal} isSign={isSign} />
            )}
        </>
    );
};

export default Header;
