declare interface PropertySet {
  /**
   * The `AddChild` method is used to add subsidiary property sets to a property set, so as to form hierarchical (tree-structured) data structures.
   * @param childObject A property set to be made subsidiary to the property set on which the method is invoked.
   * @returns An integer indicating the index of the child property set.
   */
  AddChild(childObject: PropertySet): number;

  /**
   * This method returns a copy of a property set.
   * @returns A copy of the property set on which the method is invoked.
   */
  Copy(): PropertySet;

  /**
   * This method returns a byte array if a byte value has been set.
   * @returns A `byte array` if a byte value has been set, `null` if a `string` value has been set.
   */
  GetByteValue(): number[] | null;

  /**
   * This method returns a specified child property set of a property set.
   * @param index An integer representing the index number of the child property set to be retrieved
   * @returns The property set at index `index` of the parent property set
   */
  GetChild(index: number): PropertySet;

  /**
   * This method returns the number of child property sets attached to a parent property set.
   * @returns The number of child property sets subordinate to the property set on which the method is invoked.
   */
  GetChildCount(): number;

  /**
   * This method returns the name of the first property in a property set.
   * @returns A string representing the name of the first property in a property set.
   */
  GetFirstProperty(): string;

  /**
   * The `GetLastErrCode` method returns the most recent error code.
   * @returns The last error code as a short integer; 0 indicates no error.
   */
  GetLastErrCode(): number;

  /**
   * The `GetLastErrText` method returns the last error text message.
   * @returns The most recent error text message as a string
   */
  GetLastErrText(): string;

  /**
   * This method returns the next property in a property set.
   * @returns A string representing the name of the next property in a property set
   */
  GetNextProperty(): string;

  /**
   * This method returns the value of a property when given the property name.
   * @param propName A string representing the name of a property as returned by `GetFirstProperty` or `GetNextProperty`.
   * @returns A string representing the value stored in the property indicated by `propName`, or an empty string `("")` if the property does not exist
   */
  GetProperty(propName: string): string;

  /**
   * This method returns the number of properties attached to a property set.
   * @returns The number of properties stored at the current level in the hierarchy, but not all properties throughout the entire property set hierarchy
   */
  GetPropertyCount(): number;

  /**
   * This method retrieves the data value stored in the type attribute of a property set.
   * @returns A string representing the value stored in the type attribute of the property set.
   */
  GetType(): string;

  /**
   * This method retrieves the data value stored in the value attribute of a property set.
   * @returns A string representing the data value stored in the value attribute of a property set.
   */
  GetValue(): string;

  /**
   * This method inserts a child property set into a parent property set at a specific location.
   * @param childObject A property set to be made subsidiary to the property set on which the method is invoked.
   * @param index An integer representing the position at which `childObject` is to be inserted.
   */
  InsertChildAt(childObject: PropertySet, index: number): void;

  /**
   * This method returns a Boolean value indicating whether a specified property exists in a property set.
   * @param propName A string representing the name of the property to be found.
   * @returns In Siebel VB, an integer (`0` for `false`, `1` for `true`); in other interfaces, a `Boolean`
   */
  PropertyExists(propName: string): boolean;

  /**
   * This method removes a child property set from a parent property set.
   * @param index An integer representing the index number of the child property set to be removed.
   */
  RemoveChild(index: number): void;

  /**
   * This method removes a property from a property set.
   * @param propName The name of the property to be removed.
   */
  RemoveProperty(propName: string): void;

  /**
   * This method removes all properties and children from a property set.
   */
  Reset(): void;

  /**
   * This method sets the value portion of a property set.
   * @param value The byte array containing the value to be set.
   */
  SetByteValue(value: number[]): void;

  /**
   * This method assigns a data value to a property in a property set.
   * @param propName A string representing the name of a property.
   * @param propValue A string representing the value to be assigned to `propName`.
   */
  SetProperty(propName: string, propValue: string): void;

  /**
   * This method assigns a data value to the type attribute of a property set.
   * @param type A string representing data to be stored in the type attribute.
   */
  SetType(type: string): void;

  /**
   * This method assigns a data value to the value attribute of a property set.
   * @param value A string representing data to be stored in the value attribute.
   */
  SetValue(value: string): void;
}
