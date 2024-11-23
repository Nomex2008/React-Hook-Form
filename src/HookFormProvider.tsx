import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";


export interface IForm {
    'e-mail':string,
    'message':string,
    'isImportant': boolean
  }

export function HookFormProvider({children}:PropsWithChildren) {
    const methods = useForm<IForm>({
        mode: 'onChange',
        defaultValues: {
            'e-mail': '',
            'message': '',
            'isImportant': false,
        },
    });
    

    return <FormProvider {...methods}>{children}</FormProvider>
}