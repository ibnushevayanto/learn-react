import React from "react";

const withClass = (ComponentWrapped, className) => {
    return props => (
        <div className={className}>
            <ComponentWrapped {...props} />
        </div>
    )
}

export default withClass