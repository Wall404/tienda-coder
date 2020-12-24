import { useEffect, useState } from "react";
import axios from "axios";

const Category = () => {
  const [people, setPeople] = useState([]);

  const getPeople = async () => {
    try {
      let response = await axios("http://swapi.dev/api/people/");
      setPeople(response.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <h1>Star Wars info</h1>
      {people.length ? (
        people.map((person) => (
          <article>
            <h2 key={person.created}>{person.name}</h2>
            <p>Altura: {person.height}</p>
            {person.starships.length && (
              <ul>
                {person.starships.map((nave, index) => (
                  <li key={index}>{nave}</li>
                ))}
              </ul>
            )}
          </article>
        ))
      ) : (
        <p>Cargando Personajes...</p>
      )}
    </>
  );
};

export default Category;
