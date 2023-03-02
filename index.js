function Counter() {
    let _count = 0;

    function _increment() {
        _count++;
    }

    this.getCount = () => _count;

    this.increment = function () {
        _increment();
    }
}


const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());