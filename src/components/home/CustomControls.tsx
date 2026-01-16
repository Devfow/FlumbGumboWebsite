import React from 'react';
import './CustomControls.css';

const CustomControls = (props: any) => {
    const {
        color, setColor,
        roughness, setRoughness,
        metalness, setMetalness,
        blobbiness, setBlobbiness,
        wobbleSpeed, setWobbleSpeed,
    } = props;

    const presetColors = ['#ff1493', '#ffc300', '#00ff00', '#0000ff', '#800080'];

    return (
        <div className="custom-controls">
            <div className="control-group">
                <label>Color</label>
                <div className="color-presets">
                    {presetColors.map(preset => (
                        <button
                            key={preset}
                            style={{ backgroundColor: preset }}
                            className={color === preset ? 'active' : ''}
                            onClick={() => setColor(preset)}
                        />
                    ))}
                </div>
            </div>
            <div className="control-group">
                <label>Roughness</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={roughness}
                    onChange={(e) => setRoughness(parseFloat(e.target.value))}
                />
            </div>
            <div className="control-group">
                <label>Metalness</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={metalness}
                    onChange={(e) => setMetalness(parseFloat(e.target.value))}
                />
            </div>
            <div className="control-group">
                <label>Blobbiness</label>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.01"
                    value={blobbiness}
                    onChange={(e) => setBlobbiness(parseFloat(e.target.value))}
                />
            </div>
            <div className="control-group">
                <label>Wobble Speed</label>
                <input
                    type="range"
                    min="0"
                    max="2"
                    step="0.01"
                    value={wobbleSpeed}
                    onChange={(e) => setWobbleSpeed(parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
};

export default CustomControls;
