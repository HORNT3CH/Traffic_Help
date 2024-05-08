import ltl_side_1 from '../assets/ltl_side_1.png'
import ltl_side_2 from '../assets/ltl_side_2.png'
import ltl_side_3 from '../assets/ltl_side_3.png'
import ltl_side_4 from '../assets/ltl_side_4.png'
import ltl_side_5 from '../assets/ltl_side_5.png'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    marginBottom: '20px',
}

function LTLSideMenu() {
  return (
    <div>
        <h2>LTL Side Menu</h2>
        <div className="ltl-side" style={gridStyle}>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange bordered"><i className="fas fa-bars"></i></span> to show the side menu</p>
                <img src={ltl_side_1} alt="ltl_side_1" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Status</span> drop down</p>
                <img src={ltl_side_2} alt="ltl_side_2" />
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Status</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
                <img src={ltl_side_3} alt="ltl_side_3" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Order Date</span>, select a date and click on <span className="bold-orange">Search</span></p>
                <img src={ltl_side_4} alt="ltl_side_4" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Search</span> button to view the results</p>
                <img src={ltl_side_5} alt="ltl_side_5" />
            </div>
        </div>
    </div>
  )
}

export default LTLSideMenu