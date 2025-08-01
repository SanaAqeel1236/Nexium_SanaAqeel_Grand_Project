"use client";

import React from "react";
import Image from "next/image";

type ResumeData = {
  basics: {
    name: string;
    label: string;
    image: string;
    email: string;
    phone: string;
    url: string;
    summary: string;
    location: {
      address: string;
      postalCode: string;
      city: string;
      region: string;
      countryCode: string;
    };
    profiles: {
      network: string;
      username: string;
      url: string;
    }[];
  };
  work: {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
  }[];
  education: {
    institution: string;
    url: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    score: string;
    courses: string[];
  }[];
  skills: {
    name: string;
    level: string;
    keywords: string[];
  }[];
  projects: {
    title: string;
    description: string;
    url: string;
    technologies: string[];
  }[];
  awards: {
    title: string;
    date: string;
    awarder: string;
    summary: string;
  }[];
  certifications: {
    title: string;
    date: string;
    issuer: string;
    url: string;
  }[];
};

const StyleFiveResume = ({ data }: { data: ResumeData }) => {
  const {
    basics,
    work,
    education,
    skills,
    projects,
    awards,
    certifications,
  } = data || {};

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 to-blue-50 text-gray-900 font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-1/3 bg-white shadow-xl p-6 flex flex-col items-center text-center">
        {basics.image && (
          <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
            <Image
              src={basics.image}
              alt="Profile Image"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              unoptimized
            />
          </div>
        )}
        <h1 className="text-2xl font-bold">{basics.name}</h1>
        <p className="text-blue-700 mb-2">{basics.label}</p>
        <p className="text-sm">{basics.email}</p>
        <p className="text-sm">{basics.phone}</p>
        <p className="text-sm">{basics.url}</p>

        <div className="mt-4 text-sm">
          <h2 className="font-semibold">Location</h2>
          <p>{basics.location.address}</p>
          <p>{basics.location.city}, {basics.location.region}, {basics.location.countryCode}</p>
          <p>{basics.location.postalCode}</p>
        </div>

        <div className="mt-4">
          <h2 className="font-semibold text-sm">Social Profiles</h2>
          <ul className="text-sm mt-2 space-y-1">
            {basics.profiles?.map((profile, i) => (
              <li key={i}>
                <a href={profile.url} target="_blank" className="text-blue-600 underline">
                  {profile.network}: {profile.username}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-2/3 p-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Summary</h2>
          <p>{basics.summary}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Work Experience</h2>
          {work?.map((job, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{job.position} at {job.company}</p>
              <p className="text-sm text-gray-500">{job.startDate} – {job.endDate}</p>
              <p>{job.summary}</p>
              <ul className="list-disc list-inside text-sm mt-1">
                {job.highlights?.map((highlight, j) => <li key={j}>{highlight}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Education</h2>
          {education?.map((edu, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{edu.studyType} in {edu.area}</p>
              <p className="text-sm text-gray-500">
                {edu.institution} ({edu.startDate} – {edu.endDate})
              </p>
              <p className="text-sm">Score: {edu.score}</p>
              <ul className="text-sm list-disc list-inside mt-1">
                {edu.courses?.map((course, cIdx) => <li key={cIdx}>{course}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Skills</h2>
          {skills?.map((skill, i) => (
            <div key={i} className="mb-3">
              <p className="font-semibold">{skill.name} - {skill.level}</p>
              <p className="text-sm">{skill.keywords.join(", ")}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Projects</h2>
          {projects?.map((proj, i) => (
            <div key={i} className="mb-4">
              <a href={proj.url} target="_blank" className="text-blue-600 font-semibold underline">
                {proj.title}
              </a>
              <p>{proj.description}</p>
              <p className="text-sm">Technologies: {proj.technologies.join(", ")}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Awards</h2>
          {awards?.map((award, i) => (
            <div key={i} className="mb-4">
              <p className="font-semibold">{award.title} - {award.awarder}</p>
              <p className="text-sm text-gray-500">{award.date}</p>
              <p>{award.summary}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-xl font-semibold border-b pb-1 mb-2 text-blue-700">Certifications</h2>
          {certifications?.map((cert, i) => (
            <div key={i} className="mb-4">
              <a href={cert.url} target="_blank" className="text-blue-600 font-semibold underline">
                {cert.title}
              </a>
              <p className="text-sm text-gray-500">{cert.date} - {cert.issuer}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default StyleFiveResume;
