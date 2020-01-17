var MethodNotAllowedTest = require('../jsc/MethodNotAllowed/MethodNotAllowed');
describe('Method Not Allowed Suite', function() {
    beforeEach(function(){
      var Context = function(){
        };
        Context.prototype = {
            setVariable: function(propertyName, propertyValue){
            this[propertyName] = propertyValue;
            },
            getVariable: function(propertyName){
              return this[propertyName];
            }
        };
        context = new Context();
    });

it ('Negative: invalid Method ', function() {
		context.setVariable("errorJSON","a42_generic_invalid_method");
        expect(methodNotAllowed).toThrow();
        
    });

});