import {FilterMatchFlag, CompositeFilterType, SortModeOrder} from './enum';

//https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
declare module './index' {
  type double = number;
  type long = number;
  type ulong = number;
  type DOMString = string;
  type SuccessCallback = () => void;
  type ErrorCallback = (error: WebAPIError) => void;

  interface TizenStatic {
    
  }
 
  interface AbstractFilter {

  }

  interface WebAPIError {
    readonly code: ulong;
    readonly name: DOMString;
    readonly message: DOMString;
  }

  interface WebAPIException {
    code: ulong;
    name: DOMString;
    message: DOMString;
  }

  interface AttributeFilter extends AbstractFilter {
    constructor(attributeName:DOMString, matchFlag?:FilterMatchFlag, matchValue?:any):AttributeFilter
    attributeName:DOMString;
    matchFlag:FilterMatchFlag;
    matchValue:any;
  }

  
  interface AttributeRangeFilter extends AbstractFilter {
    constructor(attributeName:DOMString, initialValue:any, endValue:any):AttributeRangeFilter
    attributeName:DOMString;
    initialValue:any;
    endValue:any;
  }

  interface CompositeFilter extends AbstractFilter {
    constructor(type:CompositeFilterType, filters?:AbstractFilter[]):CompositeFilter
    type:CompositeFilterType;
    filters:AbstractFilter[];
  }

  
  interface SortMode {
    constructor(attributeName:DOMString, order?:SortModeOrder): SortMode
    attributeName:DOMString;
    order:SortModeOrder;
  }

  interface SimpleCoordinates {
    latitude:double;
    longitude:double;
  }
}