import { Metadata } from 'next'
import LocalisationPage from './LocalisationPage'

export const metadata: Metadata = {
  title: 'Localization | Pixsell',
  description: 'Expert game localization services for the Chinese market - cultural adaptation, compliance, and quality assurance'
}

export default function Page() {
  return <LocalisationPage />
} 