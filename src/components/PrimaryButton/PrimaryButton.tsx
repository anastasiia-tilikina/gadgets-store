import { FC, ReactNode, useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Styles } from '../../types/Styles';

const styles: Styles = require('./PrimaryButton.module.scss');

const {
  PrimaryButton: button,
  'PrimaryButton--dark': buttonDark,
  'PrimaryButton--selected': buttonSelected,
  'PrimaryButton--dark-selected': buttonDarkSelected,
} = styles.default;

type Props = {
  className?: string;
  onClick: () => void;
  selected: boolean;
  children: ReactNode;
};

export const PrimaryButton: FC<Props> = ({
  className = '',
  onClick,
  children,
  selected,
}) => {
  const { isThemeDark } = useContext(ThemeContext);

  return (
    <button
      className={cn(
        button,
        { [buttonDark]: isThemeDark },
        className,
        { [buttonSelected]: selected },
        { [buttonDarkSelected]: selected && isThemeDark },
      )}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

PrimaryButton.defaultProps = {
  className: '',
};
