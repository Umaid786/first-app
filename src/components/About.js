// import React ,{useState} from 'react'
import React from "react";

export default function About(props) {
    // const [colorMode, setcolorMode] = useState({
    //     color : 'black',
    //     backgroundColor: 'white'
    // })
    // const [textMode, settextMode] = useState('Enable Dark Mode');
    // const [borderMode, setborderMode] = useState({
    //     margin : '5px',
    //     border : '1px solid black'
    // })

    // const changeMode = ()=>{
    //     if (colorMode.color === 'black') {
    //         setcolorMode({
    //             color : 'white',
    //             backgroundColor : '#5a5858'
    //         })
    //         settextMode('Disable Dark Mode')
    //         setborderMode({
    //             border : '1px solid white'
    //         })
    //     }
    //     else{
    //         setcolorMode({
    //             color : 'black',
    //             backgroundColor : 'white'
    //         })
    //         settextMode('Enable Dark Mode')
    //         setborderMode({
    //             border: '1px solid black'
    //         })
    //     }
    // }
    let styleAbout = {
        color: props.mode === "light" ? "black" : "white",
        backgroundColor: props.mode === "light" ? "white" : "rgb(82 55 55)",
        border: "1px solid",
        borderColor: props.mode === "light" ? "black" : "white",
    };

    return (
        <div>
            {/* <div className="container py-2" style={colorMode}> */}
            <div
                className="container py-2"
                style={{ color: props.mode === "light" ? "black" : "white" }}
            >
                <h2>About Us</h2>
                {/* <div className="accordion" id="accordionExample" style={borderMode}> */}
                <div className="accordion" id="accordionExample">
                    {/* <div className="accordion-item m-2" style={colorMode}> */}
                    <div className="accordion-item m-2" style={styleAbout}>
                        {/* <h2 className="accordion-header" id="headingOne" style={borderMode}> */}
                        <h2 className="accordion-header" id="headingOne">
                            {/* <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={colorMode}> */}
                            <button
                                style={{
                                    color: props.mode === "light" ? "black" : "white",
                                    backgroundColor: props.mode === "light" ? "white" : "#795353",
                                }}
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is
                                shown by default, until the It's also worth noting that just
                                about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item m-2" style={colorMode}> */}
                    <div className="accordion-item m-2" style={styleAbout}>
                        {/* <h2 className="accordion-header" id="headingTwo" style={borderMode}> */}
                        <h2 className="accordion-header" id="headingTwo">
                            {/* <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={colorMode}> */}
                            <button
                                style={{
                                    color: props.mode === "light" ? "black" : "white",
                                    backgroundColor: props.mode === "light" ? "white" : "#795353",
                                }}
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is
                                hidden by default, until the s. It's also worth noting that just
                                about any HTML can go within the <code>.accordion-body</code>,
                                though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item m-2" style={colorMode}> */}
                    <div className="accordion-item m-2" style={styleAbout}>
                        {/* <h2 className="accordion-header" id="headingThree" style={borderMode}> */}
                        <h2 className="accordion-header" id="headingThree">
                            {/* <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={colorMode}> */}
                            <button
                                style={{
                                    color: props.mode === "light" ? "black" : "white",
                                    backgroundColor: props.mode === "light" ? "white" : "#795353",
                                }}
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is
                                hidden by default, until It's also worth noting that just about
                                any HTML can go within the <code>.accordion-body</code>, though
                                the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
            <button className='btn btn-secondary' onClick={changeMode}>{textMode}</button>
        </div> */}
        </div>
    );
}
