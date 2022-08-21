function processData(input:string) {

    const numbers:number[] = input.slice(3).split(" ").map(n=> Number(n))
    const size = numbers.length

    // MEAN - Average
    const mean = numbers.reduce((a,b)=> a+b,0).toFixed(1)/numbers.length
    console.log(mean)

    // MEDIAN
    const median = numbers.sort((a,b)=>a-b)
    if(size % 2 === 0){
        const firstMiddle = numbers[size/2]
        const secondMiddle = numbers[(size/2)-1]

        const median = (firstMiddle+secondMiddle)/2
        console.log(median)
    } else if (size %2 !==0){
        const median = numbers[Math.ceil(size / 2)]
        console.log(median)
    }

    // MODE
    let modeObj = {}
    let mostPopularNum = 0
    let mostPopularNumKey = 0

    numbers.forEach((number)=> {
        if(!modeObj[number]){
            modeObj[number]=1
        }else{
            modeObj[number]+=1
        }
    })

    for(let key in modeObj){
        const value = modeObj[key];
        if(value > mostPopularNum){
            mostPopularNum = value
            mostPopularNumKey = key
        }

    }
    console.log(mostPopularNumKey)
}
