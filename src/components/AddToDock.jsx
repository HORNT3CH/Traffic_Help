import add_trailer from '../assets/add_trailer.png'
import add_dock_1 from '../assets/add_dock_1.png'
import add_dock_2 from '../assets/add_dock_2.png'
import add_dock_3 from '../assets/add_dock_3.png'
import add_dock_4 from '../assets/add_dock_4.png'
import add_dock_5 from '../assets/add_dock_5.png'
import add_dock_6 from '../assets/add_dock_6.png'
import add_dock_6a from '../assets/add_dock_6a.png'
import add_dock_6b from '../assets/add_dock_6b.png'
import add_dock_7 from '../assets/add_dock_7.png'
import add_dock_8 from '../assets/add_dock_8.png'
import add_dock_9 from '../assets/add_dock_9.png'
import add_dock_10 from '../assets/add_dock_10.png'
import add_dock_11 from '../assets/add_dock_11.png'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '10px',
    marginBottom: '20px',
}

function AddToDock() {
  return (
    <div>
        <h2>Add to Dock <span className="bold-orange">USE THE SAME PROCESS FOR ADD TO LOT</span>(ONLY USE <span className="bold-orange">SELECT LOT</span> INSTEAD OF <span className="bold-orange">SELECT DOCK</span>)</h2>
        <img src={add_trailer} alt="add_trailer" />
        <div className="add-dock-side" style={gridStyle}>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Carrier Name</span> drop down</p>
                <img src={add_dock_1} alt="add_dock_1" />
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Carrier Name</span> from the drop down</p>
                <img src={add_dock_2} alt="add_dock_2" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Dimension</span> drop down</p>
                <img src={add_dock_3} alt="add_dock_3" />
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Dimension</span> from the drop down</p>
                <img src={add_dock_4} alt="add_dock_4" />
            </div>
            <div className="gridItem">
                <h3>For <span className="bold-orange">ADD TO DOCK</span></h3>
                <p>- Click on the <span className="bold-orange">Location</span> drop down</p>
                <img src={add_dock_5} alt="add_dock_5" />
            </div>
            <div className="gridItem">
                <h3>For <span className="bold-orange">ADD TO DOCK</span></h3>
                <p>- Select a <span className="bold-orange">Location</span> from the drop down</p>
                <img src={add_dock_6} alt="add_dock_6" />
            </div>
            <div className="gridItem">
                <h3>For <span className="bold-orange">ADD TO LOT</span></h3>
                <p>- Click on the <span className="bold-orange">Location</span> drop down</p>
                <img src={add_dock_6a} alt="add_dock_6a" />
            </div>
            <div className="gridItem">
                <h3>For <span className="bold-orange">ADD TO LOT</span></h3>
                <p>- Select a <span className="bold-orange">Location</span> from the drop down</p>
                <img src={add_dock_6b} alt="add_dock_6b" />
            </div>
            <div className="gridItem">
                <p>- Type in the <span className="bold-orange">Trailer Number</span></p>
                <img src={add_dock_7} alt="add_dock_7" />
            </div>
            <div className="gridItem">
                <p>- Type in the <span className="bold-orange">Comments</span>, if any</p>
                <img src={add_dock_8} alt="add_dock_8" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Status</span> drop down</p>
                <img src={add_dock_9} alt="add_dock_9" />       
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Status</span> from the drop down</p>
                <img src={add_dock_10} alt="add_dock_10" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Add Trailer</span> button to save the details</p>
                <p>- Click on the <span className="bold-orange">Cancel</span> button to cancel adding trailer</p>
                <img src={add_dock_11} alt="add_dock_11" />
            </div>
        </div>
    </div>
  )
}

export default AddToDock