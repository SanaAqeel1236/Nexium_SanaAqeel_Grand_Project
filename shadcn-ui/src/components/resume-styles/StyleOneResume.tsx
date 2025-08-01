"use client"

import React from "react"

type ResumeData = {
  basics: {
    name: string
    label: string
    image?: string
    email: string
    phone: string
    url: string
    summary: string
    location: {
      address: string
      postalCode: string
      city: string
      countryCode: string
      region: string
    }
    profiles: {
      network: string
      username: string
      url: string
    }[]
  }
  work: {
    company: string
    position: string
    website: string
    startDate: string
    endDate: string
    summary: string
    highlights: string[]
  }[]
  education: {
    institution: string
    url: string
    area: string
    studyType: string
    startDate: string
    endDate: string
    score: string
    courses: string[]
  }[]
  skills: {
    name: string
    level: string
    keywords: string[]
  }[]
  projects: {
    title: string
    description: string
    url: string
    technologies: string[]
  }[]
  awards: {
    title: string
    date: string
    awarder: string
    summary: string
  }[]
  certifications: {
    title: string
    date: string
    issuer: string
    url: string
  }[]
}

const StyleTwoResume = ({ data }: { data: ResumeData }) => {
  const { basics, work, education, skills, projects, awards, certifications } = data

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-indigo-50 p-8 text-slate-800">
      <div className="max-w-5xl mx-auto bg-white p-10 rounded-2xl shadow-2xl">

        {/* Header */}
        <div className="text-center border-b-2 border-indigo-200 pb-6 mb-8">
          {basics.image && (
            <img src={basics.image} alt="Profile" className="w-28 h-28 mx-auto rounded-full shadow-lg object-cover mb-3" />
          )}
          <h1 className="text-4xl font-extrabold text-indigo-800">{basics.name}</h1>
          <p className="text-xl text-indigo-600 font-medium">{basics.label}</p>
          <p className="text-sm mt-2">
            {basics.email} | {basics.phone} | {basics.url}
          </p>
          <p className="text-xs text-gray-600">
            {basics.location.address}, {basics.location.city}, {basics.location.region}, {basics.location.countryCode} - {basics.location.postalCode}
          </p>
          {basics.profiles?.length > 0 && (
            <div className="mt-3 flex flex-wrap justify-center gap-3">
              {basics.profiles.map((profile, i) => (
                <a
                  key={i}
                  href={profile.url}
                  target="_blank"
                  className="text-indigo-600 underline text-sm hover:text-indigo-800"
                >
                  {profile.network}: {profile.username}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Summary</h2>
          <p className="text-sm leading-relaxed">{basics.summary}</p>
        </section>

        {/* Work */}
        {work?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Work Experience</h2>
            {work.map((job, i) => (
              <div key={i} className="mb-5">
                <p className="font-medium text-lg">{job.position} @ {job.company}</p>
                <p className="text-xs text-gray-500">{job.startDate} – {job.endDate}</p>
                <p className="text-sm mt-1">{job.summary}</p>
                {job.highlights?.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-2 text-gray-700">
                    {job.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Education */}
        {education?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Education</h2>
            {education.map((edu, i) => (
              <div key={i} className="mb-5">
                <p className="font-medium text-lg">{edu.studyType} in {edu.area} — {edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.startDate} – {edu.endDate} | GPA: {edu.score}</p>
                <a href={edu.url} className="text-indigo-600 text-sm underline" target="_blank">Visit School</a>
                {edu.courses?.length > 0 && (
                  <ul className="list-disc list-inside text-sm mt-1">
                    {edu.courses.map((course, idx) => <li key={idx}>{course}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Skills */}
        {skills?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, i) => (
                <div key={i}>
                  <p className="font-medium">{skill.name} — {skill.level}</p>
                  <p className="text-sm text-gray-600">Keywords: {skill.keywords.join(", ")}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {projects?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} className="mb-4">
                <p className="font-medium text-lg">{proj.title}</p>
                <p className="text-sm">{proj.description}</p>
                <a href={proj.url} target="_blank" className="text-indigo-600 text-sm underline">Project Link</a>
                {proj.technologies?.length > 0 && (
                  <p className="text-sm text-gray-600 mt-1">Tech Used: {proj.technologies.join(", ")}</p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Awards */}
        {awards?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Awards</h2>
            {awards.map((award, i) => (
              <div key={i} className="mb-4">
                <p className="font-medium">{award.title} — {award.awarder}</p>
                <p className="text-xs text-gray-500">{award.date}</p>
                <p className="text-sm">{award.summary}</p>
              </div>
            ))}
          </section>
        )}

        {/* Certifications */}
        {certifications?.length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-indigo-700 border-b pb-2 mb-3">Certifications</h2>
            {certifications.map((cert, i) => (
              <div key={i} className="mb-4">
                <p className="font-medium">{cert.title} — {cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
                <a href={cert.url} target="_blank" className="text-indigo-600 text-sm underline">View Certificate</a>
              </div>
            ))}
          </section>
        )}

      </div>
    </div>
  )
}

export default StyleTwoResume



