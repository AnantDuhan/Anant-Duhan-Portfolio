import { CaseStudyLayout, Section, Code } from '../components/case-study/CaseStudyLayout'
import { Diagram, Box, Arrow } from '../components/case-study/diagram'

function ArchitectureDiagram() {
  return (
    <Diagram
      title="Unified Desk architecture"
      desc="Users work in the Unified Desk Angular app. Its Node.js backend consolidates ticket workflows from five platforms through the CitiBot API."
      viewBox="0 0 900 190" minWidth={700}
      caption="Simplified. Internal hostnames and platform names are omitted.">
      {/* stacked cards suggest several platforms behind one box */}
      <rect x={728} y={52} width={150} height={64} rx={12} strokeWidth={1.5}
        className="fill-white dark:fill-dark-surface stroke-gray-300 dark:stroke-dark-border2" />
      <rect x={722} y={58} width={150} height={64} rx={12} strokeWidth={1.5}
        className="fill-white dark:fill-dark-surface stroke-gray-300 dark:stroke-dark-border2" />
      <Box x={20}  y={64} w={160} title="Users" sub="one place to work" />
      <Box x={230} y={64} w={170} title="Unified Desk" sub="Angular frontend" accent />
      <Box x={450} y={64} w={170} title="UD backend" sub="Node.js API" />
      <Box x={716} y={64} w={150} title="5 platforms" sub="ticket workflows" />
      <Arrow d="M180 96 L226 96" />
      <Arrow d="M400 96 L446 96" label="REST" lx={423} ly={86} />
      <Arrow d="M620 96 L712 96" label="CitiBot API" lx={666} ly={86} />
    </Diagram>
  )
}

function OutageBannerDiagram() {
  return (
    <Diagram
      title="Outage banner flow"
      desc="A team files an outage request through a GitHub issue form. Designated approvers approve it. The Unified Desk backend polls GitHub for approved, open outage issues, and the frontend shows a banner for each one until the issue is closed."
      viewBox="0 0 960 240" minWidth={780}
      caption="GitHub holds the request, the approval and the history; Unified Desk only reads it.">
      <Box x={20}  y={40} w={170} title="Outage request" sub="GitHub issue form" />
      <Box x={240} y={40} w={170} title="Approval" sub="designated approvers" />
      <Box x={460} y={40} w={200} title="Approved + open issue" sub="GitHub" />
      <Box x={460} y={156} w={200} title="UD backend" sub="polls GitHub" accent />
      <Box x={740} y={156} w={200} title="Outage banner" sub="shown until the issue closes" />

      <Arrow d="M190 72 L236 72" />
      <Arrow d="M410 72 L456 72" />
      <Arrow d="M560 152 L560 108" label="poll" lx={572} ly={134} anchor="start" />
      <Arrow d="M660 188 L736 188" />
    </Diagram>
  )
}

export default function UnifiedDeskCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="// case study · Bosch internal"
      title="Unified Desk: one front door for five platforms"
      intro={
        <p>
          Ticket workflows were spread across five separate platforms. Unified Desk brings them together behind a
          single Angular app and a Node.js backend that talks to those platforms through the CitiBot API, so
          users work in one place instead of five.
        </p>
      }
      stack={['Angular', 'TypeScript', 'Node.js', 'REST APIs', 'CitiBot API', 'GitHub Issues', 'GitHub issue forms']}
      next={{ label: 'FossLens: getting new vulnerabilities to the people who own the code', href: '/case-studies/fosslens' }}>

      <ArchitectureDiagram />

      <Section title="Outage banners without an admin screen">
        <p>
          Outage banners tell Unified Desk users when one of the PMT tools is down. There's no admin screen for
          them: outages are requested through a GitHub issue form and approved by a small set of designated
          approvers. The backend polls GitHub for approved, open outage
          issues and the frontend shows a banner for each one.
        </p>
        <OutageBannerDiagram />
        <p>
          The request, the approval and the full history all live on the GitHub issue, and ending an outage is
          just closing it.
        </p>
      </Section>

      <Section title="Debugging a field that went missing">
        <p>
          Automated issue-report emails were arriving without a <Code>reportedFrom</Code> value, the field
          that records where in the app a problem was reported. It wasn't one bug. The dialog is opened from several
          places in the UI, and the causes were spread across them: enum values that didn't match between call
          sites, dialogs being opened with the wrong arguments, and stale build bundles that made fixes look like
          they hadn't worked.
        </p>
        <p>
          Tracing every entry point into the dialog, instead of patching the first one that failed, is what made it
          possible to fix all of them.
        </p>
      </Section>

      <Section title="Keeping the build healthy">
        <p>
          I also resolved Angular build failures in the frontend caused by <Code>prosemirror-model</Code> resolving
          to conflicting versions, which had to be reconciled with npm <Code>overrides</Code>.
        </p>
      </Section>
    </CaseStudyLayout>
  )
}
