import { useTranslation } from 'react-i18next'

export const App = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1>
        TSplacement <i>{__VERSION__}</i>
      </h1>
      <a href={__REPO__} target="_blank">
        GitHub
      </a>
      <p>{ t('greeting') }</p>
    </>
  );
};
