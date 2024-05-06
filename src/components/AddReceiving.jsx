import traffic_hudson from '../assets/traffic_hudson.png'
import receiving_add from '../assets/receiving_add.png'
import add_rec_1 from '../assets/add_rec_1.png'
import add_rec_2 from '../assets/add_rec_2.png'
import add_rec_3 from '../assets/add_rec_3.png'

function AddReceiving() {
  return (
    <div>
        <h2 id="add-receiving">Add Receiving Job</h2>   
        <p>- Click on <span className="bold-orange">Hudson Traffic</span> to load traffic menu</p>
        {/* put traffic_hudson.png here */}
        <img src={traffic_hudson} alt="traffic_hudson" />
        <p>- Click on <span className="bold-orange">Receiving Schedule New</span> to add a receiving job</p>
        {/* put receiving_add.png here */}
        <img src={receiving_add} alt="receiving_add" />
        <ul className="list">
            <li>Click to select <span className="bold-orange">Order Date</span></li>
            <li>The <span className="bold-orange">Appt #</span> is auto generated nothing to do here</li>
            <li>Select <span className="bold-orange">Time Slot</span> from the drop down</li>
            <li>
                Select a <span className="bold-orange">Load Type</span>
                <ul className="sub-list">
                    <li>Live</li>
                    <li>Spot</li>
                </ul>
            </li>                    
            <li>Click on the <span className="bold-orange">Cancel</span> button to cancel the add load</li>
        </ul>                
        {/* put add-rec-1.png here */}
        <img src={add_rec_1} alt="add_rec_1" />
        <p>- Fill out the below fields in the second section</p>
        <ul className="list">
            <li>
                Select a <span className="bold-orange">Job Type</span>
                <ul className="sub-list">
                    <li>Load</li>
                    <li>Unload</li>
                </ul>
            </li>    
            <li>If <span className="bold-orange">Vendor Name</span> is not in list, click on the <span className="bold-orange">Create</span> button</li>
            <li>After you&apos;ve created <span className="bold-orange">Vendor Name</span> click on the <span className="bold-orange">Update Vendors</span> button to refresh the dropdown</li>
            <li>Select your <span className="bold-orange">Vendor Name</span> from the drop dropdown</li>
            <li>Follow the above steps for <span className="bold-orange">Carrier Name</span> if it&apos;s not in the dropdown</li>
            <li>Select your <span className="bold-orange">Carrier Name</span> from the drop down</li>
            <li>Select <span className="bold-orange">Status</span> from the drop down</li>                                  
        </ul>
        {/* put receiving-2.png here  */}
        <img src={add_rec_2} alt="add_rec_2" />
        <p>- Fill out the below fields in the last section</p>
        <ul className="list">
            <li>Select <span className="bold-orange">Coordinator</span> from the drop down</li>
            <li>Enter the <span className="bold-orange">Requested Trailer</span> number, if required</li>
            <li><span className="bold-orange">If you don&apos;t know your trailer number, open another tab and go to docklot</span></li>
            <li>Enter the <span className="bold-orange">Item List</span></li>
            <li>Enter the <span className="bold-orange">Comments</span></li>
        </ul>
        {/* put receiving-3.png here */}
        <img src={add_rec_3} alt="add_rec_3" />
        <h2>Click on <span className="bold-orange">Create</span> to add your job to receiving schedule!!</h2>
    </div>
  )
}

export default AddReceiving