

export const Years = () => {
    let arr=[];
for(let i=2022; i>=2007; i--) arr.push(i)
console.log(arr)
    return <div className="yearsdivouter1 yeardivouter2">
            <div className="gridyears">
                {arr.map((el)=> {
                    return <div key={el} className="eachgridyear">{el}</div>
                })}
            </div>


    </div>

}