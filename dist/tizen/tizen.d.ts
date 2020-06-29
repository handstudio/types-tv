//https://www.typescriptlang.org/docs/handbook/modules.html#ambient-modules
export declare module Tizen {
  const enum WebAPIExceptionCode {
    INDEX_SIZE_ERR = 1,
    DOMSTRING_SIZE_ERR = 2,
    HIERARCHY_REQUEST_ERR = 3,
    WRONG_DOCUMENT_ERR = 4,
    INVALID_CHARACTER_ERR = 5,
    NO_DATA_ALLOWED_ERR = 6,
    NO_MODIFICATION_ALLOWED_ERR = 7,
    NOT_FOUND_ERR = 8,
    NOT_SUPPORTED_ERR = 9,
    INUSE_ATTRIBUTE_ERR = 10,
    INVALID_STATE_ERR = 11,
    SYNTAX_ERR = 12,
    INVALID_MODIFICATION_ERR = 13,
    NAMESPACE_ERR = 14,
    INVALID_ACCESS_ERR = 15,
    VALIDATION_ERR = 16,
    TYPE_MISMATCH_ERR = 17,
    SECURITY_ERR = 18,
    NETWORK_ERR = 19,
    ABORT_ERR = 20,
    URL_MISMATCH_ERR = 21,
    QUOTA_EXCEEDED_ERR = 22,
    TIMEOUT_ERR = 23,
    INVALID_NODE_TYPE_ERR = 24,
    DATA_CLONE_ERR = 25,
    INVALID_VALUES_ERR = 26,
    IO_ERR = 27,
    SERVICE_NOT_AVAILABLE_ERR = 28,
    UNKNOWN_ERR = 9999,
  }

  const enum FilterMatchFlag {
    EXACTLY = 'EXACTLY',
    FULLSTRING = 'FULLSTRING',
    CONTAINS = 'CONTAINS',
    STARTSWITH = 'STARTSWITH',
    ENDSWITH = 'ENDSWITH',
    EXISTS = 'EXISTS',
  }

  const enum SortModeOrder {
    ASC = 'ASC',
    DESC = 'DESC',
  }

  const enum CompositeFilterType {
    UNION = 'UNION',
    INTERSECTION = 'INTERSECTION',
  }

  type double = number;
  type long = number;
  type ulong = number;
  type DOMString = string;
  type SuccessCallback = () => void;
  type ErrorCallback = (error: WebAPIError) => void;

  interface TizenStatic {}

  interface AbstractFilter {}

  interface WebAPIError {
    readonly code: ulong;
    readonly name: DOMString;
    readonly message: DOMString;
  }

  interface WebAPIException {
    code: typeof WebAPIExceptionCode;
    name: DOMString;
    message: DOMString;
  }

  interface AttributeFilter extends AbstractFilter {
    constructor(
      attributeName: DOMString,
      matchFlag?: FilterMatchFlag,
      matchValue?: any
    ): AttributeFilter;
    attributeName: DOMString;
    matchFlag: FilterMatchFlag;
    matchValue: any;
  }

  interface AttributeRangeFilter extends AbstractFilter {
    constructor(
      attributeName: DOMString,
      initialValue: any,
      endValue: any
    ): AttributeRangeFilter;
    attributeName: DOMString;
    initialValue: any;
    endValue: any;
  }

  interface CompositeFilter extends AbstractFilter {
    constructor(
      type: CompositeFilterType,
      filters?: AbstractFilter[]
    ): CompositeFilter;
    type: CompositeFilterType;
    filters: AbstractFilter[];
  }

  interface SortMode {
    constructor(attributeName: DOMString, order?: SortModeOrder): SortMode;
    attributeName: DOMString;
    order: SortModeOrder;
  }

  interface SimpleCoordinates {
    latitude: double;
    longitude: double;
  }

  const enum BundleValueType {
    STRING = 'STRING',
    STRING_ARRAY = 'STRING_ARRAY',
    BYTES = 'BYTES',
    BYTES_ARRAY = 'BYTES_ARRAY',
  }

  interface BundleItemCallback {
    onitem(key: Tizen.DOMString, value: any, type: BundleValueType): void;
  }

  class Bundle {
    constructor(json?: object);
    get(key: Tizen.DOMString): any;
    set(key: Tizen.DOMString, value: any): void;
    typeOf(key: Tizen.DOMString): BundleValueType;
    forEach(callback: BundleItemCallback): void;
    toJSON(): object;
    toString(): Tizen.DOMString;
  }
}
