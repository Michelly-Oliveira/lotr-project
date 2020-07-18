import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import charactersImages from '../../services/images/characters.json';

import Spinner from '../Spinner';

import { Container, Card, CardFront, CardBack } from './styles';

interface CharactersProps {
  _id: string;
  name: string;
  image_url: string;
  gender: string;
  realm: string;
  race: string;
  birth: string;
  death: string;
}

const ListCharacters: React.FC = () => {
  const [characters, setCharacters] = useState<CharactersProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadCharactersData(): Promise<void> {
      const response = await api.get('/character');
      const charactersData = response.data.docs;

      const charactersWithImages = charactersData.filter(
        (character: CharactersProps) => {
          const findImage = charactersImages.find(
            img => img.name === character.name,
          );

          if (findImage) {
            character.image_url = findImage.image_url;
            return character;
          }

          return;
        },
      );

      setCharacters(charactersWithImages);
      setIsLoading(false);
    }

    loadCharactersData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {characters.map(character => (
            <Card key={character._id}>
              <div className="card-inner">
                <CardFront>
                  <img src={character.image_url} alt="character cover" />
                </CardFront>

                <CardBack>
                  <h3>
                    <strong>{character.name}</strong>
                    <br />
                    <span>
                      (Birth: {character.birth || 'unknow'} - Death:{' '}
                      {character.death || 'unknow'})
                    </span>
                  </h3>
                  <br />

                  <p>Race: {character.race || '-'}</p>
                  <br />

                  <p>Gender: {character.gender || '-'}</p>
                  <br />

                  <p>Realm: {character.realm || '-'}</p>
                </CardBack>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ListCharacters;
