"use client"

import React from "react"

type ResumeData = {
  basics: {
    name: string
    label: string
    email: string
    phone: string
    summary: string
    url?: string
    image?: string
    location: {
      address?: string
      postalCode?: string
      city: string
      region: string
      countryCode: string
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
    website?: string
    startDate: string
    endDate: string
    summary: string
    highlights: string[]
  }[]
  education: {
    institution: string
    url?: string
    area: string
    studyType: string
    startDate: string
    endDate: string
    score?: string
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
    url?: string
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
    url?: string
  }[]
}

const StyleFourResume = ({ data }: { data: ResumeData }) => {
  const {
    basics,
    work,
    education,
    skills,
    projects,
    awards,
    certifications,
  } = data || ({} as ResumeData)

  return (
    <div className="min-h-screen bg-gradient-to-tr from-rose-100 via-white to-sky-100 text-gray-800 px-6 py-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center">
          {basics.image && (
            <img
              src={basics.image}
              alt="Profile"
              className="w-28 h-28 mx-auto rounded-full border-4 border-pink-300 shadow-lg object-cover"
            />
          )}
          <h1 className="text-4xl font-bold text-rose-700">{basics.name}</h1>
          <p className="text-lg text-gray-600">{basics.label}</p>
          <p>{basics.email} | {basics.phone}</p>
          <p>{basics.location.city}, {basics.location.region} - {basics.location.countryCode}</p>
          <p>{basics.url}</p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Summary</h2>
            <p className="mt-2 text-sm">{basics.summary}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Profiles</h2>
            <ul className="mt-2 text-sm space-y-1">
              {basics.profiles?.map((profile, i) => (
                <li key={i}>
                  <a href={profile.url} className="text-rose-700 underline" target="_blank">
                    {profile.network}: {profile.username}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Work Experience</h2>
            <ol className="border-l-2 border-pink-400 mt-4 space-y-6 pl-4">
              {work.map((job, i) => (
                <li key={i}>
                  <div className="ml-2">
                    <p className="font-bold">{job.position} at {job.company}</p>
                    <p className="text-xs text-gray-500">{job.startDate} - {job.endDate}</p>
                    <p className="text-sm">{job.summary}</p>
                    <ul className="list-disc ml-6 text-sm">
                      {job.highlights.map((h, j) => (
                        <li key={j}>{h}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Education</h2>
            <ol className="border-l-2 border-pink-400 mt-4 space-y-6 pl-4">
              {education.map((edu, i) => (
                <li key={i}>
                  <div className="ml-2">
                    <p className="font-semibold">{edu.studyType} in {edu.area}</p>
                    <p className="text-xs text-gray-500">{edu.institution} ({edu.startDate} - {edu.endDate})</p>
                    {edu.score && <p className="text-sm">Score: {edu.score}</p>}
                    <p className="text-sm">Courses: {edu.courses.join(", ")}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Projects</h2>
            {projects.map((proj, i) => (
              <div key={i} className="mt-2">
                <p className="font-semibold text-sm">{proj.title}</p>
                <p className="text-sm">{proj.description}</p>
                {proj.url && (
                  <a href={proj.url} className="text-sm text-blue-600 underline" target="_blank">
                    {proj.url}
                  </a>
                )}
                <p className="text-sm text-gray-700">Tech: {proj.technologies?.join(", ")}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Skills</h2>
            {skills.map((skill, i) => (
              <div key={i} className="mt-2">
                <p className="font-medium">{skill.name} – {skill.level}</p>
                <p className="text-sm">{skill.keywords?.join(", ")}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Awards</h2>
            {awards.map((award, i) => (
              <div key={i} className="mt-2">
                <p className="font-semibold text-sm">{award.title} - {award.awarder}</p>
                <p className="text-xs text-gray-500">{award.date}</p>
                <p className="text-sm">{award.summary}</p>
              </div>
            ))}
          </section>

          <section>
            <h2 className="text-2xl font-semibold border-b border-rose-300 pb-1">Certifications</h2>
            {certifications.map((cert, i) => (
              <div key={i} className="mt-2">
                <p className="font-semibold text-sm">{cert.title} - {cert.issuer}</p>
                <p className="text-xs text-gray-500">{cert.date}</p>
                {cert.url && (
                  <a href={cert.url} className="text-sm text-blue-600 underline" target="_blank">
                    {cert.url}
                  </a>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}

export default StyleFourResume

