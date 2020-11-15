import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { setText } from "modules/boardWrite";

const Container = styled.div`
    margin-bottom: 20px;
    .ql-editor {
        min-height: 400px !important;
        max-height: 300px;
        overflow: hidden;
        overflow-y: scroll;
        overflow-x: scroll;
    }
    .ql-container {
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
        background: #fefcfc;
    }

    .ql-snow.ql-toolbar {
        display: block;
        background: #eaecec;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
    }
`;

function Editor() {
    const [content, setContent] = useState("");

    return (
        <Container>
            <ReactQuill
                theme="snow"
                value={content}
                onChange={setContent}
                modules={Editor.modules}
                formats={Editor.formats}
                placeholder="내용을 입력해주세요."
            />
        </Container>
    );
}

Editor.modules = {
    toolbar: [
        [{ header: "1" }, { header: "2" }, { font: [] }],
        [{ size: [] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
        ],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};

Editor.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
];

Editor.propTypes = {
    placeholder: PropTypes.string,
};

export default Editor;
