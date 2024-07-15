import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Box_TypeDefault } from './Box_TypeDefault/Box_TypeDefault';
import { Button_StateDefaultColorWhite } from './Button_StateDefaultColorWhite/Button_StateDefaultColorWhite';
import classes from './Design2Website.module.css';

interface Props {
  className?: string;
  hide?: {
    _4?: boolean;
    _1?: boolean;
    _2?: boolean;
    _12?: boolean;
    _3?: boolean;
    _13?: boolean;
  };
}
/* @figmaId 10:1445 */
export const Design2Website: FC<Props> = memo(function Design2Website(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.frame46}>
        <div className={classes.frame28}>
          <div className={classes.quisquePorttitorVitaeVelAmetNe}>
            Quisque porttitor vitae vel amet neque scelerisque mattis. Consectetur nibh velit magna consectetur leo.{' '}
          </div>
          <div className={classes.cursusIntegerConseqAliquamTris}>
            <div className={classes.textBlock}>Cursus Integer Conseq</div>
            <div className={classes.textBlock2}>Aliquam Tristique. </div>
          </div>
        </div>
        <Button_StateDefaultColorWhite />
      </div>
      <Box_TypeDefault className={classes.box} classes={{ _1: classes._1 }} />
      <Box_TypeDefault
        className={classes.box2}
        classes={{ _4: classes._4 }}
        hide={{
          _4: false,
          _1: true,
        }}
        text={{
          _1: <div className={classes._12}>4</div>,
          phasellusVitae: <div className={classes.phasellusVitae}>Velit Odio Phir</div>,
          quisque: <div className={classes.quisque}>Ametneq</div>,
          porttitorVitaeVelAmet: <div className={classes.porttitorVitaeVelAmet}>magna consectetur leo. </div>,
        }}
      />
      <Box_TypeDefault
        className={classes.box3}
        classes={{ rectangle4206: classes.rectangle4206, _2: classes._2 }}
        hide={{
          _2: false,
          _1: true,
        }}
        text={{
          _1: <div className={classes._13}>2</div>,
          _12: <div className={classes._14}>.</div>,
          phasellusVitae: <div className={classes.phasellusVitae2}>Iaculis Magna</div>,
          quisque: <div className={classes.quisque2}>Porttitor</div>,
          porttitorVitaeVelAmet: <div className={classes.porttitorVitaeVelAmet2}>neque scelerisque mattis. </div>,
        }}
      />
      <Box_TypeDefault
        className={classes.box4}
        classes={{ rectangle4206: classes.rectangle42062, _3: classes._3 }}
        hide={{
          _3: false,
          _1: true,
        }}
        text={{
          _1: <div className={classes._15}>3</div>,
          _12: <div className={classes._16}>.</div>,
          phasellusVitae: <div className={classes.phasellusVitae3}>Eleifend Pulvinar </div>,
          quisque: <div className={classes.quisque3}>Vitae</div>,
          porttitorVitaeVelAmet: <div className={classes.porttitorVitaeVelAmet3}>Consectetur nibh velit </div>,
        }}
      />
    </div>
  );
});
