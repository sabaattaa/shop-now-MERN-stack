import { useEffect, useState } from "react";
import { TableData } from "../dumyData";

export const useTableLogic = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [deleteItems, setDeleteItems] = useState<string[]>([]);
  const actionss = ["Edit", "Delete", "View"];
  const [idmatch, setIdmatch]: any = useState(null);
  const [action, setAction]: any = useState(false);
 const [checkedItems, setCheckedItems] = useState<boolean[]>(
   TableData.map(() => false)
 );
     const uniqueKeys = [
       ...new Set(TableData.flatMap((product) => Object.keys(product))),
     ].filter((key) => key !== "image");


      useEffect(() => {
        const allChecked = checkedItems.every(Boolean);
        if (allChecked) {
          setAllChecked(true);
        } else {
          setAllChecked(false);
        }
      }, [checkedItems]);

      useEffect(() => {
        if (allChecked) {
          setDeleteItems(TableData.map((item) => item.id));
        } else {
          setDeleteItems([]);
        }
      }, [allChecked]);







  return {
    actionss,
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
  };
};
