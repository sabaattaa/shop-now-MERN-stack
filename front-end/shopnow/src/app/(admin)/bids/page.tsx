import Table from "@/app/_components/table";
import { TableData } from "@/app/dumyData";
import React from "react";

const Products = () => {
  return (
    <div>
      <Table
        tableHeaders={[
          "Image",
          "Id",
          "Name",
          "Description",
          "Price",
          "Quantity",
          "SKU",
        ]}
        TableData={TableData}
        btnText={"Add Product"}
        btnLink={"/addProduct"}
      />
    </div>
  );
};

export default Products;
