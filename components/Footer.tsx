import styles from "./Footer.module.css";

type FooterProps = {
  footerFrontend: string;
  footerDevops: string;
  footerBottom: string;
};

export default function Footer({
  footerFrontend,
  footerDevops,
  footerBottom,
}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.title}>{footerFrontend}</h3>
            <ul className={styles.list}>
              <li>React / Vite</li>
              <li>Tailwind CSS</li>
              <li>DOMPurify (Security)</li>
            </ul>
          </div>
          <div>
            <h3 className={styles.title}>{footerDevops}</h3>
            <ul className={styles.list}>
              <li>Vercel</li>
              <li>GitHub Actions</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>{footerBottom}</p>
        </div>
      </div>
    </footer>
  );
}