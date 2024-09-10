import Greet from "./componentsOfApp/_01_greet"
import CounterWithoutUseState from "./componentsOfApp/_02_Counter_Without_UseState"
import CounterWithUseState from "./componentsOfApp/_03_Counter_With_UseState"
import { MultiplePropCard } from "./componentsOfApp/_05_PropsUse"
import { API } from "./componentsOfApp/_06_fromAPI"
import { BgChanger } from "./componentsOfApp/_06_bgChanger"
import { PasswordGen } from "./componentsOfApp/useEff,useRef,useCallBack/_07_passwordGen"




function App() {
  const PropArr=[
    {name:"Suhail",desc:"Smart"},
    {name:"Sharieff",desc:"Handsome"},
    {name:"Anfaz",desc:"Intelligent"},

  ]
  return (
    <>
    
      {/* <Greet/> */}
      {/* <CounterWithoutUseState/> */}
      {/* <CounterWithUseState/> */}
      {/* <MultiplePropCard arr={PropArr}/> */}
      {/* <API/> */}
      {/* <BgChanger/> */}
      <PasswordGen/>
      
    </>
  )
}

export default App
