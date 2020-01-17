resourceNotFound = function resourceNotFound() { // eslint-disable-line no-undef
	var customizedErrorMessage = {
		"statusCode": "404",
		"reasonPhrase": "Not Found",
		"errorCode": "Resource Not Found",
		"errorDescription": "URI does not represent a recognised resource"
	};
	context.setVariable("errorJSON", "customizedErrorMessage");
	context.setVariable("customizedErrorMessage", JSON.stringify(customizedErrorMessage));
	throw "error";
};