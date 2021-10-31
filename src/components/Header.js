import React from "react";
import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Under construction</h1>
                <Typed
                className="typed-text"
                strings={["Web Development", "IoT Development", "RPA Development", "Penulisan Jurnal"]}
                typeSpeed={40}
                backSpeed={60}
                loop

                />
                <a href="https://t.me/muhamadnurarifin" className="btn-main-offer">contact me</a>
            </div>

            
        </div>
    )
}

export default Header
