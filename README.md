# AJAXWebComponents

AJAXWebComponents is currently in development.  The goal of this project is to design a set of website components that add functionality to existing HTML DOM elements with less code by creating reusable javascript objects that handle extra functionality internally.  An example of extra functions that this project aims to provide could be auto complete on input text fields with dynamically loadable data possibly through AJAX when the text field has a value entered into it.  Individual components will be designed as single objects that can be included as and when needed in a web project.

AJAXWebComponents is being developed along side several repositories all designed to complement and work seemlessly together.  AJAXManagerClient respository can be used along side all components in this repository that require access to data supplied by AJAX techniques.  AJAXManagerClient provides all neccessary AJAX functionality to each component so each component need not be concerned with the intricacities of AJAX and can have a uniformed API for fetching data.
AJAXManagerServer repository acts as the receiving end of AJAXManagerClient and provides the server side of AJAX functionality.  This repository is being designed along side AJAXManagerClient to provide seemless AJAX transactions without the need to know all the intricacities of AJAX.

LIST OF CURRENT COMPONENTS BEING DEVELOPED

1. InteractiveTextBox - (See file: Documentation-InteractiveTextBox)
2. InteractiveSearchButton - (Documentation not yet written)
3. LinkObject - (Documentation not yet written)
4. (New Components will be added in the future)
