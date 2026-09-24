import { CaseStudyLayout, Section, Code } from '../components/case-study/CaseStudyLayout'
import { Diagram, Box, Arrow } from '../components/case-study/diagram'

function ArchitectureDiagram() {
  return (
    <Diagram
      title="FossLens architecture"
      desc="GitHub repositories are onboarded into Dependency-Track and scanned. FossLens fetches projects and findings, stores a dated snapshot, diffs it against the previous one, and emails new findings to each project's owner."
      viewBox="0 0 860 290"
      caption="Simplified architecture. Internal hostnames and service names are omitted.">
      <Box x={20}  y={50}  w={170} title="GitHub" sub="1,500+ repositories" />
      <Box x={250} y={50}  w={180} title="Dependency-Track" sub="scans · findings" />
      <Box x={490} y={50}  w={180} title="FossLens" sub="Node.js service" accent />
      <Box x={490} y={200} w={180} title="Snapshot + diff" sub="dated JSON · new findings only" />
      <Box x={720} y={50}  w={120} title="Owners" sub="per-project SPOCs" />
      <Box x={250} y={200} w={180} title="Config" sub="fosslens.yml · SPOC mapping" />

      <Arrow d="M190 82 L246 82" label="onboard + scan" lx={218} ly={42} />
      <Arrow d="M430 82 L486 82" label="REST API" lx={460} ly={42} />
      <Arrow d="M565 114 L565 196" />
      <Arrow d="M595 196 L595 118" label="compare" lx={607} ly={160} anchor="start" />
      <Arrow d="M430 232 L486 120" />
      <Arrow d="M670 82 L716 82" label="email" lx={695} ly={42} />
    </Diagram>
  )
}

export default function FossLensCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="// case study · Bosch internal"
      title="FossLens: getting new vulnerabilities to the people who own the code"
      intro={
        <p>
          Dependency-Track can scan every project for known vulnerabilities, but a finding only matters once
          the team that owns the code hears about it. FossLens closes that loop: it gets repositories into
          scanning, then tells each owner what is new since the last run.
        </p>
      }
      stack={['Node.js', 'Dependency-Track', 'GitHub', 'Handlebars', 'SMTP', 'YAML']}
      next={{ label: 'Unified Desk: one front door for five platforms', href: '/case-studies/unified-desk' }}>

      <ArchitectureDiagram />

      <Section title="Onboarding at scale">
        <p>
          I built the onboarding automation that brought 1,500+ GitHub repositories into Dependency-Track and
          triggers their scans, so coverage doesn't depend on each team setting it up by hand.
        </p>
      </Section>

      <Section title="Only what's new">
        <p>
          The notifier fetches project and finding data from Dependency-Track and stores it as a dated JSON
          snapshot. Each run diffs the latest snapshot against the previous one, so owners get only the
          findings that appeared since the last run instead of the full backlog every time. Recipients come
          from a standalone project-to-owner mapping, and runtime settings live in a <Code>fosslens.yml</Code> file.
          Alerts are rendered from Handlebars templates and sent over SMTP.
        </p>
      </Section>

      <Section title="The hard part: the corporate network">
        <p>
          The service had to run behind a corporate proxy that uses NTLM authentication, which Node's HTTP
          stack doesn't speak natively. I routed traffic through a local authenticating proxy instead of
          connecting directly.
        </p>
        <p>
          The proxy also performs TLS inspection and re-signs traffic with an internal certificate authority,
          so every HTTPS call failed certificate validation. Rather than turning verification off, I exported
          the internal CA chain and supplied it through <Code>NODE_EXTRA_CA_CERTS</Code>, which keeps TLS
          verification on while trusting the corporate CA.
        </p>
      </Section>
    </CaseStudyLayout>
  )
}
