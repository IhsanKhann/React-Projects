import { useEffect, useState } from "react";

function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading,setLoading] = useState(true) 

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => 
        res.json()
    )
      .then((data) => {
        setJobs(data.products)
        setLoading(false)
    })
      .catch(err => {
        console.error("Error fetching jobs:", err);
        setJobs([]);
        setLoading(true)
      });
  }, []);

  console.log(jobs) ;
  return jobs;
}

export default useJobs;
