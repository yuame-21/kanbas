import React from "react";
import ConditionalOutputInLine from "./ConditionalOutputInLine";

import ConditionalOutputIfElse
    from "./ConditionalOutputIfElse";
const ConditionalOutput = () => {
    return(
        <>
            <ConditionalOutputIfElse/>
            <ConditionalOutputInLine/>
        </>
    );
};
export default ConditionalOutput;


