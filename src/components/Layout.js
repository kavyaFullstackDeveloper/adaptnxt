import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';

const Layout = () => (
  <Sidebar>
    <Menu
      menuItemStyles={{
        button: {
          [`&.active`]: {
            backgroundColor: '#fbfdff',
            color: '#2a2b2c',
          },
        },
      }}
    >
      <nav>
        <MenuItem>
          <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/inventory" style={{ textDecoration: 'none', color: 'inherit' }}>Inventory</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/order" style={{ textDecoration: 'none', color: 'inherit' }}>Order</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/returns" style={{ textDecoration: 'none', color: 'inherit' }}>Returns</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/customers" style={{ textDecoration: 'none', color: 'inherit' }}>Customers</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/shipping" style={{ textDecoration: 'none', color: 'inherit' }}>Shipping</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/channel" style={{ textDecoration: 'none', color: 'inherit' }}>Channel</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/integrations" style={{ textDecoration: 'none', color: 'inherit' }}>Integrations</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/calculators" style={{ textDecoration: 'none', color: 'inherit' }}>Calculators</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>Reports</NavLink>
        </MenuItem>
        <MenuItem>
          <NavLink to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>Account</NavLink>
        </MenuItem>
      </nav>
    </Menu>
  </Sidebar>
);

export default Layout;
