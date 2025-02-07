import SurveyForm from '@/app/components/SurveyForm'

export default function SurveyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white">
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent text-center">
            Business Growth Survey
          </h1>
          <p className="text-xl text-white/80 text-center mb-12">
            Help us understand your business better so we can provide personalized recommendations.
          </p>
          <SurveyForm />
        </div>
      </div>
    </main>
  )
} 
