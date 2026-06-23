import { flushSync } from "react-dom";

export default function App() {
  const pageScrolling =(elem)=>{
    if(elem>0){
      console.log("Forward Scrolling");
    }
    else{
      console.log("BackWard Scrolling");
    }
  }
  return (
    <div className="safari">
      <input 
        onWheel={(elem) => {
          pageScrolling(elem.deltaY)
        }}
        type="text" 
        placeholder="Enter Name" 
      />
    </div>
  )
}  