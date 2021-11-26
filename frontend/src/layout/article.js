import React from "react";
import { Frame } from "./product";

export function Article({ pageType }) {
    return (
        <div className="main">
            {pageType === 'Frame' ?
                <Frame /> : null}
        </div>
    )
}
