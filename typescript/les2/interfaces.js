var rect1 = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
};
var rect2 = {
    id: '134535',
    size: {
        width: 10,
        height: 20
    }
};
rect2.color = 'black';
//rect2.id = '3453535'
var rect3 = {};
var rect4 = {};
console.log(rect1, rect2);
var rect5 = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
        console.log(this.time);
    };
    return Clock;
}());
new Clock().setTime(new Date('2020-01-01'));
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
