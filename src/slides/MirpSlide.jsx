import { BottomBar, Editable, EditableList, Slide } from '@deckio/deck-engine'
import ParticleField from '../components/ParticleField.jsx'
import SlideNumber from '../components/SlideNumber.jsx'
import styles from './MirpSlide.module.css'

const OBJECTIVES = [
  { id: 'rto', acronym: 'RTO', expansion: 'Recovery Time Objective', definition: 'How fast must we be back?', units: 'Minutes–hours' },
  { id: 'rpo', acronym: 'RPO', expansion: 'Recovery Point Objective', definition: 'How much data can we lose?', units: 'Seconds–hours' },
  { id: 'mtpd', acronym: 'MTPD', expansion: 'Max Tolerable Period of Disruption', definition: 'Business limit before unacceptable impact.', units: 'Hours–days' },
  { id: 'mao', acronym: 'MAO', expansion: 'Maximum Acceptable Outage', definition: 'Often used interchangeably with MTPD.', units: 'Business limit' },
]

const STEPS = [
  { id: 'trigger', number: '01', label: 'Trigger & declaration', description: 'Pre-agreed thresholds for declaring a major incident and activating the plan.' },
  { id: 'command', number: '02', label: 'Command & comms', description: 'Roles, decision rights, and comms cadence for execs, regulators, and customers.' },
  { id: 'sequence', number: '03', label: 'Recovery sequence', description: 'Restore the MVC tier first, then expand outward along service dependencies.' },
  { id: 'validation', number: '04', label: 'Restore validation', description: 'Prove restored systems are clean, consistent, and safe before going live.' },
  { id: 'reentry', number: '05', label: 'Reentry criteria', description: 'Conditions confirming the incident is closed and normal operations resume.' },
]

export default function MirpSlide({ index }) {
  return (
    <Slide index={index} className={styles.mirp}>
      <div className="accent-bar" />
      <div className={`orb ${styles.orb1}`} />
      <div className={`orb ${styles.orb2}`} />
      <ParticleField />

      <div className={`${styles.body} content-frame content-gutter`}>
        <Editable as="p" id="cat.mirp.eyebrow" className={styles.eyebrow}>
          Procedure · Major Incident Recovery Plan
        </Editable>
        <Editable as="h2" id="cat.mirp.title" className={styles.title}>
          MIRP turns recovery objectives into an executable plan
        </Editable>
        <Editable as="p" id="cat.mirp.lead" multiline className={styles.lead}>
          Recovery objectives are business decisions. The Major Incident Recovery Plan makes them executable across teams, dependencies, and validation gates.
        </Editable>

        <EditableList
          id="cat.mirp.objectives"
          items={OBJECTIVES}
          keyOf={(i) => i.id}
          className={styles.objectives}
          itemClassName={styles.objectiveCard}
        >
          {(o) => (
            <>
              <Editable as="span" id={`cat.mirp.objectives.${o.id}.acronym`} className={styles.acronym}>
                {o.acronym}
              </Editable>
              <Editable as="span" id={`cat.mirp.objectives.${o.id}.expansion`} className={styles.expansion}>
                {o.expansion}
              </Editable>
              <Editable as="p" id={`cat.mirp.objectives.${o.id}.definition`} className={styles.definition}>
                {o.definition}
              </Editable>
              <Editable as="span" id={`cat.mirp.objectives.${o.id}.units`} className={styles.units}>
                {o.units}
              </Editable>
            </>
          )}
        </EditableList>

        <div className={styles.stepsSection}>
          <span className={styles.sectionLabel} aria-hidden="true">MIRP key components</span>
          <EditableList
            id="cat.mirp.steps"
            items={STEPS}
            keyOf={(i) => i.id}
            className={styles.steps}
            itemClassName={styles.stepCard}
          >
            {(s) => (
              <>
                <Editable as="span" id={`cat.mirp.steps.${s.id}.number`} className={styles.stepNumber}>
                  {s.number}
                </Editable>
                <Editable as="p" id={`cat.mirp.steps.${s.id}.label`} className={styles.stepLabel}>
                  {s.label}
                </Editable>
                <Editable as="p" id={`cat.mirp.steps.${s.id}.description`} multiline className={styles.stepDescription}>
                  {s.description}
                </Editable>
              </>
            )}
          </EditableList>
        </div>
      </div>

      <BottomBar text={<Editable as="span" id="cat.mirp.footer">Azure Resiliency &amp; Recovery · MIRP</Editable>} />
      <SlideNumber index={index} />
    </Slide>
  )
}
