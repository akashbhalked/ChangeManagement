methodNotAllowed = function MethodNotAllowed() { // eslint-disable-line no-undef
	var customizedErrorMessage = {
		"statusCode": "405",
		"reasonPhrase": "Method Not Allowed",
		"errorCode": "Method Not Allowed",
		"errorDescription": "The request method is not supported by this resource"
	};
	context.setVariable("errorJSON", "customizedErrorMessage");
	context.setVariable("customizedErrorMessage", JSON.stringify(customizedErrorMessage));
	throw "error";
};