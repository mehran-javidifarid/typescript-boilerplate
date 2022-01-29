import React, { FC } from 'react'
import {Container,Grid} from "@mui/material";
import { Link } from "react-router-dom";

const Footer: FC=()=> {
    return (
        <footer className="footer-wrapper rtl">
            <Container>
                <Grid container>
                    <Grid item xs={4} className="text-right">
                       <Link to="/profile/info" className="footer-link d-inline-block vertical-middle">
                            {/*<img alt="User" src={User}/>*/}
                        </Link>
                    </Grid>
                    <Grid item xs={4} className="text-center">
                        <Link to="/" className="footer-link home d-inline-block vertical-middle">
                            {/*<img alt="Home" src={Home}/>*/}
                        </Link>
                    </Grid>
                    <Grid item xs={4} className="text-left">
                        <Link to="/" className="footer-link d-inline-block vertical-middle">
                            {/*<img alt="Barcode" src={Barcode}/>*/}
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    )
};

export default  Footer
