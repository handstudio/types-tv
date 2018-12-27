import tizen = require('./index')

export enum FilterMatchFlag {
  "EXACTLY",
  "FULLSTRING",
  "CONTAINS",
  "STARTSWITH",
  "ENDSWITH",
  "EXISTS" 
}

export enum SortModeOrder {
  "ASC",
  "DESC"
}

export enum CompositeFilterType {
  "UNION",
  "INTERSECTION"
}

declare module './index' {
  type double = number;
  type long = number;
  type ulong = number;
  type DOMString = string;
  type SuccessCallback = () => void;
  // type ErrorCallback = (error: WebAPIError) => void;

  interface TizenStatic {
    
  }
 
  interface AbstractFilter {

  }

  interface AttributeFilter extends AbstractFilter {
    // constructor(attributeName:DOMString, matchFlag?:FilterMatchFlag, matchValue?:any)
    attributeName:DOMString;
    matchFlag:FilterMatchFlag;
    matchValue:any;
  }

  
  interface AttributeRangeFilter extends AbstractFilter {
    // constructor(attributeName:DOMString, initialValue:any, endValue:any)
    attributeName:DOMString;
    initialValue:any;
    endValue:any;
  }

  interface CompositeFilter extends AbstractFilter {
    // constructor(type:CompositeFilterType, filters?:AbstractFilter[])
    type:CompositeFilterType;
    filters:AbstractFilter[];
  }

  
  interface SortMode {
    // constructor(attributeName:DOMString, order?:SortModeOrder)
    attributeName:DOMString;
    order:SortModeOrder;
  }

  interface SimpleCoordinates {
    latitude:double;
    longitude:double;
  }
}