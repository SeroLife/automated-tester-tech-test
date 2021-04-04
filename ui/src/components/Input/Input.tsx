import "./Input.css";

interface InputProps {
  placeholder: string;
  onChange: Function;
  debounceTime?: number;
}

export const Input = (props: InputProps) => {
  let debounceTimeout: NodeJS.Timeout;

  const debounce = (fn: Function, value: string) => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
      fn(value);
    }, props.debounceTime ?? 0);
  }

  return (
    <div className="input">
      <input type="text" placeholder={props.placeholder} onChange={event => { debounce(props.onChange, event.currentTarget.value) }} />
    </div>
  )
}
