import "./Button.css";

interface ButtonProps {
  title: string;
  onClick: Function;
  type: 'fill' | 'line';
  isLoadingConfig?: {
    value: boolean;
    textToShow: string;
  };
}

export const Button = (props: ButtonProps) => {
  return (
    <div className={`button--${ props.type }`} onClick={() => props.onClick()}>
      {
        props?.isLoadingConfig?.value
          ? <span>{props.isLoadingConfig.textToShow}</span>
          : props.title
      }
    </div >
  )
}
