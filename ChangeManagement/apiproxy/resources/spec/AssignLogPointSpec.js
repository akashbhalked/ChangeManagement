var AssignLogPoint = require('../jsc/AssignLogPoint/AssignLogPoint');
describe('AssignLogPoint Suite', function() {
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

it ('Positive: assignLogPoint ', function() {
	    expect(assignLogPoint()).toBe();
        
    });

});