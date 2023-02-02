import { FC, useContext } from 'react';
import cn from 'classnames';
import { ThemeContext } from '../../contexts/ThemeContext';
import { Styles } from '../../types/Styles';

const styles: Styles = require('./NotFoundPage.module.scss');

const {
  NotFoundPage: notFoundPage,
  'NotFoundPage--dark': notFoundPageDark,
} = styles.default;

export const NotFoundPage: FC = () => {
  const { isThemeDark } = useContext(ThemeContext);

  return (
    <div
      className={cn(
        notFoundPage,
        { [notFoundPageDark]: isThemeDark },
      )}
    >
      <h1>
        Page
        <br />
        {' '}
        <br />
        not found
      </h1>
    </div>
  );
};
