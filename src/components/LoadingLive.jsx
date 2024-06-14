import reroute_1 from '../assets/reroute_1.png'
import reroute_2 from '../assets/reroute_2.png'
import live_1 from '../assets/live_1.png'
import live_2 from '../assets/live_2.png'
import live_3 from '../assets/live_3.png'
import live_4 from '../assets/live_4.png'
import live_5 from '../assets/live_5.png'

function LoadingLive() {
  return (
    <div>
        <h2>Loading a Live Load</h2>
        <hr />
        <h3>Re-Routing a Carrier</h3>
        <p>Click on the <span className="bold-orange">Re-Route Carrier</span> drop down</p>
        <p>Select a <span className="bold-orange">Carrier</span> from the drop down</p>
        <p>Click on the <span className="bold-orange">Re-Route Carrier</span> button</p>
        <img src={reroute_1} alt="reroute_1" height={"600px"}/>        
        <br />
        <hr />        
        <h3>Bringing in a Live Load to Dock</h3>
        <ul className="list">
            <li>1. Click on the <span className="bold-orange">Set Arrival Time</span> button</li>
            <li>2. Enter the <span className="bold-orange">Trailer #</span></li>
            <li>3. Select the <span className="bold-orange">Dock Door</span> from the drop down</li>
            <li>4. Click on the <span className="bold-orange">Save Changes</span> button</li>
        </ul>
        <img src={live_1} alt="live_1" height={"600px"} />
        <br />
        <hr />
        <h3>Starting the first Loader</h3>
        <ul className="list">            
            <li>1. Select the <span className="bold-orange">Loader</span> from the drop down</li>
            <li>2. Click on the <span className="bold-orange">Set Load Start</span> button</li>
            <li>3. Click on the <span className="bold-orange">Save Changes</span> button</li>
        </ul>
        <img src={live_2} alt="live_2" height={"600px"} />
        <img src={live_3} alt="live_3" height={"600px"} />
        <h3>Adding a Loader</h3>
        <ul className="list">
            <li>1. Select the <span className="bold-orange">Loader 2</span> from the drop down</li>
            <li>2. Click on the <span className="bold-orange">Add</span> button</li>
        </ul>
        <p>Follow the same steps for <span className="bold-orange">Loader 3</span></p>
        <img src={live_4} alt="live_4" height={"600px"} />
        <h3>Finishing the Load</h3>
        <ul className="list">
            <li>1. Click on the <span className="bold-orange">Set Load Finish</span> button</li>
            <li>2. Select Exit from the <span className="bold-orange">Lot</span> drop down</li>
            <li>3. Click on the <span className="bold-orange">Save Changes</span> button</li>
        </ul>
        <img src={live_5} alt="live_5" height={"600px"} />
    </div>
  )
}

export default LoadingLive