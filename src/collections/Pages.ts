import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero'
import { WhySectionBlock } from '../blocks/WhySection'
import { ServicesOverviewBlock } from '../blocks/ServicesOverview'
import { ServiceDetailBlock } from '../blocks/ServiceDetail'
import { CtaStripBlock } from '../blocks/CtaStrip'
import { PricingGridBlock } from '../blocks/PricingGrid'
import { TrainingCoursesBlock } from '../blocks/TrainingCourses'
import { HowItWorksBlock } from '../blocks/HowItWorks'
import { ContactSectionBlock } from '../blocks/ContactSection'
import { PageHeaderBlock } from '../blocks/PageHeader'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt'],
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Use "home" for the homepage. Other pages: services, pricing, training, contact',
      },
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        WhySectionBlock,
        ServicesOverviewBlock,
        ServiceDetailBlock,
        CtaStripBlock,
        PricingGridBlock,
        TrainingCoursesBlock,
        HowItWorksBlock,
        ContactSectionBlock,
        PageHeaderBlock,
      ],
    },
  ],
}
