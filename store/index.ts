import { defineStore } from 'pinia'
import type { IDefaultResponse, IResponseInsuranceType } from '~/types'

export const homeStore = defineStore('homeStore', {
  state: () => ({
    insurance: {
      list: [] as IResponseInsuranceType[],
      search: [] as IResponseInsuranceType[],
      pagination: {
        total: 0,
        page: 1,
      },
      params: {
        limit: 10,
        search: undefined as string | undefined,
      },
    },
    insuranceType: {
      list: [] as IResponseInsuranceType[],
      search: [] as IResponseInsuranceType[],
      pagination: {
        total: 0,
        page: 1,
      },
      params: {
        limit: 10,
        search: undefined as string | undefined,
      },
    },
    loading: {
      list: true,
      more: false,
    },
  }),
  actions: {
    fetchInsurances(force?: boolean, merge = false) {
      return new Promise((resolve, reject) => {
        if (this.insurance?.list?.length && !merge && !force) {
          resolve(this.insurance)
        } else {
          if (merge) {
            this.loading.more = true
          } else {
            this.loading.list = true
          }

          useApi()
            .$get<IDefaultResponse<IResponseInsuranceType>>('insurance-type/', {
              query: {
                page: this.insurance.pagination.page,
                limit: this.insurance.params.limit,
                search: this.insurance.params.search,
              },
            })
            .then((res) => {
              this.insurance.pagination.total = res?.data?.total
              if (merge) {
                this.insurance.list = [
                  ...this.insurance.list,
                  ...res?.data?.items,
                ]
              } else {
                this.insurance.list = res?.data?.items
              }
              resolve(res)
            })
            .catch(reject)
            .finally(() => {
              this.loading.list = false
              this.loading.more = false
            })
        }
      })
    },

    moreInsurance() {
      const totalPages = Math.ceil(
        this.insuranceType.pagination.total / this.insuranceType.params.limit
      )

      if (this.insuranceType.pagination.page < totalPages) {
        this.insuranceType.pagination.page += 1
        this.fetchInsurances(false, true)
      }
    },

    fetchInsuranceTypes(force?: boolean, merge = false) {
      return new Promise((resolve, reject) => {
        if (this.insuranceType?.list?.length && !merge && !force) {
          resolve(this.insuranceType)
        } else {
          if (merge) {
            this.loading.more = true
          } else {
            this.loading.list = true
          }

          useApi()
            .$get<IDefaultResponse<IResponseInsuranceType>>('insurance/', {
              query: {
                page: this.insuranceType.pagination.page,
                limit: this.insuranceType.params.limit,
                search: this.insuranceType.params.search,
              },
            })
            .then((res) => {
              this.insuranceType.pagination.total = res?.data?.total
              if (merge) {
                this.insuranceType.list = [
                  ...this.insuranceType.list,
                  ...res?.data?.items,
                ]
              } else {
                this.insuranceType.list = res?.data?.items
              }
              resolve(res)
            })
            .catch(reject)
            .finally(() => {
              this.loading.list = false
              this.loading.more = false
            })
        }
      })
    },

    moreInsuranceTypes() {
      const totalPages = Math.ceil(
        this.insuranceType.pagination.total / this.insuranceType.params.limit
      )

      if (this.insuranceType.pagination.page < totalPages) {
        this.insuranceType.pagination.page += 1
        this.fetchInsurances(false, true)
      }
    },
  },
})
