import { useLoaderData, useParams } from "react-router-dom";
import WebProjects from "./WebProjects";
import MobileProjects from "./MobileProjects";
import { useEffect, useState } from "react";

// ✅ Moved LoaderFunction above and exported it as named
// export async function LoaderFunction(type) {
//   const response = await fetch("http://localhost:5174/projects/" + type);
//   const data = await response.json();
//   return data;
// }

export default function ProjectTypeHandler() {
  const { type } = useParams();
  
  // const [projects, setProjects] = useState([]);
  // useEffect(() => {
  //   LoaderFunction(type).then(data => setProjects(data));
  // }, [type]);

  if (type === "web") return <WebProjects/>;
  if (type === "mobile") return <MobileProjects/>;
}
