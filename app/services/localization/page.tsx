import { Metadata } from 'next'
import LocalisationPage from './LocalisationPage'

export const metadata: Metadata = {
  title: 'Localisation | Pixsell',
  description: 'Expert game localisation services for the Chinese market - cultural adaptation, compliance, and quality assurance'
}

export default function Page() {
  return <LocalisationPage />
} 