import { toFormValidator } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import * as zod from 'zod';
export const useMainForm = () => {
  const emailValidator = zod.object({
    email: zod.string()
      .email('email format').min(1, 'email required'),
    password: zod.string()
      .min(1),
  });

  const phoneValidator = zod.object({
    phone: zod.string()
      .min(10, 'phone at least 10'),
    password: zod.string()
      .min(1),
  });

  const mainToggle: Ref<'email' | 'phone'> = ref('email');

  const emailValidationSchema = toFormValidator(emailValidator);
  const phoneValidationSchema = toFormValidator(phoneValidator);

  const validationSchema = computed(() => {
    return mainToggle.value === 'email' ? 
      emailValidationSchema :
      phoneValidationSchema;
  });
  const initialValues: zod.infer<typeof emailValidator> | zod.infer<typeof phoneValidator> = {
    email: '',
    phone: '',
    password: '',
  }

  const { 
    handleSubmit, 
    resetForm, 
    errors
  } = useForm({
    validationSchema,
    initialValues,
  });

  const { value: email } = useField('email');
  const { value: phone } = useField('phone');
  const { value: password } = useField('password');

  const mainSubmit = handleSubmit((value) => {
    console.log(value);
  })


  return {
    email,
    phone,
    password,
    mainSubmit, 
    resetForm, 
    errors,
    mainToggle,
  }
}

