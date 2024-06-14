import '@fortawesome/fontawesome-free/css/all.css'
import sched_side_1 from '../assets/sched_side_1.png'
import sched_side_2 from '../assets/sched_side_2.png'
import sched_side_3 from '../assets/sched_side_3.png'
import sched_side_4 from '../assets/sched_side_4.png'
import sched_side_5 from '../assets/sched_side_5.png'
import sched_side_6 from '../assets/sched_side_6.png'
import sched_side_7 from '../assets/sched_side_7.png'
import sched_side_8 from '../assets/sched_side_8.png'
import sched_side_9 from '../assets/sched_side_9.png'
import sched_side_10 from '../assets/sched_side_10.png'
import sched_side_11 from '../assets/sched_side_11.png'
import sched_side_12 from '../assets/sched_side_12.png'
import sched_side_13 from '../assets/sched_side_13.png'
import sched_side_14 from '../assets/sched_side_14.png'
import sched_side_15 from '../assets/sched_side_15.png'
import sched_side_16 from '../assets/sched_side_16.png'
import sched_side_17 from '../assets/sched_side_17.png'
import sched_side_18 from '../assets/sched_side_18.png'

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '10px',
  marginBottom: '20px',
}

function ShippingSideMenu() {
  return (
    <div>
      <h2 id="add">Shipping Side Menu</h2>
      <div className="receiving-side" style={gridStyle}>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange bordered"><i className="fas fa-bars"></i></span> to show the side menu</p>
          <img src={sched_side_1} alt="sched_side_1" />
        </div>
        <div className="gridItem">
          <p>- Click on <span className="bold-orange"> Status </span>drop down</p>
          <img src={sched_side_2} alt="sched_side_2" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange"> Status </span>from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_3} alt="sched_side_3" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Load Type</span> drop down</p>
          <img src={sched_side_4} alt="sched_side_4" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Load Type</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_5} alt="sched_side_5" />
        </div>
        <div className="gridItem">
          <p>- Type in the <span className="bold-orange">Search By MBOL#</span> and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_6} alt="sched_side_6" />
        </div>
        <div className="gridItem">
          <p>- Type in the <span className="bold-orange">Search By Load #</span> and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_7} alt="sched_side_7" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Coordinators</span> drop down</p>
          <img src={sched_side_8} alt="sched_side_8" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Coordinator</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_9} alt="sched_side_9" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Carrier</span> drop down</p>
          <img src={sched_side_10} alt="sched_side_10" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Carrier</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_11} alt="sched_side_11" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Customer</span> drop down</p>
          <img src={sched_side_12} alt="sched_side_12" />
        </div>
        <div className="gridItem">
          <p>- Select a <span className="bold-orange">Customer</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_13} alt="sched_side_13" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Order Date</span> and select a date then click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_14} alt="sched_side_14" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Pickup Date</span> and select a date then click on the <span className="bold-orange">Search</span> button</p>
          <img src={sched_side_15} alt="sched_side_15" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">From Date</span> and select a date</p>
          <p className="bold-orange">YOU MUST USE &quot;FROM DATE&quot; with the &quot;TO DATE&quot;</p>          
          <img src={sched_side_16} alt="sched_side_16" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">To Date</span> and select a date</p>
          <p className="bold-orange">YOU MUST USE &quot;TO DATE&quot; with the &quot;FROM DATE&quot;</p>
          <img src={sched_side_17} alt="sched_side_17" />
        </div>
        <div className="gridItem">
          <p>- Click on the <span className="bold-orange">Search</span> button</p>
          <br />
          <br />
          <img src={sched_side_18} alt="sched_side_18" />
        </div>
      </div>
    </div>
  )
}

export default ShippingSideMenu