import { Link } from '@dripfunnel/storefront-core/theme'
import styles from '../styles/sale.module.css'

/** A promotional strip for a running sale: a headline, a short line, and a link to shop it. */
export const SaleBanner = ({
  title = 'Sale is on — up to 50% off',
  lead = 'Limited time only. Grab your favourites before they are gone.',
  action = 'Shop the sale',
  href = '/collections/all/',
}: {
  title?: string
  lead?: string
  action?: string
  href?: string
}) => (
  <section className={styles.banner} aria-label={title}>
    <div className={styles.copy}>
      <p className={styles.title}>{title}</p>
      <p className={styles.lead}>{lead}</p>
    </div>
    <Link href={href} className={styles.button}>
      {action}
    </Link>
  </section>
)
