import React from 'react'
import { Form, DatePicker } from 'antd'

const CustomDatePicker = (props = {}) => {
  const { ariaDescribedBy, rules = [], handler, value, onChange, placeholder, ...restProps } = props

  const handleData = ({ getValuesSelected }) => {
    const formatData = (data) => {
      const value = data?.format('YYYY-MM-DD')
      return { data, value }
    }
    restProps.onChange = getValuesSelected({ ...restProps, formatData })

    return restProps
  }
  handler && handler({ ...props, handleData })

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <DatePicker placeholder={placeholder} allowClear={false} className='is-full-width' size='small' disabled={restProps.disabled} {...restProps} />
    </Form.Item>
  )
}

export default CustomDatePicker
