"use client"

import React from "react"

export type ResumeData = {
  basics: {
    name: string
    label: string
    email: string
    phone: string
    image?: string
    summary: string
    url?: string
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

const StyleThreeResume = ({ data }: { data: ResumeData }) => {
  const {
    basics,
    work = [],
    education = [],
    skills = [],
    projects = [],
    awards = [],
    certifications = []
  } = data || {}

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900 py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl overflow-hidden">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-6 p-6 bg-gray-100">
          {basics.image && (
            <img
              src={basics.image}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500"
            />
          )}
          <div className="mt-4 md:mt-0 text-center md:text-left">
            <h1 className="text-3xl font-bold">{basics.name}</h1>
            <p className="text-gray-600">{basics.label}</p>
            <p className="text-sm text-gray-700">{basics.email} | {basics.phone}</p>
            <p className="text-sm text-gray-700">{basics.location.city}, {basics.location.region}, {basics.location.countryCode}</p>
            {basics.url && <a href={basics.url} className="text-blue-600 text-sm">{basics.url}</a>}
          </div>
        </div>

        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Summary</h2>
            <p className="mt-2 text-sm text-gray-800">{basics.summary}</p>
          </section>

          {basics.profiles.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Social Profiles</h2>
              <ul className="text-sm mt-2">
                {basics.profiles.map((profile, i) => (
                  <li key={i}>
                    <a href={profile.url} className="text-blue-600 underline" target="_blank">
                      {profile.network}: {profile.username}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {work.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Work Experience</h2>
              {work.map((job, i) => (
                <div key={i} className="mt-3">
                  <p className="font-medium text-sm">{job.position} @ {job.company}</p>
                  <p className="text-xs text-gray-500">{job.startDate} – {job.endDate} | {job.website}</p>
                  <p className="text-sm mt-1">{job.summary}</p>
                  {job.highlights && (
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {job.highlights.map((highlight, hi) => <li key={hi}>{highlight}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {education.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Education</h2>
              {education.map((edu, i) => (
                <div key={i} className="mt-3">
                  <p className="font-medium text-sm">{edu.studyType} in {edu.area} @ {edu.institution}</p>
                  <p className="text-xs text-gray-500">{edu.startDate} – {edu.endDate}</p>
                  {edu.score && <p className="text-sm">Score: {edu.score}</p>}
                  {edu.courses.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {edu.courses.map((course, ci) => <li key={ci}>{course}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {skills.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Skills</h2>
              {skills.map((skill, i) => (
                <div key={i} className="mt-2">
                  <p className="font-medium text-sm">{skill.name} – {skill.level}</p>
                  {skill.keywords.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {skill.keywords.map((kw, ki) => <li key={ki}>{kw}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {projects.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Projects</h2>
              {projects.map((proj, i) => (
                <div key={i} className="mt-2">
                  <p className="font-medium text-sm">{proj.title}</p>
                  <p className="text-sm text-gray-800">{proj.description}</p>
                  {proj.url && <a href={proj.url} className="text-blue-600 text-sm underline">{proj.url}</a>}
                  {proj.technologies.length > 0 && (
                    <ul className="list-disc list-inside text-sm text-gray-700">
                      {proj.technologies.map((tech, ti) => <li key={ti}>{tech}</li>)}
                    </ul>
                  )}
                </div>
              ))}
            </section>
          )}

          {awards.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Awards</h2>
              {awards.map((award, i) => (
                <div key={i} className="mt-2">
                  <p className="font-medium text-sm">{award.title} – {award.awarder}</p>
                  <p className="text-xs text-gray-500">{award.date}</p>
                  <p className="text-sm">{award.summary}</p>
                </div>
              ))}
            </section>
          )}

          {certifications.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold text-blue-700 border-b pb-1">Certifications</h2>
              {certifications.map((cert, i) => (
                <div key={i} className="mt-2">
                  <p className="font-medium text-sm">{cert.title} – {cert.issuer}</p>
                  <p className="text-xs text-gray-500">{cert.date}</p>
                  <a href={cert.url} className="text-blue-600 text-sm underline">{cert.url}</a>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  )
}

export default StyleThreeResume

