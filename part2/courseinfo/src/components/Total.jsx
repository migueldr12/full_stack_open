const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => acc + part.exercises, 0);

  return <strong>total of {total} exercise</strong>;
};

export default Total;
