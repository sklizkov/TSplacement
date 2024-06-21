import { useTranslation } from 'react-i18next'
import { useAppStore } from '@/stores/appStore'

export const App = () => {
  const { t } = useTranslation()
  const stateTest = useAppStore(state => state.stateTest)

  return (
    <>
      <h1>
        TSplacement <i>{__VERSION__}</i>
      </h1>
      <a href={__REPO__} target="_blank">
        GitHub
      </a>
      <p>{ t('greeting') }</p>
      <p>{ stateTest ? ':-)' : ':-(' }</p>
    </>
  );
};
