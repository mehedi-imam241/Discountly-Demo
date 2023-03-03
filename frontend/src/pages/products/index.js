import React, {useEffect, useState} from 'react';
import ProductCard from "@/component/productCard";
import {IconButton, TextField} from "@mui/material";
import Link from "next/link";
import variables from "@/styles/variables.module.scss";
import {AccountCircle, Search} from "@mui/icons-material";
import Head from "next/head";
import axios from "axios";

function Index(props) {

    const [searchKey, setSearchKey] = useState('');
    const [products, setProducts] = useState([]);

    async function  getProducts() {
        const response = await axios.get('http://localhost:6969/api/products', { params: { searchkey: searchKey, pageno:1 } });
        setProducts(response.data)
    }

    // useEffect(() => {
    //     console.log(searchKey)
    // }, [searchKey])
    // // }





    return (
        <>

            <Head>
                <title>Discountly</title>
                <meta name="description" content="Automatically search for coupons on 30,000+ sites around the globe" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel={"icon"} href={"/assets/logo.png"} />
            </Head>
            <nav className={"flex justify-evenly items-center gap-[4vw] mb-10"}>
                <img src={'/assets/logo.png'} alt="logo" className={"w-20"} />
                <div className={"flex-1 flex items-center gap-3 relative"}>
                    <TextField id="outlined-basic" variant="outlined"
                               fullWidth placeholder={"Search a product"}
                               onChange={(e)=>setSearchKey(e.target.value)}/>

                    <IconButton color={"primary"} size={"large"} className={"absolute right-2"} onClick={()=> {
                        getProducts()}
                    }>
                        <Search />
                    </IconButton>
                    {/*<button className={"bg-primary px-5 py-3 text-white rounded "} >*/}
                    {/*    Search*/}
                    {/*</button>*/}
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

            <div className={"flex justify-evenly gap-4"}>
                <div className={"flex-[20%]"}>

                </div>
                <div className={"flex-[80%] grid grid-cols-3 gap-4"}>
                    {
                        products.map((product, index) => {
                            return (
                                <ProductCard key={index} product={product} />
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>


    );
}

export default Index;
