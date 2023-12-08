import React from 'react'
import InputForm from './InputForm'
import CustomSelectForm from './CustomSelectForm'
import CustomDatePicker from './CustomDatePicker'
import CustomDatePickerSeguimiento from './CustomDatePickerSeguimiento'
import CustomInputNumber from './CustomInputNumber'
import CustomRangePicker from './CustomRangePicker'
import CustomButton from './CustomButton'
import CustomTableModal from './CustomTableModal'
import CustomTimePicker from './CustomTimePicker'
import ListTag from './ListTag'
import CustomFile from './CustomFile'
import CustomSegmentedForm from './CustomSegmentedForm'
import { Col } from 'antd'

const DividerTitle = ({ titleForm, classInput = '' }) => <p className={`is-size-5 has-text-weight-semibold has-margin-bottom-10 ${classInput}`}>{titleForm}</p>

const objInput = {
  InputForm,
  CustomSelectForm,
  CustomDatePicker,
  CustomDatePickerSeguimiento,
  CustomInputNumber,
  CustomRangePicker,
  CustomButton,
  CustomTableModal,
  CustomTimePicker,
  ListTag,
  DividerTitle,
  CustomFile,
  CustomSegmentedForm
}

const InputsFormik = ({ arrayData, onClickHelpCapture, setFileList = () => { }, fileList = [], formKey = '', keyFormRequest = '' }) => {
  const list = arrayData.map((input, index) => {
    const {
      classInput = 'is-12',
      columnFormType = 'InputForm',
      classLabel,
      xs,
      sm,
      md,
      lg,
      titleForm = '',
      arraySelect = [],
      optionName = '',
      optionValue = '',
      prefix = null,
      suffix = null,
      ...restData
    } = input

    const InputOption = objInput[columnFormType] || null

    if (columnFormType === 'InputForm' && onClickHelpCapture) {
      restData.onClickHelpCapture = onClickHelpCapture
    }

    const objInputForm = {
      ...restData
    }

    if (columnFormType === 'CustomFile') {
      objInputForm.setFileList = setFileList
      objInputForm.fileList = fileList
    }

    if (columnFormType === 'DividerTitle') objInputForm.titleForm = titleForm

    if (columnFormType === 'CustomSelectForm') {
      objInputForm.arraySelect = arraySelect
      objInputForm.optionName = optionName
      objInputForm.optionValue = optionValue
    }

    objInputForm.prefix = objInputForm.prefix ? <span /> : prefix
    objInputForm.suffix = objInputForm.suffix ? <span /> : suffix

    const renderInputForm = !formKey && !keyFormRequest
      ? (
        <div key={`input-form-${index}`} className={`column is-paddingless px-1 remove-margin-item-form ${classInput}`}>
          <InputOption {...objInputForm} />
        </div>
        )
      : (
        <Col key={`input-form-${index}`} xs={xs} sm={sm} md={md} lg={lg}>
          <InputOption {...objInputForm} />
        </Col>
        )

    return renderInputForm
  })

  return <>{list.length ? list : null}</>
}

export default InputsFormik
