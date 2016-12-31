// Model Class for automate generator models with schemma

var faker = require('faker');
var helpers = require('./Helpers')();

function Generator() {
  var _self = this;

  var schema = {};

  _self.genEntity = function(entity, items){
    var data = [];
    for (var id = 1; id < items; id++) {
      var tempData = {
        "id": id
      };
      for (var i = 0; i < entity.fields.length; i++) {
        tempData[entity.fields[i].name] = eval(entity.fields[i].faker);
      }
      data.push(tempData);
    }
    return data;
  }

  _self.genSchema = function(model, numItems){
    
    for (var i = 0; i < model.length; i++) {
      schema[model[i].name] = _self.genEntity(model[i], numItems);
    }
    return schema;
  }

}

module.exports = function() {
  return new Generator();
}