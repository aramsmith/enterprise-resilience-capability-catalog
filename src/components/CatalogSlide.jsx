import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import ParticleField from './ParticleField.jsx'
import SlideNumber from './SlideNumber.jsx'
import styles from './CatalogSlide.module.css'

function DiamondIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M12 2 L21 9 V15 Q21 20 12 23 Q3 20 3 15 V9 Z"
        fill="var(--accent)"
        fillOpacity="0.22"
        stroke="var(--accent)"
        strokeWidth="1.6"
      />
    </svg>
  )
}

/**
 * Reusable catalog slide: eyebrow + title + lead + a responsive grid of
 * capability cards. Each card carries a label, a one-line body, and an
 * optional `tag` line listing the contributing Azure services.
 */
export default function CatalogSlide({
  index,
  idBase,
  eyebrow,
  title,
  lead,
  items,
  footer,
  columns = 3,
  callout,
}) {
  const colClass = columns === 2 ? styles.cols2 : columns === 4 ? styles.cols4 : styles.cols3
  return (
    <Slide index={index} className={styles.slide}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="p" id={`${idBase}.eyebrow`} className={styles.eyebrow}>
          {eyebrow}
        </Editable>
        <Editable as="h2" id={`${idBase}.title`} className={styles.title}>
          {title}
        </Editable>
        {lead ? (
          <Editable as="p" id={`${idBase}.lead`} multiline className={styles.lead}>
            {lead}
          </Editable>
        ) : null}

        <EditableList
          id={`${idBase}.items`}
          items={items}
          keyOf={(i) => i.id}
          className={`${styles.cards} ${colClass}`}
          itemClassName={styles.card}
        >
          {(i) => (
            <>
              <span className={styles.cardChip} aria-hidden="true">
                <DiamondIcon />
              </span>
              <Editable as="h3" id={`${idBase}.${i.id}.label`} className={styles.cardLabel}>
                {i.label}
              </Editable>
              <Editable as="p" id={`${idBase}.${i.id}.body`} multiline className={styles.cardBody}>
                {i.body}
              </Editable>
              {i.tag ? (
                <Editable as="p" id={`${idBase}.${i.id}.tag`} className={styles.cardTag}>
                  {i.tag}
                </Editable>
              ) : null}
            </>
          )}
        </EditableList>

        {callout ? (
          <div className={styles.callout}>
            <span className={styles.calloutMark} aria-hidden="true">
              <DiamondIcon />
            </span>
            <Editable as="p" id={`${idBase}.callout`} multiline className={styles.calloutText}>
              {callout}
            </Editable>
          </div>
        ) : null}
      </div>

      <BottomBar text={<Editable as="span" id={`${idBase}.footer`}>{footer}</Editable>} />
      <SlideNumber index={index} />
    </Slide>
  )
}
