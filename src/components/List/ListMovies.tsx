import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import moviesImages from '../../services/images/movies.json';

import Spinner from '../Spinner';

import { Container, Card, CardFront, CardBack } from './styles';

interface MovieProps {
  _id: string;
  name: string;
  image_url: string | undefined;
  runtimeInMinutes: string;
  academyAwardWins: number;
  academyAwardNominations: number;
}

const ListMovies: React.FC = () => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadMoviesData(): Promise<void> {
      const response = await api.get('/movie');
      const moviesData = response.data.docs;

      // Remove two first items = series
      moviesData.splice(0, 2);
      console.log(moviesData);

      moviesData.map((movie: MovieProps) => {
        const findImage = moviesImages.find(img => img.name === movie.name);

        movie.image_url = findImage?.image_url;
      });

      setMovies(moviesData);
      setIsLoading(false);
    }

    loadMoviesData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {movies.map(movie => (
            <Card key={movie._id}>
              <div className="card-inner">
                <CardFront>
                  <img src={movie.image_url} alt="movie cover" />
                </CardFront>

                <CardBack>
                  <h3>
                    <strong>{movie.name}</strong>
                  </h3>
                  <br />

                  <p>Runtime: {movie.runtimeInMinutes} min</p>
                  <br />

                  <p>Awards: {movie.academyAwardWins}</p>
                  <br />

                  <p>Nominations: {movie.academyAwardNominations}</p>
                </CardBack>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ListMovies;
