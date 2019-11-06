import React from "react";
import "./spinner.css";
const Spinner = () => {
    return (
        <div className="spinner">
            <div className="sk-folding-cube">
                <div className="sk-cube sk-cube-1" />
                <div className="sk-cube sk-cube-2" />
                <div className="sk-cube sk-cube-4" />
                <div className="sk-cube sk-cube-3" />
            </div>
        </div>
    );
};

export default Spinner;
