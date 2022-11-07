declare interface BusObject {
  /**
   * The `GetBusObject` method instantiates and returns a new instance of the business object specified in its argument.
   * @param busObjectName String variable or literal containing the name of the business object to instantiate.
   * @returns The business object instance specified in the argument
   */
  GetBusObject(busObjectName: string): BusObject

  /**
   * The `GetLastErrCode` method returns the last error code.
   * @returns The last error code as a short integer; `0` indicates no error.
   */
  GetLastErrCode(): number

  /**
   * The `GetLastErrText` method returns the last error text.
   * @returns A string containing the last error text message.
   */
  GetLastErrText(): string

  /**
   * The `Name` method returns the name of the business object.
   * @returns A string containing the business object name
   */
  Name(): string;
}