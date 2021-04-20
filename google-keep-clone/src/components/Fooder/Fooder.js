import React from 'react';
import './Fooder.css';

const Fooder = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer>
            <p>Copyright &copy; Kirushanthi | {year}</p>
        </footer>
    )
}

export default Fooder
