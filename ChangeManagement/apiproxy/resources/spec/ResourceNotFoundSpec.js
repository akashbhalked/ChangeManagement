var MethodNotAllowedTest = require('../jsc/ResourceNotFound/ResourceNotFound');
describe('ResourceNotFound Suite', function() {
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

it ('Negative: resource_not_found ', function() {
	    expect(resourceNotFound).toThrow();
        
    });

});