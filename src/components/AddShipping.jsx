import traffic_hudson from '../assets/traffic_hudson.png'
import traffic_add from '../assets/traffic_add.png'
import add_1 from '../assets/add-1.png'
import add_2 from '../assets/add-2.png'
import add_3 from '../assets/add-3.png'
import add_4 from '../assets/add-4.png'
import '../Help.css'

function AddShipping() {
  return (
    <>
        <h2 id="add">Adding Shipping Load</h2>
        <p>- Click on <span className="bold-orange">Hudson Traffic</span> to load traffic menu</p>
        {/* put traffic_hudson.png here */}
        <img src={traffic_hudson} alt="traffic_hudson" />
        <p>- Click on <span className="bold-orange">Shipping Schedule New</span> to add a load</p>
        {/* put traffic_add.png here */}
        <img src={traffic_add} alt="traffic_add" />
        <p>- Fill out the below fields in the first section</p>
        <ul className="list">
            <li>Click to select <span className="bold-orange">Pickup Date</span></li>
            <li>Use drop down to select a <span className="bold-orange">Pickup Time</span></li>
            <li>
                Select a <span className="bold-orange">Load Type</span>
                <ul className="sub-list">
                    <li>Live</li>
                    <li>Spot</li>
                    <li>HOTLTL</li>
                    <li>Unload</li>
                </ul>
            </li>
            <li>Type in the <span className="bold-orange">MBOL #</span></li>
            <li>Type in the <span className="bold-orange">Load #</span>, if different from MBOL #</li>
            <li>Click on the <span className="bold-orange">Cancel</span> button to cancel the add load</li>
        </ul>
        {/* put add-1.png here */}
        <img src={add_1} alt="add-1" />
        <p>- Fill out the below fields in second section</p>
        <ul className="list">
            <li>Select <span className="bold-orange">Customer Name</span> from the dropdown</li>
            <li>If <span className="bold-orange">Customer Name</span> is not in list, click on the <span className="bold-orange">Create</span> button</li>
            <li>After you've created <span className="bold-orange">Customer Name</span> click on the <span className="bold-orange">Update Customer</span> button to refresh the dropdown</li>
            <li>Select your <span className="bold-orange">Customer Name</span> from the drop dropdown</li>
            <li>Follow the above steps for <span className="bold-orange">City Name</span> if it's not in the dropdown</li>
            <li>Select your <span className="bold-orange">City Name</span> from the drop down</li>
            <li>Select <span className="bold-orange">State</span> from the drop down</li>
            <li>Repeat those step again if <span className="bold-orange">Carrier Name</span> is not in the list</li>
            <li>Select your <span className="bold-orange">Carrier Name</span> from the drop down</li>
            <li>Enter the <span className="bold-orange"># Cartons</span></li>                
        </ul>
        {/* put add-2.png here */}
        <img src={add_2} alt="add-2" />
        <p>- Fill out the below fields in the third section</p>
        <ul className="list">
            <li>Enter the <span className="bold-orange">Cube</span></li>
            <li>Enter the <span className="bold-orange">#Stops</span></li>
            <li>Select the <span className="bold-orange">Coordinator</span> from the drop down</li>
            <li>Select the <span className="bold-orange">Status</span> fromt the drop down</li>
            <li>The <span className="bold-orange">Appt #</span> is auto-generated no need to do anything</li> 
        </ul>
        {/* put add-3.png here */}
        <img src={add_3} alt="add-3" />
        <p>- Fill out the below fields in the last section</p>      
        <ul className="list">
            <li>Enter the <span className="bold-orange">Comments</span></li>
            <li>The <span className="bold-orange">Date Entered</span> will be default to todays date</li>
            <li>Enter the <span className="bold-orange">Pickup State</span></li>
            <li>Enter the <span className="bold-orange">Load Value</span></li>
            <li>The <span className="bold-orange">Load Status</span> will be Created by default</li>
            <li>Enter the <span className="bold-orange">Requested Trailer</span> number, if required</li>
            <li><span className="bold-orange">If you don't know your trailer number, open another tab and go to docklot</span></li>
        </ul>                   
        {/* put add-4.png here */}
        <img src={add_4} alt="add-4" />
        <h2>Click on <span className="bold-orange">Create</span> to add your load to shipping schedule!!</h2>                    
    </>
  )
}

export default AddShipping