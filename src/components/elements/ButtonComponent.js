export function ButtonComponent({ value }) {
  if (!value.label) {
    return null;
  }
  return <button>{value.label}</button>;
}
