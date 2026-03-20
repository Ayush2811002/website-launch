import { Button } from '@/components/ui/button';

export default function MainPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-black to-slate-900">
      {/* Navigation */}
      <nav className="border-b border-slate-800 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-white">✦</span>
            </div>
            <span className="text-xl font-bold text-white">INNOVATUP</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition">Events</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition">Team</a>
            <a href="#" className="text-slate-300 hover:text-cyan-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6 text-balance leading-tight">
              Where Ideas <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Become Reality</span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              INNOVATUP — The Innovation & Startup Cell of Banarsidas Chandiwala Institute of Information Technology empowers students to become problem-solvers, builders, and future founders.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-6 rounded-full">
                Explore Events
              </Button>
              <Button variant="outline" className="border-slate-600 text-white hover:bg-slate-800 px-8 py-6 rounded-full">
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-slate-800 rounded-lg p-6 backdrop-blur">
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">50+</p>
              <p className="text-slate-400">Active Members</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-slate-800 rounded-lg p-6 backdrop-blur">
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">20+</p>
              <p className="text-slate-400">Successful Events</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 border border-slate-800 rounded-lg p-6 backdrop-blur col-span-2">
              <p className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">10+</p>
              <p className="text-slate-400">Projects Launched</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-black text-white mb-12 text-center">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Hackathons', desc: 'Code marathons where ideas transform into working solutions' },
            { title: 'Founder Talks', desc: 'Learn from successful entrepreneurs and industry leaders' },
            { title: 'Workshops', desc: 'Hands-on training in cutting-edge technologies and skills' },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700 rounded-lg p-8 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 border border-slate-700 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-black text-white mb-6">Ready to Join Us?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Be part of a community where innovation meets action. Connect with like-minded builders and turn your ideas into reality.
          </p>
          <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold px-8 py-6 rounded-full text-lg">
            Get Started
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 mt-20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 text-center md:text-left">
            <div>
              <p className="text-slate-400 mb-2">📧 innovations@bciit.ac.in</p>
              <p className="text-slate-400">© 2026 INNOVATUP Cell, BCIIT</p>
            </div>
            <div className="md:text-right">
              <p className="text-slate-400">Building the future, one idea at a time</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
