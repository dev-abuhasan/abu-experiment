import React from 'react';
import './AnchorScroll.scss';

const AnchorScroll = ({ children }) => {
    return (
        <div id="AnchorScroll">
            {children.map((data, index) => data)}
        </div>
    );
};

export default AnchorScroll;