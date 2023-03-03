import React, { useEffect, useState } from "react";
import Navbar from "@/component/navbar";
import { Button, IconButton, TextField } from "@mui/material";
import { Add } from "@mui/icons-material";
import axios from "axios";
import ProductCard from "@/component/productCard";
import Router, { useRouter } from "next/router";
import { useSelector } from "react-redux";

function Index(props) {
  const [Bundles, setBundles] = useState([]);
  const [BundleName, setBundleName] = useState("");
  const [productData, setProductData] = useState({});

  const { query } = useRouter();

  async function fetchBundles() {
    const response = await axios.get(
      `${process.env.BASE_URL}/api/bundles/getAll`
    );
    setBundles(response.data);
  }

  async function addNewBundle(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6969/api/bundles", {
        name: BundleName,
      });
      alert("New Bundle Added");
      await fetchBundles();
    } catch (error) {
      console.log("error in fetching");
    }
  }

  async function addProductToBundle(e, BundleID) {
    e.preventDefault();
    setProductData(JSON.parse(query.product));

    try {
      const res = await axios.post(
        `http://localhost:6969/api/bundles/addProduct/${BundleID}`,
        productData
      );
      alert("New Bundle Added");
      await fetchBundles();
    } catch (error) {
      console.log("error in adding product to bundle");
    }

    // Router.reload(window.location.pathname);
  }

  useEffect(() => {
    // console.log(product);
    fetchBundles();
  }, []);

  return (
    <>
      <Navbar />
      <div className={"flex justify-center items-center mb-[10vh]"}>
        <div className={"  w-[350px]  relative mt-[10vh]"}>
          <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label={"Add a new bundle"}
            onChange={(e) => setBundleName(e.target.value)}
          />

          {/*<Button >Add bundle</Button>*/}
          <IconButton
            color={"primary"}
            size={"large"}
            className={"absolute top-1 right-2"}
            onClick={(e) => {
              addNewBundle(e);
            }}
          >
            <Add />
          </IconButton>
        </div>
      </div>

      <div className={"flex flex-col gap-y-5"}>
        {Bundles.map((Bundle, index) => (
          <div className={"rounded shadow-lg shadow-gray-200 "} key={index}>
            <div
              className={
                "flex justify-between px-5 pt-5 text-xl font-bold text-primary border-b-2 border-gray-200 items-center"
              }
            >
              <div>{Bundle.name}</div>

              <IconButton
                color={"primary"}
                size={"large"}
                onClick={(e) => {
                  addProductToBundle(e, Bundle._id);
                }}
              >
                <Add />
              </IconButton>
            </div>

            {Bundle["products"].length !== 0 && (
              <div className={"grid grid-cols-4 gap-4 px-5 py-8"}>
                {Bundle["products"].map((product, index) => {
                  return (
                    <ProductCard
                      key={index}
                      product={product}
                      inBundle={true}
                    />
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Index;
