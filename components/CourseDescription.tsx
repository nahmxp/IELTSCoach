import type { CourseData } from '@/types/course'

interface CourseDescriptionProps {
  courseData: CourseData
}

export default function CourseDescription({ courseData }: CourseDescriptionProps) {
  return (
    <section className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Description</h2>
      <div 
        className="prose prose-gray max-w-none"
        dangerouslySetInnerHTML={{ __html: courseData.description }}
      />
    </section>
  )
}
