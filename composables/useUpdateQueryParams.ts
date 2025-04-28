export function useUpdateQueryParams() {
  const router = useRouter()
  const route = useRoute()

  const updateQueryParams = async (key: string, value: string | undefined) => {
    const queryParams = { ...route.query }

    if (value !== undefined && value !== null) {
      queryParams[key] = value
    } else {
      delete queryParams[key]
    }

    await router.replace({
      name: route.name || undefined,
      query: queryParams,
    })
  }

  return {
    updateQueryParams,
  }
}
