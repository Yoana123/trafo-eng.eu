const fetchTranslations = (code: string) =>
  import(`../locales/${code}.json`).then((module) => module.default)

export default fetchTranslations
