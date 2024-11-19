import { SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'

interface IForm {
  'e-mail':string,
  'message':string
}

function App() {

  const {register, handleSubmit} = useForm<IForm>({
    mode: 'onChange',
  })

  const onSubmit:SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Vite + React</h1>

      <form onSubmit={handleSubmit(onSubmit)} action="">
        <input type="text" placeholder='Enter e-mail' 
        {...register('e-mail', {
          required: 'This field is required', 
        })}/>
        <textarea placeholder='Enter massage:'></textarea>
        <button type='submit'>Send</button>
      </form>
      
    </>
  )
}

export default App
