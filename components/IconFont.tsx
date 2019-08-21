import React from 'react'

function IconFont(props) {
  const {
    type,
    className,
    title,
    ...restProps
  } = props
  return (
    <span title={title}>
      <svg className={`${className} icon`} aria-hidden='true' {...restProps}>
          <use xlinkHref={`#${type}`} />
      </svg>
    </span>
  )
}

IconFont.propTypes = {

}

export default IconFont

