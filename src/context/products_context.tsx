import axios from "axios";
import React, {
  useContext,
  useEffect,
  useReducer,
  createContext,
  ReactNode,
} from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";
import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from "../actions";
import { SidebarActions, SidebarState } from "../utils/interfaces";
import { isNullishCoalesce } from "typescript";

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const initialState = { isOpen: false };

const ProductsContext = createContext<{}>({});

export const ProductsProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN, payload: 1 });
  };

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE, payload: 1 });
  };

  return (
    <ProductsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
