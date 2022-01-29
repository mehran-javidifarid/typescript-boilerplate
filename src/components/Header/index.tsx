import React, {FC} from 'react';
import {Grid, Typography, AppBar, Toolbar} from "@mui/material";
import {Logout} from '@mui/icons-material'
import CButton from "../Button";

interface IHeader {
  title: string
}

const Header: FC<IHeader> = ({title}) => {
  const handleLogout = () => {
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <AppBar position="static">
      <Toolbar>

        {title && <Grid><Typography>{title}</Typography></Grid>}
        <Grid flexDirection={'revert'}>
          <CButton variant={'text'} onClick={handleLogout}>
            <Logout style={{color: '#fff'}}/>
          </CButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
export default Header
