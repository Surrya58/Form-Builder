export function ListComponent({ value }) {
  if (!value.label) {
    return null;
  }

  const arrayOfValues = value.label.split(",");

  return (
    <select>
      {arrayOfValues.map((curValue, index) => {
        return (
          <option key={index} id={curValue}>
            {curValue}
          </option>
        );
      })}
    </select>
  );
}
