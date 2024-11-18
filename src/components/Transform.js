import React, { useState, useEffect, Fragment } from "react";
import { gsap } from "gsap";

const Transform = () => {
    const [transform, setTransform] = useState({
        scale: 1,
        rotate: 0,
        x: 0,
        y: 0,
    });

    // Function to handle slider changes
    const handleSliderChange = (e) => {
        const { name, value } = e.target;

        // Update state with the new slider value
        setTransform((prev) => ({
            ...prev,
            [name]: parseFloat(value),
        }));
    };

    // React effect to update GSAP animations when the state changes
    useEffect(() => {
        gsap.to(".transform-shape", {
            scale: transform.scale,
            rotation: transform.rotate,
            x: transform.x,
            y: transform.y,
            duration: 0.3,
        });
    }, [transform]);

    return (
        <div className="transform-section">
            <div className="container transform-container">
                <h2 className="heading">Dynamic transformation editing functionality brings liveliness to UI interactions</h2>
                <div className="transform-window">
                    <div className="controls-wrapper">
                        <h2>Controls</h2>
                        <div className="controls">
                            <Slider label="Scale" name="scale" min="0.5" max="2" step="0.1" value={transform.scale} onChange={handleSliderChange}/>
                            <Slider label="Rotate" name="rotate" min="0" max="360" step="1" value={transform.rotate} onChange={handleSliderChange}/>
                            <Slider label="X Position" name="x" min="0" max="400" step="01" value={transform.x} onChange={handleSliderChange}/>
                            <Slider label="Y Position" name="y" min="0" max="400" step="01" value={transform.y} onChange={handleSliderChange}/>
                        </div>
                    </div>
                    <div className="transform-shape-wrapper">
                        <div className="transform-shape"></div>
                    </div>
                </div>
            </div>            
        </div>
    );
};

// Slider Component
const Slider = ({ label, name, min, max, step, value, onChange }) => {
    return (
        <Fragment>
            <div className="slider-label">
                <div className="label">{label}</div>
                <div className="slider-wrapper">
                    <input
                        type="range"
                        name={name}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        onChange={onChange}
                        className="custom-slider"
                    />
                    <div className="value">{value}</div>
                </div>
                
            </div>
        </Fragment>
    );
};

export default Transform;
