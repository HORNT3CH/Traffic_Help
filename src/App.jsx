// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddShipping from './components/AddShipping.jsx';
import AddReceiving from './components/AddReceiving.jsx';
import ShippingSideMenu from './components/ShippingSideMenu.jsx';
import ReceivingSideMenu from './components/ReceivingSideMenu.jsx';
import LTLSideMenu from './components/LTLSideMenu.jsx';
import DocklotSideMenu from './components/DocklotSideMenu.jsx';
import AddToDock from './components/AddToDock.jsx';
import Staging from './components/Staging.jsx';
import Welcome from './components/Welcome.jsx';
import LoadingLive from './components/LoadingLive.jsx';
import LoadSpot from './components/LoadSpot.jsx';
import './App.css';


const menuStyle = {
  position: 'fixed',
  width: '250px',
  color: '#fff',
  backgroundColor: '#070586',
  padding: '20px',
  height: '100vh',
  boxSizing: 'border-box',
  left: 0,
  top: 0,
  textAlign: 'center',
};

const rightSideStyle = {
  marginLeft: '0px', // Remove left margin
  paddingLeft: '270px', // Add padding to compensate for the width of the menu
  backgroundColor: '#0c17e2', // Background color for the right side
  marginTop: '-20px', // Remove top border
  marginRight: '-20px', // Remove right border  
};


const Menu = ({ onSelect }) => {
  return (
    <div style = { menuStyle }>
      <h1 onClick={() => onSelect('Component0')}>Topics</h1>
      <ul>
        <li className="item" onClick={() => onSelect('Component1')}>Add Shipping Load</li>
        <li className="item" onClick={() => onSelect('Component2')}>Shipping Side Menu</li>
        <li className="item" onClick={() => onSelect('Component3')}>Add Receiving Job</li>
        <li className="item" onClick={() => onSelect('Component4')}>Receiving Side Menu</li>
        <li className="item" onClick={() => onSelect('Component5')}>LTL Side Menu</li>
        <li className="item" onClick={() => onSelect('Component6')}>Docklot Side Menu</li>
        <li className="item" onClick={() => onSelect('Component7')}>Add to Dock / Lot</li>
        <li className="item" onClick={() => onSelect('Component8')}>Staging a Load</li>
        <li className="item" onClick={() => onSelect('Component9')}>Loading a Live Load</li>
        <li className="item" onClick={() => onSelect('Component10')}>Load a Spot Trailer</li>
      </ul>
    </div>
  );
};

Menu.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

const App = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'Component0':
        return <Welcome />;
      case 'Component1':
        return <AddShipping />;
      case 'Component2':
        return <ShippingSideMenu />;
      case 'Component3':
        return <AddReceiving />;
      case 'Component4':
        return <ReceivingSideMenu />;
      case 'Component5':
        return <LTLSideMenu />;
      case 'Component6':
        return <DocklotSideMenu />;
      case 'Component7':
        return <AddToDock />;
      case 'Component8':
        return <Staging />;
      case 'Component9':
        return <LoadingLive />;
      case 'Component10':
        return <LoadSpot />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div>
      <Menu onSelect={setSelectedComponent} />
      <div style={ rightSideStyle }>
        {renderComponent()}
      </div>
    </div>
  );
};

export default App;
