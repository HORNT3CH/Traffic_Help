import stage_1 from '../assets/stage_1.png'
import stage_2 from '../assets/stage_2.png'
import stage_3 from '../assets/stage_3.png'
import stage_4 from '../assets/stage_4.png'
import stage_5 from '../assets/stage_5.png'

//                     
function Staging() {
  return (
    <div>
        <h1>Staging</h1>
        <p>Click on the <span className="bold-orange">Stage</span> button</p>
        <img src={stage_1} alt="stage_1" width={1000} />
        <h3>Start Stager</h3>
        <p>Select <span className="bold-orange">Stager 1</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Start Stage</span> button</p>
        <p>Click on the <span className="bold-orange">Save Changes</span> button</p>
        <img src={stage_3} alt="stage_3" width={1000} />
        <h3>Add Stager</h3>
        <p>Select <span className="bold-orange">Stager 2</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Save Changes</span> button</p>
        <p>Follow same steps for <span className="bold-orange">Stager 3</span></p>
        <img src={stage_4} alt="stage_4" width={1000} />
        <h3>Finish Staging</h3>
        <p>Type in the <span className="bold-orange">Stage Location</span></p>
        <p>Click on the <span className="bold-orange">Stage Finish</span> button</p>  
        <p>Click on the <span className="bold-orange">Save Changes</span> button</p>      
        <img src={stage_5} alt="stage_5" width={1000} />
    </div>
  )
}

export default Staging