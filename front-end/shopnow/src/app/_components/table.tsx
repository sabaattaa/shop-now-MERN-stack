"use client";
import ButtonField from "./button";
import Pagination from "./pagination";
import Image from "next/image";
import woment from "../media/1.jpg";
import { useTableLogic } from "../customsHooks/useTableLogic";
type TableProps = {
  tableHeaders: string[];
  TableData: Record<string, any>[];
  btnText: string;
  btnLink?: string;
};
const Actions = () => {
  const { actionss } = useTableLogic();
  return (
    <div
      style={{
        // height: "50px",
        width: "100px",
        top: "35px",
        left: "-80px",
        backgroundColor: "white",
        borderRadius: "5px",
      }}
      className="b-gray position-absolute"
    >
      {actionss.map((item, index) => (
        <p
          key={index}
          style={{
            color: "gray",
            fontWeight: "500",
            textAlign: "center",
            margin: "0px",
            cursor: "pointer",
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
};

const Table: React.FC<TableProps> = ({
  tableHeaders,
  TableData,
  btnText,
  btnLink,
}) => {
  const {
    allChecked,
    setAllChecked,
    deleteItems,
    setDeleteItems,
    idmatch,
    setIdmatch,
    action,
    setAction,
    checkedItems,
    setCheckedItems,
    uniqueKeys,
  } = useTableLogic();

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
            console.log("object");
          }}
          disabled={false}
          className={""}
          //   style={""}
          children={"Delete"}
        />
        <ButtonField
          name={"addProduct"}
          type="button"
          onClick={() => {}}
          disabled={false}
          className={""}
          //   style={""}
          children={btnText}
          link={btnLink}
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
                  checked={allChecked}
                  style={{ transform: " scale(1.5)" }}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setAllChecked(e.target.checked);
                    setCheckedItems(TableData.map(() => e.target.checked));
                  }}
                />
              </th>

              {tableHeaders?.map((item, index) => {
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
            {TableData.map((product, index) => (
              <tr key={product.id} className="btm-gray w-100">
                <td>
                  <input
                    type="checkbox"
                    checked={checkedItems[index]}
                    style={{ transform: "scale(1.5)" }}
                    onChange={(e) => {
                      const isChecked = e.target.checked;

                      const newSelectItems = [...checkedItems];
                      newSelectItems[index] = !newSelectItems[index];
                      setCheckedItems(newSelectItems);

                      if (isChecked) {
                        setDeleteItems([...deleteItems, product.id]);
                      } else {
                        const newDelItems = [...deleteItems];
                        newDelItems.splice(index, 1);
                        setDeleteItems(newDelItems);
                      }
                    }}
                  />
                </td>

                {/* Image Column */}
                <td className="py-1">
                  <Image
                    src={woment}
                    height={40}
                    width={60}
                    className="rounded-1"
                    style={{ objectFit: "cover" }}
                    alt="Product Image"
                  />
                </td>
                {uniqueKeys.map((field: any) => (
                  <td key={`${product.id}-${field}`} className="w-100d">
                    {product[field as keyof typeof product] || "-"}
                  </td>
                ))}

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
