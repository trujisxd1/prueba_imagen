import React from 'react'
import { Form } from 'antd'
import dayjs from 'dayjs'

const CustomDatePickerSeguimiento = (props = {}) => {
  const { ariaDescribedBy, rules = [], handler, value, onChange, ...restProps } = props

  const handleData = ({ getValuesSelected }) => {
    const formatData = (data) => {
      const value = data ? dayjs(data).format('YYYY-MM-DD') : ''
      return { data, value }
    }
    restProps.onChange = getValuesSelected({ ...restProps, formatData })

    return restProps
  }
  handler && handler({ ...props, handleData })

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <input type='date' className='is-full-width' />
    </Form.Item>
  )
}

export default CustomDatePickerSeguimiento
