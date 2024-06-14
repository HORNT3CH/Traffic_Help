import traffic_hudson from '../assets/traffic_hudson.png'
import traffic_add from '../assets/traffic_add.png'
import add_1 from '../assets/add-1.png'
import add_2 from '../assets/add-2.png'
import add_3 from '../assets/add-3.png'
import add_4 from '../assets/add-4.png'
import '../Help.css'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    marginBottom: '20px',
}

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
        <div className="addShipGrid" style={gridStyle}>
            <div className="gridItem">
                <p>- Fill out the below fields in the first section</p>
                <ul className="list">
                    <li>1. Click to select <span className="bold-orange">Pickup Date</span></li>
                    <li>2. Use drop down to select a <span className="bold-orange">Pickup Time</span></li>
                    <li>
                        3. Select a <span className="bold-orange">Load Type</span>
                        <ul className="sub-list">
                            <li>Live</li>
                            <li>Spot</li>
                            <li>HOTLTL</li>
                            <li>Unload</li>
                            <br />
                        </ul>
                    </li>
                    <li>4. Type in the <span className="bold-orange">MBOL #</span></li>
                    <li>5. Type in the <span className="bold-orange">Load #</span>, if different from MBOL #</li>
                    <li>6. Click on the <span className="bold-orange">Cancel</span> button to cancel the add load</li>
                </ul>
                {/* put add-1.png here */}
                <img src={add_1} alt="add-1" />
            </div>
            <div className="gridItem">
                <p>- Fill out the below fields in second section</p>
                <ul className="list">
                    <li>1. Select <span className="bold-orange">Customer Name</span> from the dropdown</li>
                    <ul>
                        <li>If <span className="bold-orange">Customer Name</span> is not in list, click on the <span className="bold-orange">Create</span> button</li>
                        <li>After you&apos;ve created <span className="bold-orange">Customer Name</span> click on the <span className="bold-orange">Update Customer</span> button to refresh the dropdown</li>
                        <li>Select your <span className="bold-orange">Customer Name</span> from the drop dropdown</li>
                    </ul>                    
                    <li>2. Follow the above steps for <span className="bold-orange">City Name</span> if it&apos;s not in the dropdown</li>
                    <li>Select your <span className="bold-orange">City Name</span> from the drop down</li>
                    <li>3. Select <span className="bold-orange">State</span> from the drop down</li>
                    <li>4. Repeat those step again if <span className="bold-orange">Carrier Name</span> is not in the list</li>
                    <li>Select your <span className="bold-orange">Carrier Name</span> from the drop down</li>
                    <li>5. Enter the <span className="bold-orange"># Cartons</span></li>                
                </ul>
                {/* put add-2.png here */}
                <img src={add_2} alt="add-2" />
            </div>
            <div className="gridItem">
                <p>- Fill out the below fields in the third section</p>
                <ul className="list">
                    <li>1. Enter the <span className="bold-orange">Cube</span></li>
                    <li>2. Enter the <span className="bold-orange">#Stops</span></li>
                    <li>3. Select the <span className="bold-orange">Coordinator</span> from the drop down</li>
                    <li>4. Select the <span className="bold-orange">Status</span> fromt the drop down</li>
                    <li>5. The <span className="bold-orange">Appt #</span> is auto-generated no need to do anything</li> 
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </ul>
                {/* put add-3.png here */}
                <img src={add_3} alt="add-3" />
            </div>
            <div className="gridItem">
                <p>- Fill out the below fields in the last section</p>      
                <ul className="list">
                    <li>1. Enter the <span className="bold-orange">Comments</span></li>
                    <li>2. The <span className="bold-orange">Date Entered</span> will be default to todays date</li>                    
                    <li>3. Enter the <span className="bold-orange">Load Value</span></li>
                    <li>4. The <span className="bold-orange">Load Status</span> will be Created by default</li>
                    <li>5. Enter the <span className="bold-orange">Requested Trailer</span> number, if required</li>
                    <li><span className="bold-orange">If you don&apos;t know your trailer number, open another tab and go to docklot</span></li>
                </ul>                   
                {/* put add-4.png here */}
                <img src={add_4} alt="add-4" />
                <h2>6. Click on <span className="bold-orange">Create</span> to add your load to shipping schedule!!</h2>
            </div>
        </div>              
    </>
  )
}

export default AddShipping