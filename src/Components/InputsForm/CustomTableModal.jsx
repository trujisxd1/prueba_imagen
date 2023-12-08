import { Form, Button } from 'antd'

const CustomTableModal = (props) => {
  const { ariaDescribedBy, rules = [], buttonName = '', ...restProps } = props

  return (
    <Form.Item rules={rules} aria-describedby={ariaDescribedBy} {...restProps}>
      <Button size='small' className='is-size-7' {...restProps}>{buttonName}</Button>
    </Form.Item>
  )
}

export default CustomTableModal
