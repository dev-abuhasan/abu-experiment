import React from 'react';
import './FullPageScroll.scss';

const FullPageScroll = ({ children }) => {
    return (
        <div id="ScrollContainer">
            {children.map((data) => data)}
        </div>
    );
};

export default FullPageScroll;