import React, { useState } from 'react'
import './slider.css'

function VerticalSlider() {
    const [value, setValue] = useState(0)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = parseInt(e.target.value)
        const snapVal = Math.round(val / 25) * 25
        setValue(snapVal)
    }

    const handleMouseDown = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.focus()
    }

    return (
        <div className="vertical-slider d-flex align-items-center justify-content-center h-100 m-5">
    <input
        type="range"
        className="form-range custom-vertical-slider"
        style={{ writingMode: 'vertical-rl', height: '400px', fill: 'none', width: '50px', borderRadius: '50px' }}
        list="tickmarks"
        step="1"
        value={value}
        onChange={handleChange}
        onMouseDown={handleMouseDown}
    />
    <datalist id="tickmarks">
        <option value="0" label="0%" />
        <option value="25" label="25%" />
        <option value="50" label="50%" />
        <option value="75" label="75%" />
        <option value="100" label="100%" />
    </datalist>
</div>

    )
}

export default VerticalSlider;

