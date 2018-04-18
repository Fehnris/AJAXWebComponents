# InteractiveTextBox Component

## DESCRIPTION

The InteractiveTextBox library is a javascript class that offers web designers a simple way to add functionality features to a HTML
input text field.  At present InteractiveTextBox provides the designer with a way to have a default text field value that is displayed
when the text field is empty.  InteractiveTextBox handles a default value by using the OnFocus and OnBlur events to check for an empty
text field when a user enters or leaves the text field.  A pre determined default value is set on the text field when entered or left
if the text field is empty.  InteractiveTextBox also gives a web designer an easy way to feature a dropdown list on the text field
which will display values from a set of data.  Depending on what is entered into the text field will determine what results show in
the dropdown list.  This feature acts as an auto complete for the text field.  Results from a data set are added to the
dropdown when they start with characters entered into the text field.  The OnKeyUp event is used to handle this functionality.  The
InteractiveTextBox's auto complete dropdown feature can be supplied as mentioned with a set of data.  There is currently 2 modes of
operation for this data to be associated with the text field.  The first and default mode is ARRAY which allows for a set of string
data in an Array to be passed to the InteractiveTextBox on Instantiation.  The second mode of operation is AJAX.  When set to this
mode InteractiveTextBox will use a set of data that is fetched using an AJAX call.  At present the InteractiveTextBox has been
designed to utilise the AJAX features of AJAXManager repository to handle all the intricacies that come with using AJAX techniques to
fetch data asynchronously.

## Example usage

var interactiveTB = new InteractiveTextBox( PARAM1, PARAM2, OBJECT { } );

## Input Values

The table below describes the input parameters to the InteractiveTextBox.  All three are required.

|PARAMETER NAME      |  DATATYPE         |  DESCRIPTION    |
|--------------------|-------------------|-----------------|
|PARAM1              |  String           | PARAM1 is a String variable to contain the ID of the input text field associated with the component.
|PARAM2              |  String           | PARAM2 is a String variable to contain the ID of the DIV container that acts as the input text fields drop down auto complete.
|OBJECT              |  Object           | The third variable is a javascript object.  There are a number of options that can be supplied to the InteractiveTextBox through this variable.  Some are compulsory and some are optional.  A full list of compulsory and optional key : value pairs can be found below.

### Compulsory options for third parameter OBJECT

|DATATYPE      |  KEYNAME         |  DEFAULT                     |  POSSIBLE VALUES         |  DESCRIPTIONS                           |
|--------------|------------------|------------------------------|--------------------------|-----------------------------------------|
|String:       |  defaultValue    |  "Search For..."             |  DEFAULT, "<any>"         |  Default value displayed in text field
|String:       |  noErrorClass    |  "acItem"     |  DEFAULT, "<any>"         |  CSS dropdown style for matched data    
|String:       |  errorClass      |  "acItemErr"  |  DEFAULT, "<any>"         |  CSS dropdown style for no data error  message
|String:       |  dataSource      |  "ARRAY"                     |  DEFAULT, "AJAX"          |  method for retrieving data for drop    down
|Array:        |  dataArray       |  null                        |  DEFAULT, Array           |  used to supply data as Array (used  with dataSource 'ARRAY' MODE
|Object:       |  AMCREF          |  null                        |  DEFAULT, Object          |  AMCREF (AJAXManagerClientReference)    points to instance of AJAXManagerClient.  Used with dataSource 'AJAX' MODE
|Object.Method |  AMCAPI          |  null                        |  DEFAULT, Object.Method   |  AMCAPI (AJAXManagerClient)(API) points to method of instance of AJAXManagerClient that accepts new AJAX requests from components.  Used with dataSource 'AJAX' MODE
|Integer:      |  searchDelay     |  350                         |  DEFAULT, 0-65535         |  Creates a delay between key presses.  Most useful when used in 'AJAX' MODE.  Having a delay means that every key press isn't sent as a new AJAX request.  If set to 0 every key press will cause a new AJAX request sent.  350 (0.35 of a second) recommended.
|String:       |  AJAXURL         |  ""                          |  DEFAULT, "<URLForAJAX>"  |  When using dataSource 'AJAX' MODE   this is where the file that processes the AJAX request can be specified.
|String:       |  AJAXFetchMethod |  "GET"                       |  DEFAULT, "POST"          |  When using dataSource 'AJAX' MODE     here is where the request mode type.  Either "GET" or "POST" can be used.

### Optional options for third parameter OBJECT

|DATATYPE      |  KEYNAME         |  DEFAULT                     |  POSSIBLE VALUES         |  DESCRIPTIONS                           |
|--------------|------------------|------------------------------|--------------------------|-----------------------------------------|
|String:       |  defaultValue    |  "Search For..."             |  DEFAULT, "<any>"         |  Default value displayed in text field
|String:       |  noErrorClass    |  "acItem"     |  DEFAULT, "<any>"         |  CSS dropdown style for matched data    
|String:       |  errorClass      |  "acItemErr"  |  DEFAULT, "<any>"         |  CSS dropdown style for no data error  message
|String:       |  dataSource      |  "ARRAY"                     |  DEFAULT, "AJAX"          |  method for retrieving data for drop    down
|Array:        |  dataArray       |  null                        |  DEFAULT, Array           |  used to supply data as Array (used  with dataSource 'ARRAY' MODE
|Object:       |  AMCREF          |  null                        |  DEFAULT, Object          |  AMCREF (AJAXManagerClientReference)    points to instance of AJAXManagerClient.  Used with dataSource 'AJAX' MODE
|Object.Method |  AMCAPI          |  null                        |  DEFAULT, Object.Method   |  AMCAPI (AJAXManagerClient)(API) points to method of instance of AJAXManagerClient that accepts new AJAX requests from components.  Used with dataSource 'AJAX' MODE
|Integer:      |  searchDelay     |  350                         |  DEFAULT, 0-65535         |  Creates a delay between key presses.  Most useful when used in 'AJAX' MODE.  Having a delay means that every key press isn't sent as a new AJAX request.  If set to 0 every key press will cause a new AJAX request sent.  350 (0.35 of a second) recommended.
|String:       |  AJAXURL         |  ""                          |  DEFAULT, "<URLForAJAX>"  |  When using dataSource 'AJAX' MODE   this is where the file that processes the AJAX request can be specified.
|String:       |  AJAXFetchMethod |  "GET"                       |  DEFAULT, "POST"          |  When using dataSource 'AJAX' MODE     here is where the request mode type.  Either "GET" or "POST" can be used.
