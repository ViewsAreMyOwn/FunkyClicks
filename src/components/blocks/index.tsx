import HeroBlock from './HeroBlock'
import WhySectionBlock from './WhySectionBlock'
import ServicesOverviewBlock from './ServicesOverviewBlock'
import ServiceDetailBlock from './ServiceDetailBlock'
import CtaStripBlock from './CtaStripBlock'
import PricingGridBlock from './PricingGridBlock'
import TrainingCoursesBlock from './TrainingCoursesBlock'
import HowItWorksBlock from './HowItWorksBlock'
import ContactSectionBlock from './ContactSectionBlock'
import PageHeaderBlock from './PageHeaderBlock'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function BlockRenderer({ block, index }: { block: any; index: number }) {
  const { blockType } = block

  switch (blockType) {
    case 'hero':
      return (
        <HeroBlock
          badge={block.badge}
          title={block.title}
          titleHighlight={block.titleHighlight}
          tagline={block.tagline}
          description={block.description}
          primaryCtaLabel={block.primaryCtaLabel}
          secondaryCtaLabel={block.secondaryCtaLabel}
        />
      )
    case 'whySection':
      return (
        <WhySectionBlock
          label={block.label}
          title={block.title}
          description={block.description}
          showStats={block.showStats}
          cards={block.cards}
        />
      )
    case 'servicesOverview':
      return (
        <ServicesOverviewBlock
          label={block.label}
          title={block.title}
          description={block.description}
          cards={block.cards}
        />
      )
    case 'serviceDetail':
      return (
        <ServiceDetailBlock
          icon={block.icon}
          title={block.title}
          tagline={block.tagline}
          reverse={block.reverse}
          bullets={block.bullets}
          index={index}
        />
      )
    case 'ctaStrip':
      return (
        <CtaStripBlock
          title={block.title}
          titleHighlight={block.titleHighlight}
          description={block.description}
          ctaLabel={block.ctaLabel}
          ctaSlug={block.ctaSlug}
        />
      )
    case 'pricingGrid':
      return (
        <PricingGridBlock
          sectionTitle={block.sectionTitle}
          sectionSubtitle={block.sectionSubtitle}
          style={block.style}
          cards={block.cards}
        />
      )
    case 'trainingCourses':
      return (
        <TrainingCoursesBlock
          label={block.label}
          title={block.title}
          description={block.description}
          courses={block.courses}
        />
      )
    case 'howItWorks':
      return <HowItWorksBlock items={block.items} />
    case 'contactSection':
      return <ContactSectionBlock email={block.email} website={block.website} />
    case 'pageHeader':
      return (
        <PageHeaderBlock
          label={block.label}
          title={block.title}
          description={block.description}
        />
      )
    default:
      return null
  }
}
