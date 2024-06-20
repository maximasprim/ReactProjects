import './Button.scss';

interface ButtonProps {
  color: string;
  changeBGFunc: (color: string) => void;
}

export default function Button({ color, changeBGFunc }: ButtonProps) {
  return (
    <div className="buttons">
      <button className='button' onClick={() => changeBGFunc(color)}>
        {color}
      </button>
    </div>
  );
}
