const axios = require("axios");
const cheerio = require("cheerio");

const fetchProducts = async (searchKey, pageNo) => {
  try {
    const response = await axios.get(
      `https://www.amazon.in/s?k=${searchKey}&page=${pageNo}`
    );

    const html = response.data;
    const $ = cheerio.load(html);
    const data = [];

    $(".s-asin").each((i, el) => {
      const ProductId = $(el).attr("data-asin");
      const Brand = $(el).find("h5 .a-size-base-plus").text();
      const Name = $(el).find("h2 span").text();
      const Price = $(el).find(".a-price-whole").text();
      const Rating = $(el).find(".a-spacing-top-micro span").attr("aria-label");
      const Image = $(el).find(".s-image").attr("src");
      const Link =
        "https://www.amazon.in" + $(el).find(".a-link-normal").attr("href");
      const datas = { ProductId, Brand, Name, Price, Rating, Image, Link };
      data.push(datas);
    });

    return data;
  } catch (error) {
    throw error;
  }
};

module.exports = fetchProducts;
