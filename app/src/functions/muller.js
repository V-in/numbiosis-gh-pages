const math = require('mathjs')

function muller(f_, p0, p1, p2, tol, N) {
    function f(x) {
        return math.eval(f_.replace(/x/g, `(${x})`));
    }

    let h1 = math.subtract(p1, p0);
    let h2 = math.subtract(p2, p1);
    let delta1 = math.divide(math.subtract(f(p1), f(p0)), h1); //f(p1) = 1.1875, f(p0) = 1.4375
    let delta2 = math.divide(math.subtract(f(p2), f(p1)), h2);
    let d = math.divide(math.subtract(delta2, delta1), math.add(h2, h1));
    let i = 1

    let b
    let E
    let h
    let p
    let Discriminant

    /*
    b = 492
    d = 96
    delta1 = 204
    delta2 = 396
    */

    while (i <= N) {
        b = math.add(delta2, math.multiply(h2, d));
        Discriminant = math.sqrt(math.subtract(math.pow(b, 2), math.multiply(4, f(p2), d)));

        let cmp = math.compare(math.abs(math.subtract(b, Discriminant)), math.abs(math.add(b, Discriminant)))
        if (cmp <= 0) {
            E = math.add(b, Discriminant);
        } else {
            E = math.subtract(b, Discriminant);
        }

        h = math.divide(math.multiply(-2, f(p2)), E)
        p = math.add(p2, h)

        // Passo 6
        if (math.compare(math.abs(h), math.abs(tol)) == -1) {
            console.log(p)
            return p
        }

        // Passo 7 (Preparar para a proxima iteração)
        p0 = p1;
        p1 = p2;
        p2 = p;
        h1 = math.subtract(p1, p0);
        h2 = math.subtract(p2, p1);
        delta1 = math.divide(math.subtract(f(p1), f(p0)), h1);
        delta2 = math.divide(math.subtract(f(p2), f(p1)), h2);
        d = math.divide(math.subtract(delta2, delta1), math.add(h2, h1));
        i = i + 1;
    }
    console.log("Method failed after N iterations:", N)
}

//muller("x^4-3*(x^3)+x^2+x+1", 0.5, -0.5, 0, 10e-10, 25)

muller("x^2 - 6", 0, 3, 6, 10e-2, 12)
//muller("x^2 - 4", 0, 3, 6, 10e-4, 12)

//muller("12*x^4 + 12*x^3 - 12*x^2 - 12*x^1 + 6", 2, 3,4, 2e-10, 12)

export default muller