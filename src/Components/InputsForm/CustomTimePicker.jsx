import React from 'react'
import { Form, TimePicker } from 'antd'

const CustomTimePicker = (props = {}) => {
  const { ariaDescribedBy, defaultValue, value, rules = [], handler, ...restProps } = props

  const handleData = ({ getValuesSelected }) => {
    const formatData = (data) => {
      const value = data?.format('YYYY-MM-DD HH:mm')
      return { data, value }
    }
    restProps.onChange = getValuesSelected({ ...restProps, formatData })

    return restProps
  }

  handler && handler({ ...props, handleData })

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <TimePicker size='small' format='HH:mm:ss' {...restProps} className='column is-full' />
    </Form.Item>
  )
}

export default CustomTimePicker
