import React from 'react';
import { Code2, Briefcase, GraduationCap, Award, GitBranch, Zap } from 'lucide-react';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-8">
              <img 
                src="https://github.com/AtulJoshi1206/images/blob/main/atul.jpg?raw=true" 
                alt="Atul Joshi"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4">Atul Joshi</h1>
            <p className="text-lg text-purple-400 font-semibold">Full-Stack Engineer | AI/ML Systems Builder</p>
          </div>

          <div className="space-y-8">
            {/* About Section */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2" />
                Profile
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                Full-stack engineer with expertise in NLP systems, distributed architectures, and scalable web platforms. 
                Building production systems at the intersection of AI/ML and systems engineering. Research experience in language models and 
                performance optimization. Active mentor to 500+ developers. AI-first builder focused on quantified impact.
              </p>
            </div>

            {/* Education & Research */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </h2>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-white">B.Tech Computer Science</h3>
                  <p className="text-gray-400 text-sm">Graphic Era Hill University (AI/ML focus)</p>
                  <p className="text-gray-400 text-sm">Expected: 2026 | CGPA: 8.4</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Core Stack
                </h2>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><strong>Languages:</strong> Python, JavaScript, C++</p>
                  <p><strong>Backend:</strong> Flask, Node.js, REST APIs</p>
                  <p><strong>AI/ML:</strong> TensorFlow, PyTorch, IndicBERT</p>
                  <p><strong>Data:</strong> MongoDB, PostgreSQL, Redis</p>
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Technical Impact
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-white font-semibold mb-2">CodeVamp Online Platform</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 1,000+ API requests/second</li>
                    <li>• 99.9% uptime SLA</li>
                    <li>• 95% user satisfaction</li>
                    <li>• 10+ language support</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Search Rule Engine (AST)</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 95% search accuracy</li>
                    <li>• 70% faster rule creation</li>
                    <li>• 1M+ queries processed</li>
                    <li>• Production deployed</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Kumoni Language Research</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• IndicBERT-based NLP</li>
                    <li>• BLEU score optimization</li>
                    <li>• Language translation research</li>
                    <li>• Published findings</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Infosys Meeting Summarizer</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• 99.9% transcription accuracy</li>
                    <li>• OpenAI Whisper + APIs</li>
                    <li>• 1000+ hours processed</li>
                    <li>• 40% time savings</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Leadership & Mentorship */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <GitBranch className="w-6 h-6 mr-2" />
                Leadership & Open Source
              </h2>
              <div className="space-y-3 text-gray-300">
                <p><strong>WeCode Mentor (Aug 2024–Present):</strong> 500+ mentees, 40% project success improvement, organized 10+ hackathons</p>
                <p><strong>Infosys Springboard Intern:</strong> Built production NLP systems with real-world impact, Agile team environment</p>
                <p><strong>Open Source:</strong> GSSOC contributor, Hacktoberfest participant, maintained personal projects</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <Award className="w-6 h-6 mr-2" />
                Credentials
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-300">
                <div>AWS Certified Cloud Practitioner</div>
                <div>Google Cloud Platform Certified</div>
                <div>MongoDB University Certification</div>
                <div>TensorFlow Developer Certificate</div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-8 border border-purple-500/20">
              <p className="text-gray-300 italic text-center">
                "Building production systems that scale. Engineering research with quantified impact. Mentoring the next wave of builders."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
