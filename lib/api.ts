import type { CourseData } from '@/types/course'

export async function getCourseData(language: 'en' | 'bn' = 'en'): Promise<CourseData> {
  const url = `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${language}`
  
  const response = await fetch(url, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web',
      'Content-Type': 'application/json',
    },
    cache: 'no-store', // Ensure fresh data for SSR
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch course data: ${response.status} ${response.statusText}`)
  }

  const data = await response.json()
  
  if (!data.data) {
    throw new Error('Invalid response format: missing data field')
  }

  return data.data
}
