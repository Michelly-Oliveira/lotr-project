import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import booksImages from '../../services/images/books.json';

import Spinner from '../Spinner';

import { Container, Card, CardFront, CardBack } from './styles';

interface BookProps {
  _id: string;
  name: string;
  image_url: string | undefined;
}

const ListBooks: React.FC = () => {
  const [books, setBooks] = useState<BookProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadBooksData(): Promise<void> {
      const response = await api.get('/book');
      const booksData = response.data.docs;

      booksData.map((book: BookProps) => {
        const findImage = booksImages.find(img => img.name === book.name);

        book.image_url = findImage?.image_url;
      });

      setBooks(booksData);
      setIsLoading(false);
    }

    loadBooksData();
  }, []);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <ul>
          {books.map(book => (
            <Card key={book._id}>
              <div className="card-inner">
                <CardFront>
                  <img src={book.image_url} alt="book cover" />
                </CardFront>

                <CardBack>
                  <h3>
                    <strong>{book.name}</strong>
                  </h3>
                </CardBack>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </Container>
  );
};

export default ListBooks;
