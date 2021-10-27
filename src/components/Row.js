import Pixel from './Pixel';

const Row = ({ width, selectedColor }) => {
  const pixels = [];

  for (let i = 1; i <= width; i += 1) {
    pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
  }

  return <div className='row'>{pixels}</div>;
};

export default Row;
