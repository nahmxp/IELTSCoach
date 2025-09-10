import type { CourseData, AboutSection } from '@/types/course'

interface CourseDetailsProps {
  courseData: CourseData
}

export default function CourseDetails({ courseData }: CourseDetailsProps) {
  const aboutSection = courseData.sections.find(section => section.type === 'about')
  
  if (!aboutSection || !aboutSection.values.length) {
    return null
  }

  const aboutSections = aboutSection.values as AboutSection[]

  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{aboutSection.name}</h2>
      <div className="space-y-8">
        {aboutSections.map((section) => (
          <div key={section.id} className="prose prose-gray max-w-none">
            <div 
              className="text-xl font-bold text-gray-900 mb-4"
              dangerouslySetInnerHTML={{ __html: section.title }}
            />
            <div 
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: section.description }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
