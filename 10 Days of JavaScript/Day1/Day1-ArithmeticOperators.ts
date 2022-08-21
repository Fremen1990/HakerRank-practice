export const getArea = (length: number, width: number) => {
    let area = length * width
    console.info(area)
    return area;
}

getArea(3, 4.5)

export const getPerimeter = (length: number, width: number) => {
    let perimeter = (length * 2) + (width * 2)
    console.log(perimeter)
    return perimeter;
}

getPerimeter(3, 4.5)
