import classNames from 'classnames'
import { Icon } from '../Icon'
import type { Props } from './types'
import './skill.scss'

export const Skill = ({ icon, name, grade, baseGrade, color }: Props) => {
  return (
    <div
      className={classNames('skill', {
        [`skill--${color}`]: color
      })}
    >
      <div className="left">
        <Icon name={icon} />
        <span>{name}</span>
      </div>
      <div className="right">
        <span>{grade}</span>
        <span>/</span>
        <span>{baseGrade}</span>
      </div>
    </div>
  )
}
