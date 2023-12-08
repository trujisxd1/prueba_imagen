import { Form, DatePicker } from 'antd'
import React from 'react'
const { RangePicker } = DatePicker

const CustomRangePicker = (props) => {
  const { ariaDescribedBy, rules = [], handler, ...restProps } = props

  const handleData = ({ getValuesSelected }) => {
    const formatData = (data) => {
      const value = data?.map(date => date?.format('YYYY-MM-DD'))
      return { data, value }
    }
    restProps.onChange = getValuesSelected({ ...restProps, formatData })

    return restProps
  }

  if (handler) {
    handler({ ...props, handleData })
  }

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <RangePicker size='small' {...restProps} className='column is-full' />
    </Form.Item>
  )
}

export default CustomRangePicker
