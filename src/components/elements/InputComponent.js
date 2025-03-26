export function InputComponent({ value }) {
  if (!value.label) {
    return null;
  }
  return (
    <label>
      {value.label}
      <input type="text" />
    </label>
  );
}
