import type { CollectionConfig } from 'payload'
import { HeroBlock } from '../blocks/Hero.ts'
import { WhySectionBlock } from '../blocks/WhySection.ts'
import { ServicesOverviewBlock } from '../blocks/ServicesOverview.ts'
import { ServiceDetailBlock } from '../blocks/ServiceDetail.ts'
import { CtaStripBlock } from '../blocks/CtaStrip.ts'
import { PricingGridBlock } from '../blocks/PricingGrid.ts'
import { TrainingCoursesBlock } from '../blocks/TrainingCourses.ts'
import { HowItWorksBlock } from '../blocks/HowItWorks.ts'
import { ContactSectionBlock } from '../blocks/ContactSection.ts'
import { PageHeaderBlock } from '../blocks/PageHeader.ts'

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
