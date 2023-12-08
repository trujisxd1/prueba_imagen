import  { useEffect } from 'react'
import useFiltersService from '../../hooks/useFiltersService'
import { Form, Button, Row } from 'antd'
import InputsFormik from '../InputsForm'
import { useHookRequest } from '@hooks'

const { useGetRequest } = useHookRequest
const inputsToRender = {
  select: 'CustomSelectForm',
  input: 'InputForm',
  title: 'DividerTitle',
  dateTime: 'CustomDatePicker',
  textArea: 'TextArea'
}

const inputProperties = {
  money: {
    prefix: <span>$</span>
  }
}

const fillSelectValue = ({ dataForm = [], arrayToChange = [] }) => {
  return dataForm.map((item) => {
    const test = arrayToChange.find(
      (itemToFind) => itemToFind.sourceToSearch === item.name
    )

    if (test) item = { ...item, ...test.objItem, value: 'Oportunidad' }
    return item
  })
}

const FormContainer = (props) => {
  const {
    formProps = {},
    nameForm = '',
    arrayData = [],
    titleButton = '',
    initialValues = {},
    onSubmit,
    topComponent = null,
    bottomComponent = null,
    isLoadingButton = false,
    form,
    arrayToChange = [],
    handleOnRow,
    buttonStyle = 'is-full-width has-margin-top-20',
    setFileList = () => { },
    fileList = [],
    formKey = '',
    keyFormRequest = '',
    allCatalogs = {},
    setArrayData = () => { },
    addPropertiesForm = {}
  } = props
  const dynamicForms = useGetRequest({
    pathUrl: `/crud-recurso/xpCovGMCamposFormulario?addAllColumns=true&mostrar=1&massive=true&claveFormulario=${formKey}`,
    keyRequest: keyFormRequest,
    auth: true,
    configGet: {
      enabled: Boolean(keyFormRequest && formKey),
      onSuccess: ({ catalogData = [] }) => {
        const formToShow = catalogData.map((item) => {
          const { clave = '', nombre = '', tipoInput = '', xs = 24, sm = 24, md = 24, lg = 24, esRequerido = 0, caracteresMin = 0, caracteresMax = 0, propiedades = '', bloqueado = 0 } = item
          let columnToRender = {
            name: clave,
            label: nombre,
            ariaDescribedBy: nombre,
            placeholder: nombre,
            columnFormType: inputsToRender[tipoInput],
            titleForm: nombre,
            xs,
            sm,
            md,
            lg
          }
          let rules = []

          if (esRequerido) {
            rules = [{
              required: true,
              message: `Ingrese ${nombre}`
            }]
          }

          if (caracteresMin !== null && caracteresMax !== null) {
            rules = [
              ...rules,
              {
                min: caracteresMin,
                max: caracteresMax,
                message: `${nombre} mínimo de ${caracteresMin} y máximo de ${caracteresMax}`
              }
            ]
          } else if (caracteresMin !== null) {
            rules = [
              ...rules,
              {
                min: caracteresMin,
                message: `${nombre} mínimo de ${caracteresMin} caracteres`
              }
            ]
          }

          if (caracteresMax !== null) {
            rules = [
              ...rules,
              {
                max: caracteresMax,
                params: [caracteresMax, `${nombre} máximo de ${caracteresMax} caracteres`]
              }
            ]
          }

          if (bloqueado) {
            columnToRender.disabled = bloqueado
          }

          columnToRender.rules = rules

          const verifyAddExternalProperties = addPropertiesForm[clave] || {}
          const verifyInputProperties = inputProperties[propiedades] || {}
          if (addPropertiesForm[clave]) columnToRender = { ...columnToRender, ...verifyAddExternalProperties }
          if (inputProperties[propiedades]) columnToRender = { ...columnToRender, ...verifyInputProperties }

          return columnToRender
        })

        setArrayData(formToShow)
      }
    }
  })

  const getValueRow = (dataRow = {}) => {
    const formData = form.getFieldValue()
    formData[dataRow.key] = dataRow.value
    if (dataRow.takeValues) {
      dataRow.takeValues?.forEach((item) => {
        formData[item.key] = dataRow[item.value]
      })
    }
    handleOnRow && handleOnRow(formData, dataRow)
    form.setFieldsValue(formData)
  }
  const filter = useFiltersService({ getValueRow })

  useEffect(() => {
    if (arrayToChange.length) {
      setArrayData(fillSelectValue({ dataForm: arrayData, arrayToChange }))
    }
  }, [arrayToChange])

  useEffect(() => {
    if (Object.keys(allCatalogs).length && arrayData.length && dynamicForms.isSuccess) {
      const addNewInfoDataForm = arrayData.map((column) => {
        const { name = '' } = column

        if (allCatalogs[name]) {
          column.arraySelect = allCatalogs[name]
        }

        return column
      })

      setArrayData(addNewInfoDataForm)
    }
  }, [allCatalogs, dynamicForms.isSuccess])

  const onClickHelpCapture = (helpData) => {
    const item = filter.onCallCapture({
      ...helpData,
      columnFormType: 'CustomButton'
    })
    item.onClick()
  }

  const showStaticDynamicForm = !formKey && !keyFormRequest
    ? (
      <div className='columns is-marginless is-mobile is-multiline'>
        {props.children || <InputsFormik arrayData={arrayData} onClickHelpCapture={onClickHelpCapture} setFileList={setFileList} fileList={fileList} formKey={formKey} keyFormRequest={keyFormRequest} />}
      </div>
      )
    : (
      <Row gutter={[8, 0]}>
        {props.children || <InputsFormik arrayData={arrayData} onClickHelpCapture={onClickHelpCapture} setFileList={setFileList} fileList={fileList} formKey={formKey} keyFormRequest={keyFormRequest} />}
      </Row>
      )

  return (
    <>
      {filter.modalHelpCapture}
      <Form
        name={nameForm}
        form={form}
        initialValues={
          Object.keys(initialValues).length
            ? initialValues
            : arrayData.reduce((acum, item) => {
              const { name = '' } = item
              return {
                ...acum,
                [name]: ''
              }
            }, {})
        }
        layout='vertical'
        onFinish={onSubmit}
        autoComplete='off'
        {...formProps}
      >
        {showStaticDynamicForm}
        {topComponent}
        {titleButton
          ? (
            <div className='is-flex is-justify-content-flex-end'>
              <Button type='primary' htmlType='submit' loading={isLoadingButton} className={buttonStyle}>
                {titleButton}
              </Button>
            </div>
            )
          : null}
        {bottomComponent}
      </Form>
    </>
  )
}

export default FormContainer
