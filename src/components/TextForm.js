import React, {useState} from 'react'

export default function TextForm(props) {
    const toUpperCase = ()=>{
        console.log("button clicked", text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlertFunction("Coverted to upper-case","success")
    }

    const toLowerCase = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlertFunction("Coverted to lower-case","success")

    }

    const clearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlertFunction("Text cleared","danger")

    }
    const handleonchange = (e)=>{
        console.log("on change handle");
        setText(e.target.value);
    }
    const copyText = ()=>{
        console.log('copied '+ text);
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
        props.showAlertFunction("Text copied","success")

    }
    const removeExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlertFunction("Extra spaces removed.","success")
    }
    
    // const colorChange = ()=>{
    //     console.log("color changed");
    // }
    const [text, setText] = useState("text default here");
  return (
    <>
        <div className='container' style={{color: props.mode==='light' ? 'black':'white'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor : props.mode==='light' ? 'white':'#255f44', color: props.mode==='light' ? 'black':'white', }} value={text} onChange={handleonchange} id="textArea" rows="4"></textarea>
            </div>
            <div className="container">
                <button disabled={text.length ===0} className='btn btn-danger' onClick={clearText}>Clear Text</button>
                <button disabled={text.length ===0} className='btn btn-success mx-3 my-1' onClick={toUpperCase}>To Uppercase</button>
                <button disabled={text.length ===0} className='btn btn-success mx-2 my-1' onClick={toLowerCase}>To Lowercase</button>
                <button disabled={text.length ===0} className='btn btn-secondary mx-2 my-1' onClick={copyText}>Copy Text</button>
                <button disabled={text.length ===0} className='btn btn-primary mx-2 my-1' onClick={removeExtraSpace}>Remove Extra Spaces</button>
            </div>
            {/* <div className="container my-5">
            <label htmlFor="colorPicker" className="form-label">Color picker</label>
            <input type="color" className="form-control form-control-color" id="colorPicker" value="#563d7c" onChange={colorChange} title="Choose your color"/>
            </div> */}
        </div>
        <div className="container my-2" style={{color: props.mode === 'light' ? 'black':'white'}}>
            <h4>Text Summary :</h4>
            <ul className="list-group" style={{flexDirection:'row',flexWrap:'wrap'}}>
                <li className="list-group-item list-group-item-primary mx-1 my-1" style={{width:'fit-content'}}><b>Total words : </b>{(text.split(' ').filter((element)=>{ return element.length !== 0 }).length) }</li>  
                <li className="list-group-item list-group-item-secondary mx-1 my-1" style={{width:'fit-content'}}><b>Total characters : </b>{text.length}</li>
                <li className="list-group-item list-group-item-success mx-1 my-1" style={{width:'fit-content'}}><b>Time to read : </b>{(0.008 * (text.split(' ').filter((element)=>{return element.length !==0}).length)).toFixed(3)} minutes</li>  
                <li className="list-group-item list-group-item-danger mx-1 my-1" style={{width:'fit-content'}}><b>Time to read : </b>{(0.48 * (text.split(' ').filter((element)=>{return element.length !==0}).length )).toFixed(1)} seconds</li>
            </ul>
            {/* <ul className="d-inline-flex">
                <li className="alert alert-primary mx-4"><b>Total words : </b>{(text.split(' ').filter((element)=>{ return element.length !== 0 }).length) }</li>  
                <li className="alert alert-secondary mx-4" ><b>Total characters : </b>{text.length}</li>
                <li className="alert alert-success mx-4"><b>Time to read : </b>{(0.008 * (text.split(' ').filter((element)=>{return element.length !==0}).length)).toFixed(3)} minutes</li>  
                <li className="alert alert-danger mx-4"><b>Time to read : </b>{(0.48 * (text.split(' ').filter((element)=>{return element.length !==0}).length )).toFixed(1)} seconds</li>
            </ul> */}
        </div>
        <div className="container my-3" style={{color : props.mode==='light'?'black':'white'}}>
        <h5>Preview text for read : </h5>
        <p className="p-1 bg-secondary text-white">{text.length>0 ? text.toLowerCase():'Enter text above to preview it here'}</p>
        </div>
    </>
  )
}
