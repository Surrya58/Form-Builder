export function LabelComponent({ value }) {
  if (!value.label) {
    return null;
  }
  return <div>{value.label}</div>;
}
