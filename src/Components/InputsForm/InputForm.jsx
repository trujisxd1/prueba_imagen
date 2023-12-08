import React from 'react'
import { Form, Input } from 'antd'
import {
  UnorderedListOutlined
} from '@ant-design/icons'

const InputForm = (props) => {
  const {
    ariaDescribedBy,
    placeholder = '',
    rules = [],
    inputType = '',
    bordered = true,
    helpCapture,
    onClickHelpCapture,
    ...restProps
  } = props

  const InputComponent = inputType ? Input[inputType] : Input

  const addonAfter = helpCapture && <UnorderedListOutlined className='is-paddingless scale' onClick={() => onClickHelpCapture(helpCapture)} />
  return (
    <>
      <Form.Item
        {...restProps}
        rules={rules}
        aria-describedby={ariaDescribedBy}
      >
        <InputComponent className='is-full-width' size='small' placeholder={placeholder} bordered={bordered} addonAfter={addonAfter} visible={false} {...restProps} />
      </Form.Item>
    </>
  )
}

export default InputForm
