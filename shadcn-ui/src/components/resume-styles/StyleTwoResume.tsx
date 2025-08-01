"use client"

import React from "react"

type ResumeData = {
  basics: {
    name: string
    label: string
    email: string
    phone: string
    image?: string
    url?: string
    summary: string
    location: {
      address?: string
      postalCode?: string
      city?: string
      region?: string
      countryCode?: string
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
    url: string
  }[]
}

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold text-indigo-700 border-b border-indigo-300 pb-1 mb-2">{children}</h2>
)

const StyleTwoResume = ({ data }: { data: ResumeData }) => {
  const {
    basics,
    work,
    education,
    skills,
    projects,
    awards,
    certifications,
  } = data

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Sidebar */}
        <div className="space-y-8">
          {basics.image && (
            <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-indigo-600 shadow-lg">
              <img src={basics.image} alt="Profile" className="w-full h-full object-cover" />
            </div>
          )}

          <div className="text-center">
            <h1 className="text-2xl font-bold text-indigo-800">{basics.name}</h1>
            <p className="text-sm text-gray-600">{basics.label}</p>
            <p className="mt-2 text-sm text-gray-500">{basics.email}</p>
            <p className="text-sm text-gray-500">{basics.phone}</p>
            {basics.url && (
              <p className="text-sm text-blue-600">
                <a href={basics.url} target="_blank" className="underline">{basics.url}</a>
              </p>
            )}
            {basics.location && (
              <p className="text-sm text-gray-500 mt-1">
                {basics.location.address}, {basics.location.city}, {basics.location.region} {basics.location.postalCode}, {basics.location.countryCode}
              </p>
            )}
          </div>

          {basics.profiles?.length > 0 && (
            <div>
              <SectionTitle>Social Profiles</SectionTitle>
              <ul className="text-sm space-y-1">
                {basics.profiles.map((profile, i) => (
                  <li key={i}>
                    <a href={profile.url} target="_blank" className="text-blue-700 hover:underline">
                      {profile.network}: {profile.username}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {skills?.length > 0 && (
            <div>
              <SectionTitle>Skills</SectionTitle>
              {skills.map((skill, i) => (
                <div key={i} className="mb-2">
                  <p className="font-medium text-sm">{skill.name} – {skill.level}</p>
                  <p className="text-xs text-gray-600">{skill.keywords.join(', ')}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="md:col-span-2 space-y-10">
          {basics.summary && (
            <div>
              <SectionTitle>Profile Summary</SectionTitle>
              <p className="text-sm text-gray-800">{basics.summary}</p>
            </div>
          )}

          {work?.length > 0 && (
            <div>
              <SectionTitle>Work Experience</SectionTitle>
              {work.map((job, i) => (
                <div key={i} className="mb-4">
                  <p className="font-medium text-sm">{job.position} @ {job.company}</p>
                  <p className="text-xs text-gray-500">{job.startDate} – {job.endDate}</p>
                  {job.website && <a href={job.website} className="text-blue-600 text-xs underline">{job.website}</a>}
                  <p className="text-sm mt-1">{job.summary}</p>
                  {job.highlights?.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700 mt-1">
                      {job.highlights.map((highlight, h) => (
                        <li key={h}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}

          {education?.length > 0 && (
            <div>
              <SectionTitle>Education</SectionTitle>
              {education.map((edu, i) => (
                <div key={i} className="mb-4">
                  <p className="font-medium text-sm">{edu.studyType} in {edu.area}</p>
                  <p className="text-xs text-gray-500">{edu.institution} ({edu.startDate} – {edu.endDate})</p>
                  {edu.score && <p className="text-xs text-gray-600">Score: {edu.score}</p>}
                  {edu.url && <a href={edu.url} className="text-xs text-blue-600 underline">{edu.url}</a>}
                  {edu.courses?.length > 0 && (
                    <p className="text-xs text-gray-700 mt-1">Courses: {edu.courses.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {projects?.length > 0 && (
            <div>
              <SectionTitle>Projects</SectionTitle>
              {projects.map((proj, i) => (
                <div key={i} className="mb-4">
                  <p className="font-medium text-sm">{proj.title}</p>
                  {proj.url && <a href={proj.url} className="text-xs text-blue-600 underline">{proj.url}</a>}
                  <p className="text-sm">{proj.description}</p>
                  {proj.technologies?.length > 0 && (
                    <p className="text-xs text-gray-700">Technologies: {proj.technologies.join(', ')}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {awards?.length > 0 && (
            <div>
              <SectionTitle>Awards</SectionTitle>
              {awards.map((award, i) => (
                <div key={i} className="mb-3">
                  <p className="font-medium text-sm">{award.title}</p>
                  <p className="text-xs text-gray-500">{award.awarder} – {award.date}</p>
                  <p className="text-sm">{award.summary}</p>
                </div>
              ))}
            </div>
          )}

          {certifications?.length > 0 && (
            <div>
              <SectionTitle>Certifications</SectionTitle>
              {certifications.map((cert, i) => (
                <div key={i} className="mb-3">
                  <p className="font-medium text-sm">{cert.title}</p>
                  <p className="text-xs text-gray-500">{cert.issuer} – {cert.date}</p>
                  <a href={cert.url} className="text-xs text-blue-600 underline">{cert.url}</a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StyleTwoResume



