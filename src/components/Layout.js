import { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Assuming you're using Material-UI for the menu icon
import IconButton from '@mui/material/IconButton';
import { useMediaQuery } from '@mui/material';

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)'); // Media query to check if the screen is mobile-sized

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isMobile && (
        <IconButton onClick={toggleSidebar} style={{ position: 'absolute', top: 20, left: 20 }}>
          <MenuIcon />
        </IconButton>
      )}
      <Sidebar
        collapsed={isMobile && !isSidebarOpen} // Collapse the sidebar on mobile screens when not open
      >
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
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>Dashboard</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/inventory" style={{ textDecoration: 'none', color: 'inherit' }}>Inventory</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/order" style={{ textDecoration: 'none', color: 'inherit' }}>Order</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/returns" style={{ textDecoration: 'none', color: 'inherit' }}>Returns</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/customers" style={{ textDecoration: 'none', color: 'inherit' }}>Customers</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/shipping" style={{ textDecoration: 'none', color: 'inherit' }}>Shipping</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/channel" style={{ textDecoration: 'none', color: 'inherit' }}>Channel</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/integrations" style={{ textDecoration: 'none', color: 'inherit' }}>Integrations</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/calculators" style={{ textDecoration: 'none', color: 'inherit' }}>Calculators</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/reports" style={{ textDecoration: 'none', color: 'inherit' }}>Reports</NavLink>
            </MenuItem>
            <MenuItem onClick={isMobile ? toggleSidebar : undefined}>
              <NavLink to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>Account</NavLink>
            </MenuItem>
          </nav>
        </Menu>
      </Sidebar>
    </>
  );
};

export default Layout;
