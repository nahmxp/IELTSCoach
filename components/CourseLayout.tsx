import type { CourseData, Feature } from '@/types/course'
import Image from 'next/image'

interface CourseLayoutProps {
  courseData: CourseData
}

export default function CourseLayout({ courseData }: CourseLayoutProps) {
  const featuresSection = courseData.sections.find(section => section.type === 'features')
  
  if (!featuresSection || !featuresSection.values.length) {
    return null
  }

  const features = featuresSection.values as Feature[]

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{featuresSection.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => (
          <div key={feature.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
            <Image
              src={feature.icon}
              alt={`${feature.title} icon`}
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
            <div className="flex-1">
              <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
