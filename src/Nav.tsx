import { Link, resolvePath, useLocation } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

function Nav() {
  const location = useLocation();

  const isActiveRoute = (path: string): boolean => {
    const resolved = resolvePath(path);

    return location.pathname === resolved.pathname;
  };

  return (
    <Paper>
      <List
        component="nav"
        sx={{
          '& a': {
            color: 'text.primary',
            textDecoration: 'none'
          }
        }}
      >
        <Link to="/give-consent">
          <ListItemButton selected={isActiveRoute('/give-consent')}>
            <ListItemText primary="Give Consent" />
          </ListItemButton>
        </Link>
        <Link to="/collected-consents">
          <ListItemButton selected={isActiveRoute('/collected-consents')}>
            <ListItemText primary="Collected Consents" />
          </ListItemButton>
        </Link>
      </List>
    </Paper>
  );
}

export default Nav;
