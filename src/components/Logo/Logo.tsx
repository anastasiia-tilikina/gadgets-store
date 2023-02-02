import { FC, useContext } from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Styles } from '../../types/Styles';

const styles: Styles = require('./Logo.module.scss');

const {
  Logo: logo,
  Logo__image: image,
} = styles.default;

type Props = {
  className?: string;
  onclick?: () => void;
};

export const Logo: FC<Props> = ({
  className = '',
  onclick = () => { },
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn(
      className,
      logo,
    )}
    >
      <Link
        to="/"
        onClick={onclick}
      >
        <img
          src={`./icons/Logo_${theme}.png`}
          alt="Logo"
          className={image}
        />
      </Link>
    </div>
  );
};

Logo.defaultProps = {
  className: '',
  onclick: () => { },
};
