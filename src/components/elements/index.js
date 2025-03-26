// Components
import { LabelComponent } from "./LabelComponent";
import { InputComponent } from "./InputComponent";
import { ListComponent } from "./ListComponent";
import { ButtonComponent } from "./ButtonComponent";

// Constants
import { INPUT_KEYS } from "../../constant";

const ELEMENTS_FACTORY = {
  [INPUT_KEYS.LABEL]: LabelComponent,
  [INPUT_KEYS.INPUT]: InputComponent,
  [INPUT_KEYS.LIST]: ListComponent,
  [INPUT_KEYS.BUTTON]: ButtonComponent,
};

export const getLabelComponent = (key) =>
  key ? ELEMENTS_FACTORY[key] : LabelComponent;
