import React from 'react';
import PropTypes from 'prop-types';

export default function MenuSidebar({ children }) {
    return (
        <div>
            <nav>{children}</nav>
        </div>
    );
}

MenuSidebar.propTypes = {
    children: PropTypes.node.isRequired,
};
