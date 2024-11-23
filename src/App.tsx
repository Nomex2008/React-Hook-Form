import { useEffect } from 'react'
import {SubmitHandler, useForm, useFormContext } from 'react-hook-form'
import './App.scss'
import CheckBox from './CheckBox'
import { HookFormProvider, IForm } from './HookFormProvider'

function App() {

  const {formState, handleSubmit, register, reset} = useFormContext<IForm>()

   /*
   setValue('e-mail', 'alexboris1004@gmail.com')
  const emailWatch = watch('e-mail')

  useEffect(() => {
    console.log(emailWatch)
  }, [emailWatch])

 useEffect(() => {
    reset({
    'e-mail': "alexboris1004@gmail.com",
      message: 'ergre',
    })
  }, [reset])
  */

  const emailError = formState.errors['e-mail']?.message
  const messageError = formState.errors['message']?.message

  const onSubmit:SubmitHandler<IForm> = (data) => {
    console.log(data)
  }

  return (
    <>
      <h1>Vite + React</h1>

      <form onSubmit={handleSubmit(onSubmit)} action="">

        <input type="email" placeholder='Enter e-mail' 
        {...register('e-mail', {
          required: 'This field is required!', 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: 'Invalid email address!'
          }
        })}/>
        {emailError  && <p style={{color: 'red',position: 'absolute', left: '5%', bottom: '0'}}>{emailError}</p>}

        <textarea placeholder='Enter message:'
        {...register('message', {
          required: 'This field is required', 
        })}></textarea>
        {//{messageError  && <p>{messageError}</p>}
        }

        <CheckBox/>
        
        <button
        onClick={() => reset()}>Reset</button>
        
        <button
        style={{marginLeft: '10px'}}
         type='submit'>Send</button>
      </form>
      
    </>
  )
}

export default App
