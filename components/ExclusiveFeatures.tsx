import type { CourseData, FeatureExplanation } from '@/types/course'
import Image from 'next/image'

interface ExclusiveFeaturesProps {
  courseData: CourseData
}

export default function ExclusiveFeatures({ courseData }: ExclusiveFeaturesProps) {
  const featureExplanationsSection = courseData.sections.find(
    section => section.type === 'feature_explanations'
  )
  
  if (!featureExplanationsSection || !featureExplanationsSection.values.length) {
    return null
  }

  const features = featureExplanationsSection.values as FeatureExplanation[]

  const getGradientClass = (index: number) => {
    const gradients = [
      'bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-100',
      'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100',
      'bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100',
      'bg-gradient-to-br from-orange-50 to-red-50 border-orange-100'
    ]
    return gradients[index % gradients.length]
  }

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{featureExplanationsSection.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={feature.id} className={`rounded-lg p-6 border ${getGradientClass(index)}`}>
            <Image
              src={feature.file_url}
              alt={`${feature.title} feature`}
              width={64}
              height={64}
              className="w-16 h-16 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.checklist.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start space-x-2">
                  <svg className="w-4 h-4 tenms-success mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
