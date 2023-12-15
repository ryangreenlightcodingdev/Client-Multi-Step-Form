import RightContainer from "./RightContainer"
import LeftContainer from "./LeftContainer"

export default function App(){
  //note: our stage will be contained here
    //and passed down to botho of our containers
  return <div style={{display:"flex"}}>
  <LeftContainer/>
  <RightContainer/>
  
  </div>
}
