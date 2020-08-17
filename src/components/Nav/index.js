import React from 'react';
// import React, { useState } from "react";
// import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
  return (
    <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                Courtney L. Stanton
            </a>
        </h2>
        <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a
                        href="#about"
                    >
                        About Me
                    </a>
                </li>
                <li>
                    <a 
                        href="#portfolio"
                    >
                        Portfolio
                    </a>
                </li>
                <li>
                    <a 
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
                <li>
                    <a 
                        href="#resume"
                    >
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;