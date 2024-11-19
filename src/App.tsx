import { useForm } from 'react-hook-form'
import './App.scss'

function App() {

  const {register, handleSubmit} = useForm({
    mode: 'onChange',
  })

  const onSubmit = (data: any) => {
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
