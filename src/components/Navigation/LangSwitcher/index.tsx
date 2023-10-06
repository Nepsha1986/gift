import styles from './styles.module.scss';

type Language = {
  lang: string,
  path: string;
}
interface Props {
  languages: Language[]
}
const LangSwitcher = ({languages}: Props) => {
  return (
    <ul className={styles.langSwitcher}>
      {languages.map(({lang, path}) => (
        <li className={styles.langSwitcher__item}>
          <a className={styles.langSwitcher__link} href={path}>{lang}</a>
        </li>
      ))}
    </ul>
  )
}

export default LangSwitcher;