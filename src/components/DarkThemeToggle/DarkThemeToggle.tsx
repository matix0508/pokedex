import React, { FC } from 'react'
import styles from "./DarkThemeToggle.module.scss";
import classNames from 'classnames';
import {toggle} from "../../features/darkModeSlice";
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';


export const DarkThemeToggle:FC = () => {
    const dispatch = useAppDispatch();
    const dark = useAppSelector((state: RootState) => state.darkMode.dark)
    return (
    <div onClick={() => dispatch(toggle())} className={classNames([styles.DarkThemeToggle, {secondary: !dark, "secondary-dark": dark}])}>DarkThemeToggle</div>
  )
}
