import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
        <Container fluid className="h-100">
            <Row className="h-100">
                <Col className="d-flex align-items-center justify-content-around float-end text-center flex-column" xs={8}>
                    <Row className="mb-3">
                        <Col xs={12} className="text-center rounded-5 d-flex align-items-center justify-content-center px-5 bubble">
                            <p className="text-white">TEST</p>    
                        </Col>  
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} className="text-center. rounded-5 d-flex align-items-center justify-content-center px-5 bubble">
                            <p className="text-white">efefef</p>    
                        </Col>  
                    </Row>
                    <Row className="mb-3">
                        <Col xs={12} className="text-center rounded-5 d-flex align-items-center justify-content-center px-5 bubble">
                            <p className="text-white">fdeffefef.</p>    
                        </Col>  
                    </Row>
                    <Row>
                        <Col xs={12} className="text-center rounded-5 d-flex align-items-center justify-content-center px-5 bubble">
                            <p className="text-white">dfvfdvd</p>    
                        </Col>  
                    </Row>
                </Col>
                <Col className="d-flex align-items-center justify-content-center" xs={4}>
                    <div className="vertical-slider d-flex align-items-center justify-content-center h-100 mb-3">
                        <input
                            type="range"
                            className="form-range custom-vertical-slider"
                            style={{
                                writingMode: 'vertical-rl',
                                height: '400px',
                                width: '50px',
                                borderRadius: '50px',
                                outline: 'none'
                            }}
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
                </Col>
            </Row>
        </Container>
    )
}

export default VerticalSlider;

