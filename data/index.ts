export const insuranceList = () => {
  const { t } = useI18n()
  return [
    {
      id: 1,
      label: t('individual'),
      value: 'physical',
    },
    {
      id: 2,
      label: t('legal'),
      value: 'legal',
    },
  ]
}
export const insuranceTypeList = () => {
  const { t } = useI18n()
  return [
    {
      id: 1,
      label: t('active'),
      value: 'active',
    },
    {
      id: 2,
      label: t('completed'),
      value: 'completed',
    },
    {
      id: 3,
      label: t('clients'),
      value: 'clients',
    },
  ]
}
export const clientInsuranceTypeList = () => {
  const { t } = useI18n()
  return [
    {
      id: 1,
      label: t('active'),
      value: 'active',
    },
    {
      id: 2,
      label: t('completed'),
      value: 'completed',
    },
  ]
}
export const profileNavigations = () => {
  const { t } = useI18n()
  return [
    {
      id: 1,
      label: t('personal_information'),
      value: '/profile/information',
      icon: 'icon-user',
    },
    {
      id: 2,
      label: t('balance'),
      value: '/balance',
      icon: 'icon-credit-card',
    },
    {
      id: 3,
      label: t('statistics'),
      value: '/profile/statistics',
      icon: 'icon-pie',
    },
    {
      id: 4,
      label: t('saved'),
      value: '/profile/saved',
      icon: 'icon-save',
    },
    {
      id: 5,
      label: t('about_program'),
      value: '',
      icon: 'icon-info',
    },
  ]
}
