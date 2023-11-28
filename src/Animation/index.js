import React from "react";
import './Animation.css'


function Animation() {
    return (
        <div className="container">
            <div className="sun"></div>
            <div className="orbit earth">
                <div className="globe earth">
                    <div className="orbit moon">
                        <div className="globe moon"></div>
                    </div>
                </div>
            </div>
        </div>


    );

}

export { Animation };
