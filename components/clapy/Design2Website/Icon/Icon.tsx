import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { EastIcon } from './EastIcon';
import classes from './Icon.module.css';

interface Props {
  className?: string;
}
/* @figmaId 4:38 */
export const Icon: FC<Props> = memo(function Icon(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.east}>
        <EastIcon className={classes.icon} />
      </div>
    </div>
  );
});
