import { useEffect, useState } from "react";

function Student(){
    console.log("Component Rendering...")
    // const [std1,setStd1] = useState("Ihsan");
    const [std2,setStd2] = useState({
        name:"Hassan",
        age:19,
    })


    const handleClick = ()=>{
        if(std2.name === 'Usman') return ;
        setStd2({
            ...std2,
            name:"Usman",
        })
    }

    // now this reRendering is bad, we want to use our objects yet we want to avoid reRendering. What we do is, we will set somehow object back to non-primitve style(i-e use some variable\key inside of the object)



    return(
        <>
            <h2> Name: {std2.name} </h2>
            <h3> Age: {std2.age} </h3>

            <button onClick={handleClick}>
                Change Value
            </button>
        </>
    )

}

export default Student ;