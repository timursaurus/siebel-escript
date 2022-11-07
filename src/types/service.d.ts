declare interface Service {
  /**
   * This method retrieves the name of the first property of a business service.
   * @returns A string containing the name of the first property of the business service.
   */
  GetFirstProperty(): string

  /**
   * When the name of the first property has been retrieved, this method retrieves the name of the next property of a business service.
   * @returns A string containing the name of the next property of a business service, or an empty string `("")` if no more properties exist.
   */
  GetNextProperty(): string

  /**
   * The `GetProperty` method returns the value of the property whose name is specified in its argument.
   * @param propName The name of the property whose value is to be returned.
   */
  GetProperty(propName: string): string

  /**
   * The `InvokeMethod` method calls a method on the business service. This can be a documented specialized method or a user-created method.
   * @param methodName A string representing the name of the method to execute
   * @param inputPropSet A property set containing the method arguments.
   * @param outputPropSet A property set containing the output arguments of the Property Set
   */
  InvokeMethod(methodName: string, inputArguments: PropertySet, OutputArguments: PropertySet): void

  /**
   * The `Name` property contains the name of the service.
   * @returns A string containing the service name.
   */
  Name(): string

  /**
   * This method returns a Boolean value indicating whether a specified property exists.
   * @param propName A string representing the name of a property.
   * @returns In Siebel VB, an integer (`0` for `false`, `1` for `true`); in other interfaces, a `Boolean`.
   */
  PropertyExists(propName: string): boolean

  /**
   * This method removes a property from a business service.
   * @param propName A string indicating the name of the property to be removed.
   */
  RemoveProperty(propName: string): void

  /**
   * This method assigns a value to a property of a business service.
   * @param propName A string indicating the name of the property whose value is to be set.
   * @param propValue A string containing the value to assign to the property indicated by `propName`.
   */
  SetProperty(propName: string, propValue: string): void
}