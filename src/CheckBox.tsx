import { Control, Controller } from "react-hook-form"
import { IForm } from "./App"

interface Props {
    control: Control<IForm>
}

const CheckBox = ({control}: Props) => {
  return (
    <Controller 
        control={control}
        name='isImportant'
        render={({field}) => (
          <button
          style={{display: 'block', width: '100%', marginBottom: '20px'}}
          onClick={(e) => {
            e.preventDefault()
            field.onChange(!field.value)
          }}
          >{field.value ? 'important' : 'not important'}</button>
        )}/> 
  )
}

export default CheckBox