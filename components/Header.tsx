import Image from "next/image";
import styles from "./Header.module.css";

type HeaderProps = {
  title: string;
  locale: "es" | "en";
  subtitle: string;
  ariaEnglish: string;
  ariaSpanish: string;
  onSelectLocale: (locale: "es" | "en") => void;
};

export default function Header({
  title,
  locale,
  subtitle,
  ariaEnglish,
  ariaSpanish,
  onSelectLocale,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.langSwitch}>
          <button
            type="button"
            className={`${styles.langButton} ${locale === "en" ? styles.langButtonActive : ""}`}
            aria-label={ariaEnglish}
            title="English"
            onClick={() => onSelectLocale("en")}
          >
            <Image src="/flags/us.svg" alt="USA" className={styles.flag} width={16} height={16} />
          </button>
          <button
            type="button"
            className={`${styles.langButton} ${locale === "es" ? styles.langButtonActive : ""}`}
            aria-label={ariaSpanish}
            title="Español"
            onClick={() => onSelectLocale("es")}
          >
            <Image src="/flags/co.svg" alt="Col" className={styles.flag} width={16} height={16} />
          </button>
        </div>
      </div>
    </header>
  );
}