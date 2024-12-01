"use client";
import React, {  useState } from "react";
import ButtonField from "./button";
import Pagination from "./pagination";
import Image from "next/image";
import woment from "../media/1.jpg";

type TableProps = {
  tableHeaders: string[];
  TableData: Record<string, any>[];
  seqTableData: Record<string, any>[];
  btnText: string;
  btnLink?: string;
};
const products = [
  {
    id: "P001",
    name: "Product 1",
    description: "Description of product 1",
    price: "$10.00",
    quantity: 20,
    sku: "SKU001",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "P002",
    name: "Product 2",
    description: "Description of product 2",
    price: "$15.00",
    quantity: 30,
    sku: "SKU002",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "P003",
    name: "Product 3",
    description: "Description of product 3",
    price: "$20.00",
    quantity: 50,
    sku: "SKU003",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "P004",
    name: "Product 4",
    description: "Description of product 4",
    price: "$25.00",
    quantity: 100,
    sku: "SKU004",
    image: "https://via.placeholder.com/50",
  },
  {
    id: "P005",
    name: "Product 5",
    description: "Description of product 5",
    price: "$30.00",
    quantity: 10,
    sku: "SKU005",
    image: "https://via.placeholder.com/50",
  },
];

const Actions = () => {
  const action = ["Edit", "Delete", "View"];
  return (
    <div
      style={{
        height: "50p",
        width: "100px",
        top: "35px",
        left: "-80px",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
      className="b-gray position-absolute"
    >
      {action.map((item) => (
      
          <p
            style={{
              color: "gray",
              fontWeight: "500",
              textAlign: "center",
              margin: "0px",
              cursor: "pointer",
              // '&:hover{color:"red}'
            }}
          >
            {item}
          </p>
         
      ))}
    </div>
    // </div>
  );
};

const headers = [
  "Image",
  "Id",
  "Name",
  "Description",
  "Price",
  "Quantity",
  "SKU",
];
const Table: React.FC<TableProps> = ({
  tableHeaders,
  TableData,
  seqTableData,
  btnText,
  btnLink,
}) => {
  const [defaultCheck, setDefaultCheck] = useState(false);
  const [idmatch, setIdmatch]: any = useState(null);
  const [action, setAction]: any = useState(false);
  const seqTableDatas = ["id","name","description","price","quantity","sku",]
  const DarkScreen = () => {
    return (
      <div
        className="position-absolute w-100 "
        style={{ backgroundColor: "transparent", height: "80vh" }}
        onClick={() => {
          setIdmatch(null);
          setAction(false);
        }}
      ></div>
    );
  };
  return (
    <div className="d-flex flex-column">
      {action && <DarkScreen />}
      <div
        className="p-2 d-flex justify-content-end w-100"
        style={{ gap: "10px" }}
      >
        <ButtonField
          name={"deletebtn"}
          type="button"
          onClick={() => {
            console.log("object")
          }}
          disabled={false}
          className={""}
          //   style={""}
          children={"Delete"}
        />
        <ButtonField
          name={"addProduct"}
          type="button"
          onClick={() => {

          }}
          disabled={false}
          className={""}
          //   style={""}
          children={"btnText"}
          link={"/addProduct"}
        />
      </div>
      <div className=" d-flex w-100 ps-2">
        <table className=" w-100">
          <thead className=" w-100 ">
            <tr className="btm-gray btp-gray">
              <th className="">
                <input
                  type="checkbox"
                  className="p-2 "
                  style={{ transform: " scale(1.5)" }}
                  // onChange={(e) => {
                  // }}
                  onClick={() => {
                    setDefaultCheck(true);
                    console.log("im clickisas", defaultCheck);
                  }}
                />
              </th>

              {headers?.map((item, index) => {
                return (
                  <th key={index} className="">
                    {item}
                  </th>
                );
              })}

              <th className="py-2  d-flex justify-content-center align-items-center  we-100">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="w-100">
            {products.map((product) => (
              <tr key={product.id} className="btm-gray w-100">
                {/* Checkbox Column */}
                <td>
                  <input
                    type="checkbox"
                    defaultChecked={defaultCheck}
                    style={{ transform: "scale(1.5)" }}
                  />
                </td>

                {/* Image Column */}
                <td className="py-1">
                  <Image
                    src={ woment} // Use product's image or fallback
                    height={40}
                    width={60}
                    className="rounded-1"
                    style={{ objectFit: "cover" }}
                    alt="Product Image"
                  />
                </td>

                {/* Dynamic Columns from seqTableDatas */}
                {seqTableDatas.map((field: any) => (
                  <td key={`${product.id}-${field}`} className="w-100d">
                    {product[field as keyof typeof product] || "-"}
                    {/* Display the value or a fallback */}
                  </td>
                ))}

                {/* Actions Column */}
                <td
                  className="d-flex justify-content-center align-items-center h-100 w-100 position-relative"
                  onClick={() => {
                    setIdmatch(product.id);
                    setAction(true);
                  }}
                >
                  {idmatch === product.id && <Actions />}
                  <i
                    style={{
                      transform: "rotate(90deg)",
                      transformOrigin: "left bottom",
                      whiteSpace: "nowrap",
                      fontWeight: "600",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                  >
                    ...
                  </i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        className="p-2 d-flex justify-content-end w-100"
        style={{ gap: "10px" }}
      >
        <Pagination />
      </div>
    </div>
  );
};

export default Table;
