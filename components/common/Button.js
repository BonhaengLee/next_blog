import React from "react";
import styled, { css } from "styled-components";
import { Link } from "next/link";

const buttonStyle = css`
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.25rem 1rem;
    color: white;
    outline: none;
    cursor: pointer;
    background: gray;
    &:hover {
        background: gray;
    }
    ${(props) =>
        props.fullWidth &&
        css`
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            width: 100%;
            font-size: 1.125rem;
        `}
    ${(props) =>
        props.cyan &&
        css`
            background: skyblue;
            &:hover {
                background: cyan;
            }
        `}
    &:disabled {
        background: gray;
        color: gray;
        cursor: not-allowed;
    }
`;

// const StyledButton = styled.button`
//     ${buttonStyle}
// `;

// const StyledLink = styled(Link)`
//     ${buttonStyle}
// `;

const Button = (props) => {
    return props.to ? <Link {...props} cyan={1} /> : <button {...props} />;
};

export default Button;
