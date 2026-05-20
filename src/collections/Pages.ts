import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero.js'
import { WhySectionBlock } from '../blocks/WhySection.js'
import { ServicesOverviewBlock } from '../blocks/ServicesOverview.js'
import { ServiceDetailBlock } from '../blocks/ServiceDetail.js'
import { CtaStripBlock } from '../blocks/CtaStrip.js'
import { PricingGridBlock } from '../blocks/PricingGrid.js'
import { TrainingCoursesBlock } from '../blocks/TrainingCourses.js'
import { HowItWorksBlock } from '../blocks/HowItWorks.js'
import { ContactSectionBlock } from '../blocks/ContactSection.js'
import { PageHeaderBlock } from '../blocks/PageHeader.js'

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
