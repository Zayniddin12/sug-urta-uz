export interface IDefaultResponse<T> {
  status: string
  description: string
  count: number
  data: {
    items: T[]
    total: number
  }
  custom_message?: string
}

export interface IResponseInsuranceType<T> {
  guid: string
  name: string
  type: string
  img_url: string
  created_at: string
  updated_at: string
}

export interface IInsurance<T> {
  guid?: string
  name?: string
  insurance_type_id?: string
  type?: string[]
  description?: string
  insurance_icon?: string
  created_at?: string
  updated_at?: string
}

type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]
