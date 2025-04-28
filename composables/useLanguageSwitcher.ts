export const useLanguageSwitcher = () => {
  const { locale, setLocale } = useI18n()
  const cookieLocale = useCookie('locale')

  const languagesList = [
    {
      name: 'Ўзбек',
      code: 'uzc',
      img: '/images/flags/uzb.svg',
    },
    {
      name: "O'zbekcha",
      code: 'uz',
      img: '/images/flags/uzb.svg',
    },
    {
      name: 'Russian',
      code: 'ru',
      img: '/images/flags/ru.svg',
    },
  ]

  const currentLanguage = computed(() =>
    languagesList.find((lang) => lang.code === locale.value)
  )

  function changeLocale(_locale: string) {
    setLocale(_locale)
    cookieLocale.value = _locale
  }

  return { currentLanguage, languagesList, changeLocale }
}
