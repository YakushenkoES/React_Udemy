import React from "react";
import "./spinner.css";
const Spinner = () => {
    return (
        <div className="spinner">
            <div class="sk-folding-cube">
                <div class="sk-cube sk-cube-1" />
                <div class="sk-cube sk-cube-2" />
                <div class="sk-cube sk-cube-4" />
                <div class="sk-cube sk-cube-3" />
            </div>
        </div>
    );
};

export default Spinner;
