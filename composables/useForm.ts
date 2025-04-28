import useVuelidate from '@vuelidate/core'
import { reactive } from 'vue'
import type { Ref, UnwrapNestedRefs } from 'vue'
import type { ValidationArgs } from '@vuelidate/core'

export type TFormArguments<T> = [
  initialValues: T,
  validations: ValidationArgs,
  vuelidateConfig?: any
]

export interface TForm<T> {
  values: UnwrapNestedRefs<T>
  $v: any // Endi $v ning tipi o'zgardi va uni kerakli formatda ishlatish mumkin
}

export function useForm<T extends object>(
  ...args: TFormArguments<T>
): TForm<T> {
  const [initialValues, validations, vuelidateConfig] = args

  const values = reactive<T>(initialValues)

  // useVuelidate bilan validatsiyani o'rnatish
  const $v = useVuelidate(validations, values, vuelidateConfig)

  return { values, $v }
}
