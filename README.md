# AJAXWebComponents

InteractiveTextBox - Description.

The InteractiveTextBox library is a javascript class that offers web designers a simple way to add functionality features to a HTML input text field.  At present InteractiveTextBox provides the designer with a way to have a default text field value that is displayed when the text field is empty.  InteractiveTextBox handles a default value by using the OnFocus and OnBlur events to check for an empty text field when a user enters or leaves the text field.  A pre determined default value is set on the text field when entered or left if the text field is empty.  InteractiveTextBox also gives a web designer an easy way to feature a dropdown list on the text field which will display values from a set of data.  Depending on what is entered into the text field will determine what results show in the dropdown list.  This feature acts as an auto complete for the text field.  Results from a set of string data are added to the dropdown when they start with characters entered into the text field.  The OnKeyUp event is used to handle this functionality.  The InteractiveTextBox's auto complete dropdown feature can be supplied as mentioned with a set of data.  There is currently 2 modes of operation for this data to be associated with the text field.  The first and default mode is ARRAY which allows for a set of string data in an Array to be passed to the InteractiveTextBox on Instantiation.  The second mode of operation is AJAX.  When set to this mode InteractiveTextBox will use a set of data that is fetched using an AJAX call.  At present the InteractiveTextBox has been designed to utilise the AJAX features of AJAXManager repository to handle all the intricacies that come with using AJAX techniques to fetch data asynchronously.

InteractiveTextBox - Input values described.
Example instantiation and initialisation of a new InterativeTextBox Object:-

var interactiveTB = new InteractiveTextBox(string textFieldID, string autoCompleteContainerID, object {options});

textFieldID - The ID of the input text field that

defaultValue - "Search For..."
noErrorClass - "dropDownItemContainer"
errorClass - "dropDownItemContainerError"
dataSource - "ARRAY"
dataArray - null
AMCREF - null
AMCAPI - null
searchDelay - 350
AJAXURL - ""
AJAXFetchMethod - "GET"
