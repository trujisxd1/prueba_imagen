import React from 'react'
import { Form, Select, Typography } from 'antd'
const { Option } = Select
const { Title } = Typography

const CustomSelect = (props) => {
  const {
    titleSelect = '',
    keyName = '',
    arraySelect = [],
    ariaDescribedBy,
    rules = [],
    optionName = '',
    optionValue = '', // eslint-disable-next-line
    columnFormType = '',
    ...restProps
  } = props
  return (
    <>
      <Title className='has-main-title-color is-marginless' level={5}>{titleSelect}</Title>
      <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
        <Select size='small' {...restProps}>
          {arraySelect.map((option, index) => {
            return (
              <Option key={`${keyName}-${index}`} value={option[optionValue]}>
                {option[optionName]}
              </Option>
            )
          })}
        </Select>
      </Form.Item>
    </>
  )
}

export default CustomSelect
