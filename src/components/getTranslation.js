import {useTranslation} from 'react-i18next'


export default label => {
  const {t} = useTranslation()

  return t(label)
}