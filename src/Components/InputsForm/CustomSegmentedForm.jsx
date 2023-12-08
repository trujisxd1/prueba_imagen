import React from 'react'
import { Form, Segmented } from 'antd'

const CustomSegmentedForm = (props) => {
  const {
    ariaDescribedBy,
    rules = [],
    helpCapture,
    onClickHelpCapture,
    options,
    ...restProps
  } = props
  return (
    <>
      <Form.Item
        {...restProps}
        rules={rules}
        aria-describedby={ariaDescribedBy}
      >
        <Segmented options={options} {...props} />
      </Form.Item>
    </>
  )
}

export default CustomSegmentedForm
