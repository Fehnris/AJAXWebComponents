function LinkObject(linkObjectID, options) {
	this.optionDefaults = { 'destinationID' : "", 'DATAFORMATREF' : null, 'DATAFORMATAPI' : null, 'AMCREF' : null,
						    'searchTerm' : "", 'clickLock' : false,
						    'AMCAPI' : null, 'searchDelay' : 350, 'AJAXURL' : "", 'AJAXFetchMethod' : "GET" };
	this.properties = { 'linkObjectID' : linkObjectID };
	var that = this;
	//alert(alertProperties(options));
	initialiseOptions(options);
	//alert(alertProperties(this.properties));
	addEvents();
	
	function addEvents() {
		var co = window.document.getElementById(that.properties['linkObjectID']);
		var timer = null;
		co.onclick = function() {
			if(that.properties["clickLock"] == false) {
				that.properties["clickLock"] = true;
				var strVal = that.properties["searchTerm"];
				that.properties["AMCAPI"].call(that.properties["AMCREF"], { 'URL' : that.properties["AJAXURL"], 'QUERY' : strVal, 'METHOD' : "GET" }, that.postFormatting, that);
				timer = window.setTimeout( function() {
					timer = null;
					that.properties["clickLock"] = false;
				}, that.properties["searchDelay"] );
			}
		};
		co = null;
	}
	
	function alertProperties(obj) {
		var str = "";
		for(var prop in obj) {
			str += "[" + prop + "]:" + obj[prop] + "\n";
		
		}
		return str;
	}
	
	function initialiseOptions(options) {
		for(var prop in that.optionDefaults) {
			if(options.hasOwnProperty(prop)) { that.properties[prop] = options[prop]; }
			else { that.properties[prop] = that.optionDefaults[prop]; }
		}
	}
	
	this.postFormatting = function(data, dataError, valueSearched) {
		//alert(that.properties["DATAFORMATREF"]);
		if(that.properties["DATAFORMATREF"] == null) {
			if(that.properties["destinationID"] !== "") {
				that.properties["destinationID"] = data;
			}
		}
		else {
			
			if(that.properties["DATAFORMATREF"] !== null) {
				that.properties["DATAFORMATAPI"].call(that.properties["DATAFORMATREF"], data, { 'callingObjectID' : that.properties["linkObjectID"],
																							    'dataError' : dataError,
																							    'valueSearched' : valueSearched });
			}
		}
	}
}