declare function TheApplication(): TheApplicationMethods;

interface TheApplicationMethods {
  /**
   * `ActiveApplet` returns a reference to the applet that currently has focus.
   * @returns The name of the applet instance that has focus.
   */
  ActiveViewName(): string;

  /**
   * `ActiveBusComp` returns the business component associated with the active applet.
   *@returns The business component associated with the active applet.
   */
  ActiveBusComp(): BusComp;

  /**
   * `ActiveBusObject` returns the business object of the active view.
   *@returns The business object of the active view.
   */
  ActiveBusObject(): BusObject;

  /**
   * `ActiveViewName` returns the name of the active view.
   * @returns A string containing the active view name.
   */
  ActiveViewName(): string;

  /**
   * The `Attach` method allows an external application to reconnect to an existing Siebel session.
   * @param sessionString A string containing the Siebel Session Id. The `sessionString` is typically the output of the `Detach` method.
   * @returns `Boolean` indicating whether or not the method was successfully executed
   */
  Attach(sessionString: string): Boolean;

  /**
   * `CurrencyCode` returns the operating currency code associated with the division to which the user's position has been assigned.
   * @returns A string containing the currency code; for example, `"USD"` for U.S. dollars, `"EUR"` for the euro, `"JPY"` for the Japanese yen.
   */
  CurrencyCode(): string;

  /**
   * The `Detach` method returns a string containing the Siebel session Id.
   * @returns String containing the Siebel session Id.
   */
  Detach(): string;

  /**
   * The EnableExceptions method enables or disables native COM error handling.
   * @param bEnable A Boolean: `TRUE` or `FALSE`
   */
  EnableExceptions(bEnable: boolean): void;

  /**
   * `FindApplet` returns the applet that is identified by the `appletName` argument.
   * @param appletName String variable or literal containing the name of the desired applet.
   * @returns The applet identified in `appletName`.
   */
  FindApplet(appletName: string): Applet;

  /**
   * The `GetBusObject` method instantiates and returns a new instance of the business object specified in its argument.
   * @param busObjectName String variable or literal containing the name of the business object to instantiate.
   * @returns The business object instance specified in the argument.
   */
  GetBusObject(busObjectName: string): BusObject;

  /**
   * Returns the name of the data source, as defined in the `DataSource` server parameter, that is being used for the session. (The default is ServerDataSrc.)
   * @returns A string containing the value of the data source currently used by the application.
   */
  GetDataSource(): string;

  /**
   * The `GetLastErrCode` method returns the last error execution status.
   * @returns A short integer containing the last error execution status: `0` indicates no error.
   */
  GetLastErrCode(): number;

  /**
   * The `GetLastErrText` method returns the last error text message.
   * @returns The last error text message as a string.
   */
  GetLastErrText(): string;

  /**
   * `GetProfileAttr` returns the value of an attribute in a user profile.
   * @param name A string indicating the name of the attribute.
   */
  GetProfileAttr(name: string): any;

  /**
   * The `GetService` method returns a specified business service. If the business service is not already running, it is constructed.
   * @param serviceName The name of the service to start.
   * @returns A reference to the requested business service.
   */
  GetService(serviceName: string): Service;

  /**
   * Shared global variables are unique to the user and the user's associated session. One user's global variables are not visible to other users. The variables are global to the current user and session only. The `GetSharedGlobal` method gets the shared user-defined global variables.
   * @param varName String literal or variable containing the name of the global variable
   * @returns A string containing the user-defined global variables.
   */
  GetSharedGlobal(varName: string): string;

  /**
   * GotoView activates the named view and its `BusObject`. As a side effect, this method activates the view's primary applet and its BusComp and activates the primary applet's first tab sequence control. Further, this method deactivates any `BusObject`, `BusComp`, applet, or control objects that were active prior to this method call.
   * @param viewName The name of the view for the Siebel application to display.
   * @param BusinessObjectName An optional argument to specify the business object to use for displaying the view. You cannot specify the current active business object as an argument to `GotoView`. If this argument is not supplied, or is specified as Nothing, a new business object is loaded in the normal fashion.
   */
  GotoView(viewName: string, BusinessObjectName?: BusComp): void;

  /**
   * `InvokeMethod` calls a specialized method or user-defined method specified by its argument.
   * @param methodName The name of the method.
   * @param methodArgs One or more strings containing arguments to `methodName`.
   */
  InvokeMethod(methodName: string, ...methodArgs: string[]): string;

  /**
   * You can use the `IsViewReadOnly` method to test whether a view is read-only.
   * @param viewName The name of a view, as defined in Siebel Tools, in double quotes or a variable containing the name of a view.
   * @returns Returns `TRUE` if the view is read-only, else it returns `FALSE`. If neither of these values is returned, then an error has occurred. Your script should provide a handler if neither `TRUE` nor `FALSE` is returned.
   */
  IsViewReadOnly(viewName: string): boolean;

  /**
   * The LoadObjects method is used to start the COM Data Server object. This method must be the first call to the COM Data Server.
   * @param absoluteCFGfileName The complete path and name of the CFG file to open. For example: `"C:\siebel\bin\uagent.cfg"`
   * @returns Nothing if successful, else throws an error.
   *
   *
   */
  LoadObjects(absoluteCFGfileName: string): void;

  /**
   * The `Login` method allows external applications to log in to the COM Data Server, COM Data Control, or Java Data Bean, and to access the Siebel objects. The Login method allows the end user to invoke the Siebel application without being prompted for a login and password. The `Login` method determines the privileges granted, and the role and responsibility of the end user for that session.
   * @param connectString Token-based connect string.
   * @param userName Username for login.
   * @param password User password for login.
   * @returns A string containing the error code.
   */
  Login(connectString: string, userName: string, password: string): string;

  /**
   * The `LoginId` method returns the login ID of the user who started the Siebel application.
   * @returns A string containing the login ID.
   */
  LoginId(): string;

  /**
   * The `LoginName` method returns the login name of the user who started the Siebel application (the name typed in the login dialog box).
   * @returns A string containing the user's login name
   */
  LoginName(): string;

  /**
   * The Logoff method disconnects the client from the server.
   */
  Logoff(): void;

  /**
   * The `LookupMessage` method returns the translated string for the specified key, in the current language, from the specified category. The optional arguments are used to format the string if it contains any substitution arguments `(%1,%2)`.
   * @param category Name of the Message Category object, as defined in Siebel Tools, that is the parent of Key value.
   * @param key Name of the Message object, as defined in Siebel Tools, whose text contains the value to be investigated.
   * @param args Optional arguments used to format the error message if it contains any substitution arguments `(%1, %2)`.
   */
  LookupMessage(category: string, key: string, ...args: string[]): string;

  /**
   * Finds a row in S_LST_OF_VAL where the TYPE column matches the type argument, the CODE column matches the lang_ind_code argument, and the LANG_ID column matches the language code of the currently active language. This function is used to obtain the translation of the specified untranslated value in the specified LOV into the currently active language.
   * @param type Type as specified in the List of Values administration view.
   * @param lang_ind_d Language independent code value as specified in the List of Values administration view.
   * @returns Returns a string containing the display value (the VAL column) for the row. `LookupValue` tries to find the display value for a given language independent code. If the display value is not found, `LookupValue` returns the language independent code itself as the value.
   */
  LookupValue(type: string, lang_ind_d: string): string

  /**
   * The `Name` method returns name of the application.
   * @returns A string containing the name of the application
   */
  Name(): string;

  /**
   * The `NewPropertySet` method constructs a new property set object.
   * @returns A property set
   */
  NewPropertySet(): PropertySet;

  /**
   * The `PositionId` property returns the position ID (ROW_ID from S_POSTN) of the user's current position. This is set by default when the Siebel application is started and may be changed (through Edit > Change Position) if the user belongs to more than one position.
   * @returns A string row ID.``
   */
  PositionId(): string;

  /**
   * The PositionName property returns the position name of the user's current position. This is set by default when the Siebel application is started.
   * @returns A string containing the user's position.
   */
  PositionName(): string;

  /**
   * The `RaiseError` method raises a scripting error message to the browser. The error code is a canonical number. The error text is based on the specified key, looked up for the current language from the User-Defined Errors category. You can define these errors in Tools using the Message Category object. The optional arguments are used to format the string if it contains any substitution arguments (%1, %2).
   * @param key Name of the Message object, as defined in Siebel Tools, whose text contains the value to be used.
   * @param args Optional arguments used to format the error message if it contains any substitution arguments (%1, %2).
   */
  RaiseErroor(key: string, ...args: string[]): void;

  /**
   * The `RaiseErrorText` method raises a scripting error message to the browser. The error text is the specified literal string. The optional arguments are used to format the string if it contains any substitution arguments (%1, %2).
   * @param value The error text message.
   * @param args Optional arguments used to format the error message if it contains any substitution arguments (%1, %2).
   */
  RaiseErrorText(value: string, ...args: string[]): void;

  /**
   * `SetPositionId` sets the active position to the Position Id specified in the argument.
   * @param positionId A string containing the Position Id you would like to change to.
   * @returns A Boolean denoting whether or not the operation was successfully completed.
   */
  SetPositionId(positionId: string): boolean;

  /**
   * `SetPositionName` sets the active position to the position name specified in the argument. Returns a Boolean indicating whether or not method succeeded.
   * @param positionName A string containing the name of the position.
   * @returns A Boolean denoting whether or not the operation was successfully completed.
   */
  SetPositionName(positionName: string): boolean;

  /**
   * Shared global variables are unique to the user and the user's associated session. One user's global variables are not visible to other users. The variables are global to the current user and session only. The `SetSharedGlobal` property sets a shared user-defined global variable, which can be accessed using `GetSharedGlobal`.
   * @param varName String variable or literal containing the name of the shared global variable to set.
   * @param value String variable or literal containing the value to set the variable to set.
   */
  SetSharedGlobal(varName: string, value: string): void;

  /**
   * The `Trace` method appends a message to the trace file. `Trace` is useful for debugging SQL query execution and the allocation of the objects. This tracing is not the same as the tracing that can be activated in the application's CFG file.
   * @param message - String variable or literal containing message text to append to the trace file.
   */
  Trace(message: string): void;

  /**
   * `TraceOff` turns off the tracing started by the `TraceOn` method.
   */
  TraceOff(): void;

  /**
   * `TraceOn` turns on the tracking of allocations and deallocations of Siebel objects and SQL statements generated by the Siebel application.
   * @param filename Output filename for the trace messages. If this argument is not specified, tracing information is logged to the Object Manager log file for that user session.
   * The filename argument can take two additional inline arguments: $p and $t. The $p argument substitutes the process id to the filename, and $t substitutes the thread id to the file name. For example:
   *
   * - `TheApplication().TraceOn("d:\\temp\\trace_$p_$t.txt", "Allocation", "All");`
   *
   * would log trace files to d:\temp\trace\trace_1496_1412.txt. Place a separator between the $p and $t arguments to make sure that the filename argument is unique. For example, if user A had a process id of 1 and a thread of 12 without using a separator, the tracing file would be
   *
   * - `d:\temp\trace_112.txt`
   *
   * If user B had a process id of 11, and a thread id of 2, the tracing file would be
   * - `d:\temp\trace_112.txt`
   *
   * As a result, both users would attempt to log to the same file. Adding a separator between the process and thread id keeps the filenames unique.
   * - `d:\temp\trace_1_12.txt`
   * - `d:\temp\trace_11_2.txt`
   *
   * @param type Specifies the type of tracing to start. This can have the following values:
   * - `Allocation`. Traces allocations and deallocations of Siebel objects. This option is useful if you suspect memory leaks in your code.
   * - `SQL`. Traces SQL statements generated by the Siebel application.
   *
   *
   * @param selection Indicates which Siebel objects should be traced for the `Allocation` trace `type`. This argument should be `""` if the `trace` type is SQL.
   * - `Script`. Traces VB and eScript objects.
   * - `OLE`. Traces allocations for data server or automation server programs.
   * - `All`. Traces all objects. The `All` value does not trace the Siebel objects managed implicitly by Siebel's declarative configuration use. All traces the Siebel objects constructed by scripting.
   */
  TraceOn(filename: string, type: string, selection: string): void;
}
