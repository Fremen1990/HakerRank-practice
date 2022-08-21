'use strict';

const con_let = (r:number) => {
    const PI = Math.PI
    // Print the area of the circle:
    const area = PI * (Math.pow(r, 2))
    console.info(area)

    // Print the perimeter of the circle:
    const perimeter = 2 * PI * r
    console.info(perimeter)

}
