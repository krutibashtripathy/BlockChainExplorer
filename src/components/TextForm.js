import React, {useState} from 'react'

export default function TextForm(props) {
    const upClick = ()=>{
        //console.log("u have clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase ","Success");
    }
    const loClick = ()=>{
      //console.log("u have clicked" + text);
      let newText= text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase ","Success");
    }

    const clearClick = ()=>{
      //console.log("u have clicked" + text);
      let newText= (" ");
      setText(newText)
      props.showAlert("Successfuly cleard ","Success");
    }

    const copyToClip = ()=>{
      //console.log("u have clicked" + text);
      let newText= document.getElementById("MyBox");
      newText.select();
      navigator.clipboard.writeText(newText.value);
      props.showAlert("Copied to ClipBord ","Success");
    
    }

    
    const handleOnChange = (event)=>{
       // console.log("on clicked");
        setText(event.target.value);
    }
    const[text , setText] = useState(" ");
  return (
    <>
    <div className='container'style={{color:props.mode === 'dark'?'white':'#051c3e'}}>
        <h1>{props.heading}</h1>
       <div className="mb-3">
       <label htmlFor="MyBox" className="form-label">Type Here</label>
       <textarea className="form-control" value={text} onChange={handleOnChange}
        style={{backgroundColor:props.mode==='dark'?'#093562':'white', color:props.mode === 'dark'?'white':'#051c3e'}} id="MyBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2 my-1" onClick={upClick}>change to uppercase</button>
       <button className="btn btn-primary mx-2 my-1" onClick={loClick}>change to lowercase</button>
       <button className="btn btn-primary mx-2 my-1" onClick={clearClick}>Clear</button>
       <button className="btn btn-primary mx-2 my-1" onClick={copyToClip}>Copy</button>
    </div>
    <div className='container my-3' style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2>your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.split(" ").filter((element)=>{return element.length!==0}).length}characters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}Times to read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}