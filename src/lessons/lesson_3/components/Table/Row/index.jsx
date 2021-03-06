import React from "react";
import "./style.scss";


export const Row = ({children}) => {
    return (
        <div className='row-memo'>
            {React.Children.map(children, (child) => {
                return child;
            })}
        </div>
    );
};
