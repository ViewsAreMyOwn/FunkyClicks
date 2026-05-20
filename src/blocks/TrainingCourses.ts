import type { Block } from 'payload'

export const TrainingCoursesBlock: Block = {
  slug: 'trainingCourses',
  imageURL: '/block-previews/training-courses.png',
  labels: { singular: 'Training Courses', plural: 'Training Courses' },
  fields: [
    { name: 'label', type: 'text' },
    { name: 'title', type: 'text' },
    { name: 'description', type: 'textarea' },
    {
      name: 'courses',
      type: 'array',
      fields: [
        { name: 'icon', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true },
      ],
    },
  ],
}
