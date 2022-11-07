declare interface BusComp {
  /**
   * ExecuteQuery returns a set of business component records using the criteria established with methods such as `SetSearchSpec`.
   * - `ForwardBackward`. Selected records can be processed from first to last or from last to first. This is the default if no value is specified.
   * - `ForwardOnly`. Selected records can be processed only from the first record to the last record. Focus cannot return to a record.
   *
   * @param cursorMode - An integer. An optional argument that must be one of the following constants:
   *  - `ForwardBackward`
   *  - `ForwardOnly`
   */
  ExecuteQuery(cursorMode?: number): void;

  /**
   * `ActivateField` allows queries to retrieve data for the argument-specified field.
   * @param FieldName - String variable or literal containing the name of the field to activate.
   */
  ActivateField (FieldName: string): void;

  /**
   * Use `ActivateMultipleFields` to activate data for the fields specified in the property set.
   * @param FieldNames Property set containing a collection of properties representing the fields that are to be activated.
   */
  ActivateMultipleFields (FieldNames: PropertySet): boolean;


}



