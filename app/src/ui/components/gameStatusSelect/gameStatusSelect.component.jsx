import { SelectMenu } from '../../index';
import { STATUS } from '../../../helpers/statusList';

export function GameStatusSelect({ handleGameInputChange, statusInput }) {
  return (
    <SelectMenu
      onChange={handleGameInputChange}
      inputName="status"
      inputValue={statusInput.status}
    >
      {STATUS.map(({ value, text }, index) => {
        return (
          <option key={index} value={value}>
            {text}
          </option>
        );
      })}
    </SelectMenu>
  );
}
