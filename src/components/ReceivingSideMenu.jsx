import rec_side_1 from '../assets/rec_side_1.png'
import rec_side_2 from '../assets/rec_side_2.png'
import rec_side_3 from '../assets/rec_side_3.png'
import rec_side_4 from '../assets/rec_side_4.png'
import rec_side_5 from '../assets/rec_side_5.png'
import rec_side_6 from '../assets/rec_side_6.png'
import rec_side_7 from '../assets/rec_side_7.png'
import rec_side_8 from '../assets/rec_side_8.png'
import rec_side_9 from '../assets/rec_side_9.png'
import rec_side_10 from '../assets/rec_side_10.png'
import rec_side_11 from '../assets/rec_side_11.png'
import rec_side_12 from '../assets/rec_side_12.png'
import rec_side_13 from '../assets/rec_side_13.png'
import rec_side_14 from '../assets/rec_side_14.png'
import rec_side_15 from '../assets/rec_side_15.png'
import rec_side_16 from '../assets/rec_side_16.png'
import rec_side_17 from '../assets/rec_side_17.png'
import rec_side_18 from '../assets/rec_side_18.png'

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '10px',
  marginBottom: '20px',
}

function ReceivingSideMenu() {
  return (
    <div>
      <h2 id="add">Receiving Side Menu</h2>
      <div className="receiving-side" style={gridStyle}>        
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange bordered"><i className="fas fa-bars"></i></span> to show the side menu</p>
          <img src={rec_side_1} alt="rec_side_1" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Status</span> drop down</p>
          <img src={rec_side_2} alt="rec_side_2" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Status</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_3} alt="rec_side_3" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Job Type</span> drop down</p>
          <img src={rec_side_4} alt="rec_side_4" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Job Type</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_5} alt="rec_side_5" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Load Type</span> drop down</p>
          <img src={rec_side_6} alt="rec_side_6" />
        </div>
        <div className="gridItem">
          <p>- Select the <span className="bold-orange">Load Type</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_7} alt="rec_side_7" />
        </div>
        <div className="gridItem">
          <p>- Enter a Appt # in <span className="bold-orange">Search By Appt#</span> and click on <span className="bold-orange">Search</span></p>
          <img src={rec_side_8} alt="rec_side_8" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Coordinators</span> drop down</p>
          <img src={rec_side_9} alt="rec_side_9" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Coordinator</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_10} alt="rec_side_10" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Vendor</span> drop down</p>
          <img src={rec_side_11} alt="rec_side_11" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Vendor</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_12} alt="rec_side_12" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Carrier</span> drop down</p>
          <img src={rec_side_13} alt="rec_side_13" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Carrier</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={rec_side_14} alt="rec_side_14" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Order Date</span> and select a date, then click on <span className="bold-organge">Search</span></p>
          <img src={rec_side_15} alt="rec_side_15" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">From Date</span> and select a date</p>
          <p className="bold-orange">YOU MUST USE &quot;FROM DATE&quot; with the &quot;TO DATE&quot;</p>          
          <img src={rec_side_16} alt="rec_side_16" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">To Date</span> and select a date</p>
          <p className="bold-orange">YOU MUST USE &quot;TO DATE&quot; with the &quot;FROM DATE&quot;</p>
          <img src={rec_side_17} alt="rec_side_17" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Search</span> button to view your selected criteria</p>
          <img src={rec_side_18} alt="rec_side_18" />
        </div>
      </div>
    </div>
  )
}

export default ReceivingSideMenu