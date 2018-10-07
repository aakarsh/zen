App = { 
    putChar: function (c, times) {
        let retval = ''
            for (let i = 0 ; i < times; i++) { 
                retval = retval + c
            }
        return retval
    },
    cycleChars: function (startIndex,charList, n) {
        let retval = '' 
            for(let i = startIndex ; i < n; i++) {
                let cycleIndex = (i % charList.length) 
                    retval = retval + charList[cycleIndex]           
            }
        return retval
    },
    printChessBoard: function () {
        for (let i = 0 ; i < 8; i++) {
            console.log(this.cycleChars(i%2, ["#","_"],8))
        }
    },
    printPyramid: function () {
        for (let i = 0 ; i < 10; i++) {
            console.log(this.putChar('*',i));
        }
    },
    /**
     * Example which demonstrates the use of closures 
     * to test. 
     */
    multiplier: function (factor) {
        return n => n * factor
    },
    power: function (base, exponent) {
        if (exponent == 0) return 1;
        else return base * this.power(base, exponent-1)
    },
    powers: function ( base, start , end) {
        let retval = []
            for(let i = start ; i < end; i++ )
                retval = retval.concat(this.power(base,i))
                    return retval
    },
    /**
     * string interpolation example
     */
    interpolate: function (n) { 
        for( let i = 0 ; i < n; i++ ) {
            console.log(`string interpolation example ${i}`);
        }
    },
    memo: function (func) {
        let v = {}
        return (n) => { 
            if (v.n == undefined) {
                return v[n]
            }
            v[n] = func(n)
                return v[n]
        }
    },
    dir: function (o) {
        let keys = Object.keys(o);
        for(let i = 0 ; i < keys.length; i++) { 
            console.log("%d. %o", i ,keys[i]);
        }
        return keys;
    },
    main: function () {
        this.printPyramid() ;
        this.printChessBoard();
        const cube = x => x * square(x);
        const square = x => x * x;
        console.log(square(10));
        console.log(cube(10));
        console.log(this.multiplier(10)(10));
        console.log("%o", this.powers(2,0,10));
        console.log("%o", this.powers(3,0,10));
        console.log("%o", this.powers(5,0,10));
        this.interpolate(10);
    }
} // App
App.main();

