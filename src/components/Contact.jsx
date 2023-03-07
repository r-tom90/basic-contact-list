import { useEffect, useState } from "react";

import ContactCard from "./ContactCard";

const Contact = () => {
  const [results, setResults] = useState([]);

  // useEffect helps stop the endless loop of calling an API
  //? 2 methods of fetching
  // useEffect(() => {
  //   fetch("https://randomuser.me/api/?results=5")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //?       results from api tree shape
  //       setResults(data.results);
  //     });
  // }, []);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=10");
        const data = await response.json();
        // console.log(data);
        setResults(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchResults();
  }, []);

  return (
    <div className="container">
      {results.map((result, index) => (
        <ContactCard
          avatarUrl={result.picture.large}
          firstName={result.name.first}
          lastName={result.name.last}
          email={result.email}
          age={result.dob.age}
          key={index}
        />
      ))}
    </div>
  );
};

export default Contact;
