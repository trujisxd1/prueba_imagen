import React from 'react'
import { Form, Button } from 'antd'

const CustomButton = (props) => {
  const { ariaDescribedBy, rules = [], name = '', ...restProps } = props

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <Button className='is-size-7' size='small' {...restProps}>
        {name}
      </Button>
    </Form.Item>
  )
}

export default CustomButton
