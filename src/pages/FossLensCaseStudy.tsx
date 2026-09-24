import { CaseStudyLayout, Section, Code } from '../components/case-study/CaseStudyLayout'
import { Diagram, Box, Arrow, Lifeline, Message, Note } from '../components/case-study/diagram'

function OverviewDiagram() {
  return (
    <Diagram
      title="FossLens automation overview"
      desc="Onboarding: the automation reads application details from LeanIX and repositories and fosslens.yml from GitHub, then registers applications in FossLens, triggers scans and assigns owners, writing the product URL back to fosslens.yml. Notifications: a notifier fetches findings from Dependency-Track, diffs dated snapshots and emails new findings to each project's owner."
      viewBox="0 0 780 380" minWidth={680}
      caption="Simplified. Internal hostnames and service names are omitted.">
      <text x={20} y={22} className="fill-gray-500 dark:fill-gray-400 text-[12px] font-semibold">Onboarding</text>
      <Box x={20}  y={36}  w={170} title="LeanIX" sub="apps · managers · properties" />
      <Box x={20}  y={130} w={170} title="GitHub" sub="repos · fosslens.yml" />
      <Box x={280} y={83}  w={190} title="Onboarding automation" sub="Node.js" accent />
      <Box x={600} y={83}  w={160} title="FossLens" sub="scan dashboard" />
      <Arrow d="M190 68 L235 68 L235 108 L276 108" />
      <Arrow d="M190 162 L235 162 L235 122 L276 122" />
      <Arrow d="M330 147 L330 218 L105 218 L105 198" dashed />
      <text x={120} y={211} className="fill-gray-500 dark:fill-gray-400 text-[11px]">writes product_url back</text>
      <Arrow d="M470 115 L596 115" label="register · scan · owner" lx={533} ly={105} />

      <line x1={20} y1={250} x2={760} y2={250} strokeDasharray="4 5" className="stroke-gray-300 dark:stroke-dark-border2" />

      <text x={20} y={278} className="fill-gray-500 dark:fill-gray-400 text-[12px] font-semibold">Notifications</text>
      <Box x={20}  y={292} w={170} title="Dependency-Track" sub="projects · findings" />
      <Box x={280} y={292} w={190} title="Notifier" sub="dated snapshot + diff" accent />
      <Box x={600} y={292} w={160} title="Project owners" sub="new findings only" />
      <Arrow d="M190 324 L276 324" label="REST API" lx={233} ly={314} />
      <Arrow d="M470 324 L596 324" label="Handlebars + SMTP" lx={533} ly={314} />
    </Diagram>
  )
}

function OnboardingSequence() {
  const A = 100, L = 285, G = 470, F = 655, Y = 840
  return (
    <Diagram
      title="Onboarding sequence"
      desc="The automation fetches application details from LeanIX, repositories and fosslens.yml from GitHub, and checks whether the application is already in FossLens. If it is, only missing repositories are added. If not, it checks eligibility and registers the application to get a product URL. It then triggers a master scan, applies exclusions, writes the product URL to fosslens.yml, assigns the LeanIX application manager as owner, and logs the result."
      viewBox="0 0 930 610" minWidth={820}
      caption="Redrawn from the team's onboarding sequence diagram.">
      <Lifeline x={A} label="Automation" bottom={595} accent />
      <Lifeline x={L} label="LeanIX" bottom={595} />
      <Lifeline x={G} label="GitHub" bottom={595} />
      <Lifeline x={F} label="FossLens" bottom={595} />
      <Lifeline x={Y} label="fosslens.yml" bottom={595} />

      <Message from={A} to={L} y={100} label="app name · manager · properties" />
      <Message from={A} to={G} y={130} label="repositories" />
      <Message from={A} to={Y} y={160} label="read onboarding + exclusions" />
      <Message from={A} to={F} y={190} label="already onboarded? (product_url)" />

      {/* alt frame */}
      <rect x={20} y={206} width={890} height={196} rx={8} fill="none" strokeWidth={1}
        className="stroke-gray-300 dark:stroke-dark-border2" />
      <rect x={20} y={206} width={40} height={20} rx={4} className="fill-accent/15" />
      <text x={40} y={220} textAnchor="middle" className="fill-accent text-[11px] font-semibold">alt</text>
      <text x={70} y={221} className="fill-gray-500 dark:fill-gray-400 text-[11px]">[already onboarded]</text>
      <Message from={A} to={G} y={250} label="list repositories" />
      <Message from={A} to={F} y={280} label="add missing repositories (update)" />
      <line x1={20} y1={298} x2={910} y2={298} strokeDasharray="4 5" className="stroke-gray-300 dark:stroke-dark-border2" />
      <text x={70} y={314} className="fill-gray-500 dark:fill-gray-400 text-[11px]">[not onboarded]</text>
      <Note x={A + 10} y={336}>eligible? license compliance = Automated AND onboarding: required</Note>
      <Message from={A} to={F} y={364} label="register app (LeanIX name; split by delivery model)" />
      <Message from={F} to={A} y={390} label="product_url" dashed />

      <Message from={A} to={F} y={432} label="trigger master scan" />
      <Message from={A} to={F} y={462} label="apply exclusions from fosslens.yml" />
      <Message from={A} to={Y} y={492} label="write product_url" />
      <Message from={A} to={L} y={522} label="application manager" />
      <Message from={A} to={F} y={552} label="assign manager as responsible owner" />
      <Note x={A + 10} y={582}>log every application and repository onboarded or updated</Note>
    </Diagram>
  )
}

export default function FossLensCaseStudy() {
  return (
    <CaseStudyLayout
      eyebrow="// case study · Bosch internal"
      title="FossLens: onboarding 1,500+ repositories into vulnerability scanning"
      intro={
        <p>
          FossLens is the dashboard where applications get scanned for open-source license and vulnerability
          issues. Getting an application into it meant looking up the application, its repositories and its owner
          across several systems, registering it, and starting a scan. I automated that end to end, and built the
          notifier that tells each owner what is new in their findings.
        </p>
      }
      stack={['Node.js', 'LeanIX API', 'GitHub API', 'FossLens API', 'Dependency-Track', 'YAML', 'Handlebars', 'SMTP']}
      next={{ label: 'Unified Desk: one front door for five platforms', href: '/case-studies/unified-desk' }}>

      <OverviewDiagram />

      <Section title="Onboarding, driven by the source of truth">
        <p>
          Application data comes from LeanIX: the application name, its application manager and its custom
          properties. Each repository opts in through a <Code>fosslens.yml</Code> file, which also carries its scan
          exclusions. An application is onboarded only when both sides agree: its license-compliance property in
          LeanIX is set to <Code>Automated</Code> and its <Code>fosslens.yml</Code> says onboarding is required.
        </p>
        <OnboardingSequence />
      </Section>

      <Section title="What the automation handles">
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong className="text-gray-900 dark:text-white">Re-runs are safe.</strong> Every run starts by checking
            whether the application already exists in FossLens. If it does, only repositories that are missing get
            added, so nothing is registered twice.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Split registration.</strong> Applications are registered
            under their LeanIX name, and split into separate registrations when their repositories have different
            delivery models or code separation types.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Scans start automatically.</strong> A master scan is
            triggered after every onboarding or repository update.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Exclusions stay in sync.</strong> Changes to exclusions
            in <Code>fosslens.yml</Code> are picked up and applied in FossLens using the application's product URL.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">The repo remembers.</strong> Once registered, the
            FossLens product URL is written back into <Code>fosslens.yml</Code>, linking the repository to its
            FossLens entry.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Ownership is assigned.</strong> The LeanIX application
            manager becomes the responsible owner in FossLens, so findings have someone accountable.
          </li>
          <li>
            <strong className="text-gray-900 dark:text-white">Everything is logged.</strong> Every application and
            repository onboarded or updated is recorded.
          </li>
        </ul>
        <p>This brought 1,500+ GitHub repositories into scanning without teams onboarding them by hand.</p>
      </Section>

      <Section title="Only what's new">
        <p>
          The notifier fetches project and finding data from Dependency-Track and stores it as a dated JSON
          snapshot. Each run diffs the latest snapshot against the previous one, so owners get only the findings
          that appeared since the last run instead of the full backlog every time. Recipients come from a
          project-to-owner mapping, and alerts are rendered from Handlebars templates and sent over SMTP.
        </p>
      </Section>

      <Section title="The hard part: the corporate network">
        <p>
          The services had to run behind a corporate proxy that uses NTLM authentication, which Node's HTTP stack
          doesn't speak natively. I routed traffic through a local authenticating proxy instead of connecting
          directly.
        </p>
        <p>
          The proxy also performs TLS inspection and re-signs traffic with an internal certificate authority, so
          every HTTPS call failed certificate validation. Rather than turning verification off, I exported the
          internal CA chain and supplied it through <Code>NODE_EXTRA_CA_CERTS</Code>, which keeps TLS verification
          on while trusting the corporate CA.
        </p>
      </Section>
    </CaseStudyLayout>
  )
}
