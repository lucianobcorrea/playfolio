import Form from 'react-bootstrap/Form';
export function SelectMenu({ children, onChange, inputValue, inputName }) {
  return (
    <Form.Select name={inputName} value={inputValue} onChange={onChange}>
      {children}
    </Form.Select>
  );
}
