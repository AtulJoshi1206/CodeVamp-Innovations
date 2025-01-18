import React from 'react';
import { Code2, Briefcase, GraduationCap, Award } from 'lucide-react';

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
            <div className="flex items-center space-x-2 text-purple-400 mb-8">
            <div className="w-12 h-12 relative overflow-hidden rounded-full">
          <img src="https://github.com/AtulJoshi1206/images/blob/main/WhatsApp%20Image%202024-01-12%20at%2012.55.50_c546061e.jpg?raw=true" alt="Vampire Icon" className="w-full h-full object-cover"/>
        </div>
              <span>Full Stack Developer & ML Enthusiast</span>
            </div>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-800 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <Code2 className="w-6 h-6 mr-2" />
                About Me
              </h2>
              <p className="text-gray-300">
                I am a passionate software developer with a keen interest in building innovative solutions 
                that make a difference. Currently pursuing my B.Tech in Computer Science, I have developed 
                a strong foundation in both theoretical concepts and practical applications of software development.
              </p>
              <p className="text-gray-300 mt-4">
                My journey in technology has been driven by curiosity and the desire to create impactful solutions. 
                From developing full-stack applications to implementing machine learning models, I enjoy taking on 
                challenging projects that push my boundaries and contribute to my growth as a developer.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-2" />
                  Education
                </h2>
<div className="space-y-4">
  <div>
    <h3 className="text-lg font-semibold text-white">B.Tech in Computer Science</h3>
    <p className="text-gray-400">Expected Graduation 2026</p>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-white">Intermediate - Holy Child Public School</h3>
    <p className="text-gray-400">Graduated in 2022 | 85%</p>
  </div>
  <div>
    <h3 className="text-lg font-semibold text-white">Matriculation - Holy Child Public School</h3>
    <p className="text-gray-400">Graduated in 2020 | 94.4%</p>
  </div>
</div>

              </div>

              <div className="bg-gray-800 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                  <Award className="w-6 h-6 mr-2" />
                  Certifications
                </h2>
                <ul className="space-y-2 text-gray-300">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>Google Cloud Platform Certified</li>
                  <li>MongoDB University Certification</li>
                  <li>TensorFlow Developer Certificate</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-4 flex items-center">
                <Briefcase className="w-6 h-6 mr-2" />
                Professional Summary
              </h2>
              <p className="text-gray-300">
  I am a dedicated full-stack developer with a proven track record of creating robust, scalable, and efficient software solutions. My professional journey has been shaped by hands-on experience with cutting-edge technologies, deep problem-solving capabilities, and a passion for driving innovation in the fields of software development, machine learning, and cloud computing. 
</p>
<p className="text-gray-300 mt-4">
  My expertise lies in developing end-to-end web applications using modern frameworks and tools like React, Node.js, Python, and Flask. I’ve architected and implemented projects such as a <strong>Search Rule Engine using Abstract Syntax Trees (AST)</strong>, where I designed a scalable backend using Flask, integrated MongoDB for efficient data storage, and developed a user-friendly Streamlit interface. This project exemplifies my ability to combine performance optimization with user-centric design, achieving over 95% accuracy in rule execution and earning positive feedback from beta users.
</p>
<p className="text-gray-300 mt-4">
  I have also developed a <strong>Full-Stack Online Coding Platform</strong>, enabling users to practice coding in Python, C++, Java, and C. This platform supports over 1,000 API requests per second and features robust error handling and monitoring. I designed a responsive front-end interface with a built-in code editor, problem-solving playground, and leaderboard, which achieved a 95% user satisfaction rate. My work on this project reflects my commitment to creating seamless, user-focused applications with high scalability and reliability.
</p>
<p className="text-gray-300 mt-4">
  In addition to my technical expertise, I am well-versed in deploying and managing cloud infrastructures. I have worked extensively with platforms like AWS, Google Cloud Platform (GCP), and Azure, enabling me to build and maintain secure, cost-efficient, and high-performing systems. My certifications, including AWS Certified Solutions Architect and Google Cloud Professional Data Engineer, demonstrate my deep understanding of cloud technologies and best practices.
</p>
<p className="text-gray-300 mt-4">
  My experience also includes leveraging advanced machine learning frameworks such as TensorFlow, PyTorch, and Scikit-learn to deliver intelligent solutions. I have implemented natural language processing (NLP) systems for projects like a meeting summarizer, using tools like FFmpeg and OpenAI Whisper to achieve high data accuracy and performance optimization. I take pride in creating solutions that are not only technically robust but also practical and scalable.
</p>
<p className="text-gray-300 mt-4">
  Beyond technical work, I am passionate about contributing to the tech community and fostering growth among peers. As a mentor in the WeCode Club, I have guided over 300 students, improved project completion rates by 30%, and coordinated workshops and hackathons that drove a 40% increase in participation. I actively participate in open-source programs such as GSSOC and Hacktoberfest, contributing to community-driven projects and enhancing collaborative development.
</p>
<p className="text-gray-300 mt-4">
  My professional toolkit includes a diverse range of skills and technologies, such as Python, JavaScript, Flask, MongoDB, TensorFlow, and RESTful APIs. I have a strong foundation in domains like AI, ML, NLP, backend development, and cloud architecture, coupled with a commitment to agile methodologies and best practices. These skills, combined with my problem-solving mindset and passion for innovation, drive my ability to create impactful solutions that align with modern technological demands.
</p>
<p className="text-gray-300 mt-4">
  As I continue to grow as a developer, my vision is to leverage technology to solve real-world challenges, contribute to open-source innovation, and mentor the next generation of developers. I aim to push the boundaries of what is possible in software development, creating solutions that leave a lasting impact.
</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};