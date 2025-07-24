import Card from './Card.jsx';
import useJobs from '../Hooks/useJobs.jsx';
import '../styles/ScrollableJobs.css';

function ScrollableJobs() {
  const jobs = useJobs();

  // If jobs is not an array (maybe it's an object), extract the array
  const jobList = Array.isArray(jobs) ? jobs : jobs?.data || [];

  if (jobList.length === 0) return <p>Loading...</p>;

  return (
    <div className="scroll-container">
      {jobList.map((job) => (
        <Card 
          key={job.id}
          title={job.title}
          description={job.description}
          img={job.images[0]} // Placeholder image
        />
      ))}
    </div>
  );
}

export default ScrollableJobs;
