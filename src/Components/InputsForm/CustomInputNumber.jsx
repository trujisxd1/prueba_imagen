import React from 'react'
import { Form, InputNumber } from 'antd'

const CustomInputNumber = (props) => {
  const { ariaDescribedBy, rules = [], ...restProps } = props

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <InputNumber size='small' className='is-full-width' {...props} />
    </Form.Item>
  )
}

export default CustomInputNumber
