const OPTIONS = [
  {
    type: "label",
  },
  {
    type: "input",
  },
  {
    type: "list",
  },
  {
    type: "button",
  },
];

export function LeftPane({ onAction }) {
  return (
    <div className="left-pane">
      {OPTIONS.map((option) => (
        <button
          onClick={() => onAction({ type: option.type })}
          key={option.type}
        >
          {option.type}
        </button>
      ))}
    </div>
  );
}
