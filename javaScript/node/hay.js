const obj = {
    value: 42,
    getValue: function() {
        return this.value;
    }
 };
 zz
 const anotherObj = {
    value: 99
 };
 
 console.log(obj.getValue());
 console.log(obj.getValue.call(anotherObj));