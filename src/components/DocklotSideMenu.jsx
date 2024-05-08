import dock_side_1 from '../assets/dock_side_1.png'
import dock_side_2 from '../assets/dock_side_2.png'
import dock_side_3 from '../assets/dock_side_3.png'
import dock_side_4 from '../assets/dock_side_4.png'
import dock_side_5 from '../assets/dock_side_5.png'
import dock_side_6 from '../assets/dock_side_6.png'
import dock_side_7 from '../assets/dock_side_7.png'

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '10px',
    marginBottom: '20px',
}

function DocklotSideMenu() {
  return (
    <div>
        <h2>Docklot Side Menu</h2>
        <div className="dock-side" style={gridStyle}>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange bordered"><i className="fas fa-bars"></i></span> to show the side menu</p>
                <img src={dock_side_1} alt="dock_side_1" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Search By Lot</span> drop down</p>
                <img src={dock_side_2} alt="dock_side_2" />
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Lot</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
                <img src={dock_side_3} alt="dock_side_3" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Status</span> drop down</p>
                <img src={dock_side_4} alt="dock_side_4" />
            </div>
            <div className="gridItem">
                <p>- Select a <span className="bold-orange">Status</span> from the drop down and click on the <span className="bold-orange">Search</span> button</p>
                <img src={dock_side_5} alt="dock_side_5" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Date</span> and select a date and click on <span className="bold-orange">Search</span></p>
                <img src={dock_side_6} alt="dock_side_6" />
            </div>
            <div className="gridItem">
                <p>- Click on the <span className="bold-orange">Search</span> button to view the results</p>
                <img src={dock_side_7} alt="dock_side_7" />
            </div>
        </div>
    </div>
  )
}

export default DocklotSideMenu