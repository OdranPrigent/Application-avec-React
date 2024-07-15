import '../../style/App.scss';


import React from 'react';

function Collapse({ title, text, largeur }) {
    const open = () => {
        let c = document.getElementById(title);
        let cO = document.getElementById(title+"chevronOpen");
        let cF = document.getElementById(title+"chevronFermer");
        if (c.style.display === "none") {
            c.style.display = "flex";
            cO.style.display = "none";
            cF.style.display = "flex";
        } else {
            c.style.display = "none";
            cO.style.display = "flex";
            cF.style.display = "none";
        }
    };

    return (
        <div style={{ width: largeur }}>
            <button type="button" className="collapsible" onClick={open} >
                {title}
                <svg id ={title+"chevronOpen"} class="chevron" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.7897 10.7897C15.4591 10.1202 16.5462 10.1202 17.2157 10.7897L27.4979 21.0719C28.1674 21.7414 28.1674 22.8285 27.4979 23.4979C26.8285 24.1673 25.7414 24.1673 25.072 23.4979L16 14.4259L6.92804 23.4926C6.25862 24.162 5.17148 24.162 4.50206 23.4926C3.83265 22.8231 3.83265 21.736 4.50206 21.0666L14.7843 10.7843L14.7897 10.7897Z" fill="white"/>
                </svg>

                <svg  id ={title+"chevronFermer"} class="chevronF" style={{display:"none"}} width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.2103 21.8522C16.5409 22.5216 15.4538 22.5216 14.7843 21.8522L4.50206 11.5699C3.83265 10.9005 3.83265 9.81335 4.50206 9.14393C5.17148 8.47451 6.25862 8.47451 6.92804 9.14393L16 18.2159L25.072 9.14929C25.7414 8.47987 26.8285 8.47987 27.4979 9.14929C28.1674 9.81871 28.1674 10.9058 27.4979 11.5753L17.2157 21.8575L17.2103 21.8522Z" fill="white"/>
                </svg>

            </button>
            <div className="openCollapse" id={title} style={{display:"none"}}>{text}
            </div>
            <div className="content"><p>{text}</p>
            </div>
        </div>
    );
}

export default Collapse;