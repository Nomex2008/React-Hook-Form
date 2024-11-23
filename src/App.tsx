import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'

interface IForm {
  'e-mail':string,
  'message':string,
  'isImportant': string
}

function App() {

  const {register, handleSubmit, formState, reset, /* watch ,*/ control} = useForm<IForm>({
    mode: 'onChange',
  })

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
