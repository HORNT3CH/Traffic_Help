import reroute_2 from '../assets/reroute_2.png'
import reroute_3 from '../assets/reroute_3.png'
import spot_1 from '../assets/spot_1.png'
import spot_2 from '../assets/spot_2.png'
import spot_3 from '../assets/spot_3.png'

function LoadSpot() {
  return (
    <div>
        <h2>Loading a Spot</h2>
        <hr />
        <h3>Re-Routing a Carrier</h3>
        <p>Click on the <span className="bold-orange">Re-Route Carrier</span> drop down</p>
        <p>Select a <span className="bold-orange">Carrier</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Re-Route Carrier</span> button</p>
        <img src={reroute_2} alt="reroute_2" height={"600px"}/>
        <hr />
        <h3>Bringing in a Spot to Dock</h3>
        <p>Click on the <span className="bold-orange">Trailer #</span> drop down</p>
        <p>Select a <span className="bold-orange">Trailer</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Dock Door</span> drop down</p>
        <p>Select a <span className="bold-orange">Dock Door</span> from the drop down</p>        
        <img src={reroute_3} alt="reroute_3" height={"600px"} />
        <hr />
        <h3>Starting the first Loader</h3>
        <p>Select the <span className="bold-orange">Loader 1</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Set Load Start</span> button</p>
        <p>Click on the <span className="bold-orange">Save Changes</span> button</p>
        <img src={spot_1} alt="spot_1" height={"600px"} />          
        <h3>Adding a Loader</h3>
        <p>Select the <span className="bold-orange">Loader 2</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Add</span> button</p>
        <p>Follow the same steps for <span className="bold-orange">Loader 3</span></p>
        <img src={spot_2} alt="spot_2" height={"600px"} />        
        <h3>Finishing the Load</h3>
        <p>Click on the <span className="bold-orange">Set Load Finish</span> button</p>
        <p>Select Exit from the <span className="bold-orange">Lot</span> drop down</p>
        <p>Click on the <span className="bold-orange">Save Changes</span> button</p>
        <img src={spot_3} alt="spot_3" height={"600px"} /> 
    </div>
  )
}

export default LoadSpot