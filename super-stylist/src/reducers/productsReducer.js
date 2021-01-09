export const prodSummerProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "SUMMER_REQUEST":
      return { loading: true, ...state };
    case "SUMMER_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return { ...state };
  }
};

export const prodWinterProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WINTER_REQUEST":
      return { loading: true, ...state };
    case "WINTER_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return { ...state };
  }
};

export const prodOfficeProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "OFFICE_REQUEST":
      return { loading: true, ...state };
    case "OFFICE_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return { ...state };
  }
};

export const prodWeddingProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WEDDING_REQUEST":
      return { loading: true, ...state };
    case "WEDDING_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return { ...state };
  }
};

//
//
//
//
//WOMEN
//
//
//
//

export const womenSummerProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WOMEN_SUMMER_REQUEST":
      return { loading: true, ...state };
    case "WOMEN_SUMMER_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return state;
  }
};

export const womenWinterProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WOMEN_WINTER_REQUEST":
      return { loading: true, ...state };
    case "WOMEN_WINTER_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return state;
  }
};

export const womenOfficeProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WOMEN_OFFICE_REQUEST":
      return { loading: true, ...state };
    case "WOMEN_OFFICE_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return state;
  }
};

export const womenWeddingProdReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case "WOMEN_WEDDING_REQUEST":
      return { loading: true, ...state };
    case "WOMEN_WEDDING_PRODUCT_LIST_SUCCESS":
      return { loading: false, products: [...action.payload] };
    default:
      return state;
  }
};
//
//
//
//
//
//
//
//
//
//
//
// export const loginreducer = (state = { user: {} }, action) => {
//   switch (action.type) {
//     case "LOGIN_SUCCESS":
//       return { user: action.payload };
//     default:
//       return { user: {} };
//   }
// };
