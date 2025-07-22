import { useLoaderData } from "react-router-dom";

function Github(){
    let data = useLoaderData();
    // this had many repos in it
    return(
        <>
            {data.map((repo) => (
                <div key={repo.id}>
                    <h2>{repo.name}</h2>
                </div>
            ))}
        </>
    )
}

export default Github;