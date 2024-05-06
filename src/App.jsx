import React, { useState } from 'react';
import PropTypes from 'prop-types';
import AddShipping from './components/AddShipping.jsx';
import AddReceiving from './components/AddReceiving.jsx';
import ShippingSideMenu from './components/ShippingSideMenu.jsx';
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
      <h1>Traffic Help</h1>
      <ul>
        <li className="item" onClick={() => onSelect('Component1')}>Add Shipping Load</li>
        <li className="item" onClick={() => onSelect('Component2')}>Shipping Side Menu</li>
        <li className="item" onClick={() => onSelect('Component3')}>Add Receiving Job</li>
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
      case 'Component1':
        return <AddShipping />;
      case 'Component2':
        return <ShippingSideMenu />;
      case 'Component3':
        return <AddReceiving />;
      default:
        return null;
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