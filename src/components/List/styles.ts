import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Card = styled.div`
  height: 300px;
  width: 200px;
  border-radius: 10px;
  margin: 20px;

  perspective: 1000px;
  background-color: transparent;

  .card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }

  &:hover .card-inner {
    transform: rotateY(180deg);
  }
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  img {
    width: 100%;
    height: 300px;
    border-radius: 10px;
  }
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;

  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  transform: rotateY(180deg);

  p {
    font-size: 14px;
  }

  span {
    font-size: 12px;
  }
`;
