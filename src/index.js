// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (prop) => {
    Object.defineProperty(Object, prop, {
        writable: true,
        enumerable: true
    });
    return prop;
};

const createNotEnumerableProperty = (propertyName) => {
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        set: function(value) {
            Object.propertyName = value;
        },
        get: function() {
            return Object.propertyName;
        }
    });
    return propertyName;
};

const createProtoMagicObject = () => Function ;

Function.prototype.valueOf = function () { return this.calledTimes; };

const incrementor = () => {
    incrementor.calledTimes++;
    return incrementor;
};
incrementor.calledTimes = 0;

const asyncIncrementor = () => {
    return ++asyncIncrementor.calledTimes;
};
asyncIncrementor.calledTimes = 0;

const createIncrementer = () => {
    function* generator() {
        let i = 0;
        while (true) {
            yield ++i;
        }
    }
    return generator();
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = param => new Promise( resolve => setTimeout(() => resolve(param), 1001));

const getDeepPropertiesCount = (obj) => {
    let amount  = 0;
    let properties = Object.getOwnPropertyNames(obj);
    properties.forEach(value => amount += Object.getOwnPropertyNames(obj[value]).length ? getDeepPropertiesCount(obj[value]) : 0);
    return amount+= properties.length;
};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => {

};

const sortByProto = array => array.sort((a, b) => { a.__proto__ - b.__proto__});

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;