import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { Icon } from '../Icon/Icon';
import classes from './Button_StateDefaultColorWhite.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:45 */
export const Button_StateDefaultColorWhite: FC<Props> = memo(function Button_StateDefaultColorWhite(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.loremIpsum}>Lorem Ipsum</div>
      <Icon />
    </button>
  );
});
