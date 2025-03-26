// Components
import { LabelComponent } from "./elements/LabelComponent";
import { InputComponent } from "./elements/InputComponent";
import { ListComponent } from "./elements/ListComponent";
import { ButtonComponent } from "./elements/ButtonComponent";

// Constants
import { INPUT_KEYS } from "../constant";

const ELEMENTS_FACTORY = {
  [INPUT_KEYS.LABEL]: LabelComponent,
  [INPUT_KEYS.INPUT]: InputComponent,
  [INPUT_KEYS.LIST]: ListComponent,
  [INPUT_KEYS.BUTTON]: ButtonComponent,
};

const getLabelComponent = (key) =>
  key ? ELEMENTS_FACTORY[key] : LabelComponent;

export function RightPane({ elements }) {
  return (
    <div className="right-pane">
      {elements.map((element) => {
        const Component = getLabelComponent(element.type);

        return <Component value={element} />;
      })}
    </div>
  );
}
