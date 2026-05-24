import Card from "./components/card";

const App = () => {
  const jobs = [
    {
      brandlogo: "https://cdn-icons-png.magnific.com/512/720/720255.png",
      company: "Google",
      datePosted: "2 days ago",
      jobRole: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$45/hr",
      location: "Bangalore, India",
    },

    {
      brandlogo: "https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg",
      company: "Apple",
      datePosted: "1 week ago",
      jobRole: "UI Engineer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$58/hr",
      location: "Hyderabad, India",
    },

    {
      brandlogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      company: "Netflix",
      datePosted: "5 days ago",
      jobRole: "React Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$72/hr",
      location: "Mumbai, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdeDVxwJhsdMEbC2Ft1nDjdyjNOcCBMjeMSA&s",
      company: "Meta",
      datePosted: "3 weeks ago",
      jobRole: "Software Engineer Intern",
      tag1: "Internship",
      tag2: "Junior Level",
      pay: "$30/hr",
      location: "Delhi, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv48DgacV_072bfO_oyhmMXGnNvIgQwWoH5Q&s",
      company: "Amazon",
      datePosted: "4 days ago",
      jobRole: "Backend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$50/hr",
      location: "Pune, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEAqP8No_nw1fowHY2AGMpAaKxhfDryTBidQ&s",
      company: "Microsoft",
      datePosted: "6 days ago",
      jobRole: "Cloud Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$65/hr",
      location: "Noida, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      company: "Adobe",
      datePosted: "2 weeks ago",
      jobRole: "JavaScript Developer",
      tag1: "Part Time",
      tag2: "Mid Level",
      pay: "$40/hr",
      location: "Chennai, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJIOGtHi6yLhWs9gI0Bz1T83KoUzuqCQ7IQ&s",
      company: "Uber",
      datePosted: "1 day ago",
      jobRole: "Full Stack Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$68/hr",
      location: "Gurgaon, India",
    },

    {
      brandlogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjbS8r6aYVxWtur4DRqzLE-n1TiR5ngC4-bg&s",
      company: "Airbnb",
      datePosted: "8 days ago",
      jobRole: "Product Designer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$55/hr",
      location: "Remote",
    },

    {
      brandlogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Spotify_icon.svg/1280px-Spotify_icon.svg.png",
      company: "Spotify",
      datePosted: "3 days ago",
      jobRole: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Junior Level",
      pay: "$48/hr",
      location: "Bangalore, India",
    },
  ];

  return (
    <div className="parent">
      {jobs.map(function (elem, id) {
        return (
          <div key={id}>
            <Card
              logo={elem.brandlogo}
              company={elem.company}
              date={elem.datePosted}
              Role={elem.jobRole}
              tag1={elem.tag1}
              tag2={elem.tag2}
              pay={elem.pay}
              location={elem.location}
            />
            
          </div>
        );
      })}
    </div>
  );
};

export default App;
