import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Box_TypeDefault.module.css';

interface Props {
  className?: string;
  classes?: {
    _1?: string;
    root?: string;
    _4?: string;
    rectangle4206?: string;
    _2?: string;
    _3?: string;
  };
  hide?: {
    _4?: boolean;
    _1?: boolean;
    _2?: boolean;
    _3?: boolean;
  };
  text?: {
    _1?: ReactNode;
    phasellusVitae?: ReactNode;
    quisque?: ReactNode;
    porttitorVitaeVelAmet?: ReactNode;
    _12?: ReactNode;
  };
}
/* @figmaId 4:207 */
export const Box_TypeDefault: FC<Props> = memo(function Box_TypeDefault(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.rectangle4206 || ''} ${classes.rectangle4206}`}></div>
      <div className={classes.rectangle4207}></div>
      {props.hide?._4 === false && <div className={`${props.classes?._4 || ''} ${classes._4}`}></div>}
      {props.hide?._3 === false && <div className={`${props.classes?._3 || ''} ${classes._3}`}></div>}
      {props.hide?._2 === false && <div className={`${props.classes?._2 || ''} ${classes._2}`}></div>}
      {!props.hide?._1 && <div className={`${props.classes?._1 || ''} ${classes._1}`}></div>}
      <div className={classes.frame31}>
        <div className={classes.frame86}>
          {props.text?._1 != null ? props.text?._1 : <div className={classes._12}>1</div>}
          {props.text?._12 != null ? props.text?._12 : <div className={classes._13}>.</div>}
        </div>
        <div className={classes.frame30}>
          {props.text?.phasellusVitae != null ? (
            props.text?.phasellusVitae
          ) : (
            <div className={classes.phasellusVitae}>Phasellus Vitae</div>
          )}
          <div className={classes.frame29}>
            {props.text?.quisque != null ? props.text?.quisque : <div className={classes.quisque}>Quisque</div>}
            {props.text?.porttitorVitaeVelAmet != null ? (
              props.text?.porttitorVitaeVelAmet
            ) : (
              <div className={classes.porttitorVitaeVelAmet}>Porttitor vitae vel amet </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});
