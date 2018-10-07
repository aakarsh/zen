lib = { 
    log: function(...args) { 
        console.log(...args);
    },
    map: function(sequence, mappingFunction) {
        let retval = [];
        for(let s of sequence) { 
            retval.push(mappingFunction(s));
        }
        return retval;
    },
    filter: function(sequence, filterFunction) {
        let retval = [];
        for(let s of sequence) { 
            if(filterFunction(s))
                retval.push(s)
        }
        return retval;
    },
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
            this.log(this.cycleChars(i%2, ["#","_"],8))
        }
    },
    printPyramid: function () {
        for (let i = 0 ; i < 10; i++) {
            this.log(this.putChar('*',i));
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
    range: function(start,end, step) { 
        let retval = [];
        if (step == undefined) 
            step = 1
        for(let i = start; i < end; i += step)
            retval.push(i);
       return retval; 
    },
    zip: function(s1,s2) { 
        let retval = [];
        let minSize = Math.min(s1.length , s2.length);

        let a = s1.slice(0,minSize); 
        let b = s2.slice(0,minSize); 
        
        for(let i = 0 ; i < a.length; i++) 
            retval.push([a[i], b[i]]);
        
        return retval;
    },
    powerSequence: function (base, start, end) {
        return this.map(this.range(start, end), (n) => this.power(base,n))
    },
    /**
     * string interpolation example
     */
    interpolate: function (n) { 
        for( let i = 0 ; i < n; i++ ) {
            this.log(`string interpolation example ${i}`);
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
        let keys = Object.keys(o).sort();
        let i = 1;

        for (let key of keys) { 
            this.log("%d. %o", i ,key);
            i += 1;
        }
        return keys;
    },
    powerSequences: function(powers, nterms) { 
        let retval = [];
        for (let p of powers) {
            retval.push(this.powerSequence(p,0,nterms));
        }
        return retval
    },
    main: function () {
        this.printPyramid() ;
        this.printChessBoard();
        const cube = x => x * square(x);
        const square = x => x * x;
        this.log(square(10));
        this.log(cube(10));
        this.log(this.multiplier(10)(10));
        this.log("%o", this.powerSequence(2,0,10));
        this.log("%o", this.powerSequence(3,0,10));
        this.log("%o", this.powerSequence(5,0,10));
        this.interpolate(10);
    }
} // App
lib.main();
