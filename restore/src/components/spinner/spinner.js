import React from "react";
import "./spinner.css";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
const Spinner = () => {
    return (
        <div className="spinner">
            <div className="sk-folding-cube">
                <div className="sk-cube sk-cube-1">
                    <div className="img-wrapper">
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="sk-cube sk-cube-2">
                    <div className="img-wrapper">
                        <img src={img4} alt="" />
                    </div>
                </div>
                <div className="sk-cube sk-cube-4">
                    <div className="img-wrapper">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="sk-cube sk-cube-3">
                    <div className="img-wrapper">
                        <img  src={img3} alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="test">
                <div className="img img2" src={img2} alt="" />
                <div className="img img3" src={img3} alt="" />
                <div className="img img4" src={img4} alt="" />
                <div className="img img1" src={img1} alt="" />
            </div> */}
            
        </div>
    );
};

export default Spinner;
