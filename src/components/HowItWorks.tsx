export default function HowItWorks() {
    return (
      <section id="how-it-works" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: '1', title: 'Join as a member', text: 'Pay a fixed monthly contribution' },
              { step: '2', title: 'Get covered', text: 'All qualified medical expenses reimbursed' },
              { step: '3', title: 'Grow equity', text: 'Your unused funds build real member value' },
            ].map(({ step, title, text }) => (
              <div key={step} className="bg-gray-100 p-6 rounded-lg shadow">
                <div className="text-blue-600 font-bold text-xl mb-2">Step {step}</div>
                <div className="text-lg font-semibold mb-1">{title}</div>
                <p className="text-gray-700">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  