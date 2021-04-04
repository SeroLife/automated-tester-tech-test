import { Button } from "../Button/Button";
import { FaArrowLeft } from 'react-icons/fa';
import { Variables } from "../../Variables";
import { useHistory } from "react-router";

interface HeaderProps {
  title: string;
  button?: {
    title: string;
    onClick: Function;
  };
  showBackArrow?: boolean;
}

export const Header = (props: HeaderProps) => {
  const location = useHistory();

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'baseline' }}>
        {
          props.showBackArrow
            ? <>
              <div style={{ cursor: 'pointer' }} onClick={() => location.goBack()}>
                <FaArrowLeft color={Variables.secondaryColor} size={20} style={{ marginRight: 24 }} />
              </div>
            </>
            : undefined
        }
        <h1>{props.title}</h1>
      </div>
      {
        props.button
          ? <Button type='line' title={props.button.title} onClick={props.button.onClick} />
          : undefined
      }
    </>
  );
}
