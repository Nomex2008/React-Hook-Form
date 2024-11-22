import { SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'

interface IForm {
  'e-mail':string,
  'message':string
}

function App() {

  const {register, handleSubmit, formState, reset} = useForm<IForm>({
    mode: 'onChange',
  })

  const emailError = formState.errors['e-mail']?.message
  const messageError = formState.errors['message']?.message

  const onSubmit:SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Vite + React</h1>

      <button onClick={() => reset()}>Reset</button>

      <form onSubmit={handleSubmit(onSubmit)} action="">

        <input type="email" placeholder='Enter e-mail' 
        {...register('e-mail', {
          required: 'This field is required', 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address'
          }
        })}/>
        {emailError  && <p>{emailError}</p>}

        <textarea placeholder='Enter message:'
        {...register('message', {
          required: 'This field is required', 
        })}></textarea>
        {messageError  && <p>{messageError}</p>}
        
        <button type='submit'>Send</button>
      </form>
      
    </>
  )
}

export default App
