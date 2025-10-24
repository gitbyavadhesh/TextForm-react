import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked: " +  text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }
     const handleLowClick = ()=>{
       // console.log("Lowercase was clicked: " +  text);
        let newText = text.toLowerCase();
        setText(newText);
         props.showAlert("converted to lowercase", "success");
    }
     const handleOriginalClick = ()=>{
        //let newText = ;
        setText(originalText); // Restore original text
         props.showAlert("Get the original text", "success");

    }
    const handleClearClick = ()=>{
      setOriginalText(text); // Save current before clearing
        let newText = '';
        setText(newText);
         props.showAlert("Clear all text", "success");
    }
    const handelOnChange = (event)=>{
       // console.log("on change");
        setText(event.target.value);
        
    }
    const handleCopy = ()=>{
        // console.log("i am copy");
        //   let text = document.getElementById("myText");
        //   text.select();
          navigator.clipboard.writeText(text);
          // document.getSelection().removeAllRanges();
           props.showAlert("Text copy to clipboard", "success");

    }

    const handleExtraSpace = () => {
      let newText = text.split(/[ ]+/);
      setText(newText.join(" ")); 
       props.showAlert("Remove extra space", "success");
    }

    const handleCapitalizeWords = () => {
      let newText  = text.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
      setText(newText);
       props.showAlert("converted to first letter capial", "success");
    }

    const [text, setText, ] = useState('');
     const [originalText, setOriginalText] = useState(''); // Backup state

    // text ="new text";
    // setText("new text");
    return (
      <>
    <div className='container'  style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
        <h2 className='mb-3'>{props.heading}</h2>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handelOnChange} style={{
    backgroundColor: props.mode === 'dark' ? 'darkgray' :
                     props.mode === 'custom' ? 'inherit' : 'white',
    color: props.mode === 'dark' ? 'white' :
           props.mode === 'custom' ? 'inherit' : 'black'
  }}
 id="myText" rows="8"></textarea>
</div> 
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleUpClick} style={{background: "cyan"}}>convert to UpperCase</button>
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleLowClick} style={{background: "cyan"}}>convert to LowerCase</button>
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleClearClick} style={{background: "cyan"}}>clear text</button>
    <button  className="btn primary mx-1 my-1" onClick={handleOriginalClick} style={{background: "cyan"}}>original text</button>
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleCopy} style={{background: "cyan"}}>Copy Text</button>
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleExtraSpace} style={{background: "cyan"}}>Remove Extra Spaces</button>
    <button disabled={text.length===0} className="btn primary mx-1 my-1" onClick={handleCapitalizeWords} style={{background: "cyan"}}>Capital First Letter</button>
    </div>
    <div className="container my-2"  style={{ color: props.mode === 'dark' ? 'white' :
         props.mode === 'custom' ? 'inherit' : 'black'
}}>
      <h2>your text summary</h2>
      {/* 🔥 Fixed word count logic to ignore extra spaces */}
<p>{text.trim().split(/\s+/).filter((word) => word.length > 0).length} words and {text.length} characters</p>
      {/* 🔥 Fixed reading time calculation */}
<p><b>{0.008 * text.trim().split(/\s+/).filter((word) => word.length > 0).length} Minutes to read</b></p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Nothing to preview"}</p>
    </div>
    </>
  )
}
