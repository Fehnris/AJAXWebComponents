# AJAXWebComponents
AJAXWebComponents is currently in development.  The goal of this project is to design a set of website components that add functionality to existing HTML DOM elements with less code by creating reusable javascript objects that handle extra functionality internally.  An example of extra functions that this project aims to provide could be auto complete on input text fields with dynamically loadable data possibly through AJAX when the text field has a value entered into it.  Individual components will be designed as single objects that can be included as and when needed in a web project.

### List of components currently being developed
1. InteractiveTextBox - (See file: Documentation-InteractiveTextBox)
2. InteractiveSearchButton - (Documentation not yet written)
3. InteractiveLink - (Documentation not yet written)
4. (New Components will be added in the future)

### Compatibility with other Repositories
AJAXWebComponents is being developed along side several repositories all designed to complement and work seemlessly together.  
#### AJAXManager:-
AJAXManager repository contains 2 libraries namely AJAXManagerClient and AJAXManagerServer.  These libraries can be used in conjunction along side AJAXWebComponents to provide AJAX functionality.  AJAXManagerClient provides all neccessary client side AJAX functionality to each component so each component need not be concerned with the intricacities of AJAX and can have a uniformed API for fetching data.
AJAXManagerServer library acts as the receiving end of AJAXManagerClient and provides the server side of AJAX functionality.
