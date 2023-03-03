import React from 'react';
import {TextField} from "@mui/material";
import Link from "next/link";
import variables from "@/styles/variables.module.scss";
import {AccountCircle} from "@mui/icons-material";




function Navbar(props) {
    return (
        <nav className={"flex justify-evenly items-center gap-[4vw] "}>
            <img src={'/assets/logo.png'} alt="logo" className={"w-20"} />
            <div className={"flex-1"}>
                <TextField id="outlined-basic" variant="outlined" className={"relative"} fullWidth placeholder={"Search"}/>
            </div>



            <Link href={"#"} >

                <h3 style={{color:variables.primaryColor , fontWeight:"bold"}}>
                    My wishlist
                </h3>

                </Link>
            <Link href={"#"}>

                <h3 style={{color:variables.primaryColor , fontWeight:"bold"}}>
                    My bundles
                </h3>

            </Link>

            <Link href={"#"}>

                <h3 style={{color:variables.primaryColor , fontWeight:"bold"}}>
                    Compare deals
                </h3>

            </Link>

            <Link href={"#"}>
                <AccountCircle style={{color:variables.primaryColor}} fontSize={"large"}/>
            </Link>

        </nav>
    );
}

export default Navbar;