import '../../style/App.scss';


import React from 'react';

function Collapse({ title, text, largeur }) {
    const open = () => {
        let c = document.getElementById(title);
        if (c.style.display === "none") {
            c.style.display = "flex";
        } else {
            c.style.display = "none";
        }
    };

    return (
        <div style={{ width: largeur }}>
            <button type="button" className="collapsible" onClick={open}>
                {title}
            </button>
            <div className="openCollapse" id={title}>{text}</div>
            <div className="content">
                <p>{text}</p>
            </div>
        </div>
    );
}

export default Collapse;