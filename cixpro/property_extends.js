
function property_extends(){
    var _self = this;

    _self.staticArray = function(array){
        var data = [];
        for (var i = 0; i < array.length; i++) {
            data.push({
                id: i + 1,
                name: array[i],
                slug: array[i].toLowerCase().replace(" ","-")
            })
        }
        return data;
    }

    _self.transactions = function(){
        var array = ['Alquiler', 'Venta'];
        
        return _self.staticArray(array);
    }
    
    _self.types = function(){
        var array = ['Proyecto', 'Casa', 'Departamento', 'Lote', 'Oficina', 'Local', 'Terreno'];

        return _self.staticArray(array);
    }

    _self.statuses = function(){
        var array = ['Alquilado', 'Vendido'];

        return _self.staticArray(array);
    }

    _self.levels = function(){
        var array = [
            {name: 'Free', price: 0},
            {name: 'Basic', price: 30},
            {name: 'Premiun', price: 70},
            {name: 'Ultimate', price: 150}
        ];

        var data = [];
        for (var i = 0; i < array.length; i++) {
            data.push({
                id: i + 1,
                name: array[i].name,
                price: array[i].price
            })
        }
        return data;
    }

    _self.moneys = function(){
        var array = [
            {name: 'Soles', symbol: "S/."},
            {name: 'Dolares', symbol: "$"}
        ];

        var data = [];
        for (var i = 0; i < array.length; i++) {
            data.push({
                id: i + 1,
                name: array[i].name,
                price: array[i].symbol
            })
        }
        return data;
    }

}


module.exports = function(){
    return new property_extends()
}