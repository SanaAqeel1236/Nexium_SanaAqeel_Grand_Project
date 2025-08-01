"use client"

import { useRouter } from "next/navigation";
import { useResume } from "@/context/ResumeContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Label } from '@/components/ui/label'

// Background pattern/gradient styles
const backgroundStyles = {
  backgroundImage: `radial-gradient(circle at 1px 1px, #d4d4d8 1px, transparent 0)`,
  backgroundSize: "20px 20px",
};

export default function ManualResumeFormPage() {
  const router = useRouter();
  const { setResumeData } = useResume();

const generateYearOptions = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 1970;
  const endYear = currentYear + 10;
  const years = [];

  for (let year = endYear; year >= startYear; year--) {
    years.push(year.toString());
  }

  return years;
};


  const [formData, setFormData] = useState({
    basics: {
      name: "",
      label: "",
      image: "",
      email: "",
      phone: "",
      url: "",
      summary: "",
      location: {
        address: "",
        postalCode: "",
        city: "",
        countryCode: "",
        region: ""
      },
      profiles: [
        {
          network: "",
          username: "",
          url: ""
        }
      ]
    },
    work: [
      {
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [""]
      }
    ],
    education: [
      {
        institution: "",
        url: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
        score: "",
        courses: [""]
      }
    ],
    skills: [
      {
        name: "",
        level: "",
        keywords: [""]
      }
    ],
    projects: [
      {
        title: "",
        description: "",
        url: "",
        technologies: [""]
      }
    ],
    awards: [
      {
        title: "",
        date: "",
        awarder: "",
        summary: ""
      }
    ],
    certifications: [
      {
        title: "",
        date: "",
        issuer: "",
        url: ""
      }
    ]
  });



// ✅ Basics Handlers
const handleBasicsChange = (
  field: keyof typeof formData.basics,
  value: string
) => {
  setFormData(prev => ({
    ...prev,
    basics: {
      ...prev.basics,
      [field]: value
    }
  }));
};

const handleLocationChange = (
  field: keyof typeof formData.basics.location,
  value: string
) => {
  setFormData(prev => ({
    ...prev,
    basics: {
      ...prev.basics,
      location: {
        ...prev.basics.location,
        [field]: value
      }
    }
  }));
};

const handleProfileChange = (
  index: number,
  field: "network" | "username" | "url",
  value: string
) => {
  const updatedProfiles = [...formData.basics.profiles];
  updatedProfiles[index] = {
    ...updatedProfiles[index],
    [field]: value
  };
  setFormData(prev => ({
    ...prev,
    basics: {
      ...prev.basics,
      profiles: updatedProfiles
    }
  }));
};

// ✅ Work Experience Handlers
const handleWorkChange = (
  index: number,
  field: keyof typeof formData.work[0],
  value: string
) => {
  const updatedWork = [...formData.work];
  updatedWork[index] = {
    ...updatedWork[index],
    [field]: value
  };
  setFormData(prev => ({
    ...prev,
    work: updatedWork
  }));
};

const handleWorkHighlightChange = (
  index: number,
  highlightIndex: number,
  value: string
) => {
  const updatedWork = [...formData.work];
  updatedWork[index].highlights[highlightIndex] = value;

  setFormData(prev => ({
    ...prev,
    work: updatedWork
  }));
};

const addWorkExperience = () => {
  setFormData(prev => ({
    ...prev,
    work: [
      ...prev.work,
      {
        company: "",
        position: "",
        website: "",
        startDate: "",
        endDate: "",
        summary: "",
        highlights: [""]
      }
    ]
  }));
};

const removeWorkExperience = (index: number) => {
  const updatedWork = [...formData.work];
  updatedWork.splice(index, 1);
  setFormData(prev => ({
    ...prev,
    work: updatedWork
  }));
};

// ✅ Education Handlers
const handleEducationChange = (
  index: number,
  field: keyof typeof formData.education[0],
  value: string
) => {
  const updatedEducation = [...formData.education];
  updatedEducation[index] = {
    ...updatedEducation[index],
    [field]: value
  };
  setFormData(prev => ({
    ...prev,
    education: updatedEducation
  }));
};

const handleCourseChange = (
  eduIndex: number,
  courseIndex: number,
  value: string
) => {
  const updatedEducation = [...formData.education];
  updatedEducation[eduIndex].courses[courseIndex] = value;

  setFormData(prev => ({
    ...prev,
    education: updatedEducation
  }));
};

const addEducationEntry = () => {
  setFormData(prev => ({
    ...prev,
    education: [
      ...prev.education,
      {
        institution: "",
        url: "",
        area: "",
        studyType: "",
        startDate: "",
        endDate: "",
        score: "",
        courses: [""]
      }
    ]
  }));
};

const addCourse = (eduIndex: number) => {
  const updatedEducation = [...formData.education];
  updatedEducation[eduIndex].courses.push("");
  setFormData(prev => ({
    ...prev,
    education: updatedEducation
  }));
};

const removeCourse = (eduIndex: number, courseIndex: number) => {
  const updatedCourses = [...formData.education];
  updatedCourses[eduIndex].courses.splice(courseIndex, 1);
  setFormData({ ...formData, education: updatedCourses });
};

const removeEducationEntry = (index: number) => {
  const updated = [...formData.education];
  updated.splice(index, 1);
  setFormData({ ...formData, education: updated });
};


// ✅ Skills Handlers
const handleSkillChange = (
  index: number,
  field: keyof typeof formData.skills[0],
  value: string
) => {
  const updatedSkills = [...formData.skills];
  updatedSkills[index] = {
    ...updatedSkills[index],
    [field]: value
  };
  setFormData(prev => ({
    ...prev,
    skills: updatedSkills
  }));
};

const handleKeywordChange = (
  skillIndex: number,
  keywordIndex: number,
  value: string
) => {
  const updatedSkills = [...formData.skills];
  updatedSkills[skillIndex].keywords[keywordIndex] = value;

  setFormData(prev => ({
    ...prev,
    skills: updatedSkills
  }));
};

const addSkillEntry = () => {
  setFormData(prev => ({
    ...prev,
    skills: [
      ...prev.skills,
      {
        name: "",
        level: "",
        keywords: [""]
      }
    ]
  }));
};

const addKeyword = (skillIndex: number) => {
  const updatedSkills = [...formData.skills];
  updatedSkills[skillIndex].keywords.push("");
  setFormData(prev => ({
    ...prev,
    skills: updatedSkills
  }));
};

const removeKeyword = (skillIndex: number, keywordIndex: number) => {
  const updatedSkills = [...formData.skills];
  updatedSkills[skillIndex].keywords.splice(keywordIndex, 1);
  setFormData({ ...formData, skills: updatedSkills });
};

const removeSkillEntry = (index: number) => {
  const updated = [...formData.skills];
  updated.splice(index, 1);
  setFormData({ ...formData, skills: updated });
};


// ✅ Projects
const handleProjectChange = (
  index: number,
  field: keyof typeof formData.projects[0],
  value: string
) => {
  const updatedProjects = [...formData.projects];
  updatedProjects[index] = {
    ...updatedProjects[index],
    [field]: value
  };
  setFormData(prev => ({
    ...prev,
    projects: updatedProjects
  }));
};

const handleTechChange = (
  projIndex: number,
  techIndex: number,
  value: string
) => {
  const updatedProjects = [...formData.projects];
  updatedProjects[projIndex].technologies[techIndex] = value;

  setFormData(prev => ({
    ...prev,
    projects: updatedProjects
  }));
};

const addProject = () => {
  setFormData(prev => ({
    ...prev,
    projects: [
      ...prev.projects,
      {
        title: "",
        description: "",
        url: "",
        technologies: [""]
      }
    ]
  }));
};

const addTechnology = (projIndex: number) => {
  const updatedProjects = [...formData.projects];
  updatedProjects[projIndex].technologies.push("");
  setFormData(prev => ({
    ...prev,
    projects: updatedProjects
  }));
};

const removeTechnology = (projectIndex: number, techIndex: number) => {
  const updated = [...formData.projects];
  updated[projectIndex].technologies.splice(techIndex, 1);
  setFormData({ ...formData, projects: updated });
};

const removeProject = (index: number) => {
  const updated = [...formData.projects];
  updated.splice(index, 1);
  setFormData({ ...formData, projects: updated });
};


// ✅ Handle award field change
const handleAwardChange = (
  index: number,
  field: keyof (typeof formData)["awards"][0],
  value: string
) => {
  const updatedAwards = [...formData.awards];
  updatedAwards[index] = {
    ...updatedAwards[index],
    [field]: value,
  };

  setFormData(prev => ({
    ...prev,
    awards: updatedAwards,
  }));
};

// ✅ Add a new award entry
const addAward = () => {
  setFormData(prev => ({
    ...prev,
    awards: [
      ...prev.awards,
      {
        title: "",
        date: "",
        awarder: "",
        summary: "",
      },
    ],
  }));
};

// ✅ Remove an award entry by index
const removeAward = (index: number) => {
  setFormData(prev => ({
    ...prev,
    awards: prev.awards.filter((_, i) => i !== index),
  }));
};


// ✅ Certifications

// Handle input changes for certifications
const handleCertChange = (
  index: number,
  field: keyof typeof formData.certifications[0],
  value: string
) => {
  const updatedCerts = [...formData.certifications];
  updatedCerts[index] = {
    ...updatedCerts[index],
    [field]: value,
  };
  setFormData(prev => ({
    ...prev,
    certifications: updatedCerts,
  }));
};

// Add a new certification entry
const addCert = () => {
  setFormData(prev => ({
    ...prev,
    certifications: [
      ...prev.certifications,
      {
        title: "",
        date: "",
        issuer: "",
        url: "",
      },
    ],
  }));
};

// Remove a specific certification by index
const removeCert = (index: number) => {
  const updatedCerts = [...formData.certifications];
  updatedCerts.splice(index, 1);
  setFormData(prev => ({
    ...prev,
    certifications: updatedCerts,
  }));
};


// ✅ Submit Handler
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  console.log("Submitting resume:", formData);

  try {
    const response = await fetch('http://localhost:3002/resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Server error response:", errorText);
      throw new Error('Failed to submit resume');
    }

    alert('✅ Resume submitted successfully!');
    setResumeData(formData); // save data to context
    router.push('/create/select-style');
  } catch (error) {
    console.error("❌ Error during submission:", error);
    alert('❌ Error submitting resume: ' + (error as Error).message);
  }
};





  return (

    <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 text-gray-800">
          <Navbar />

          <br></br>
          <br></br>
          <br></br>


    <form
    onSubmit={handleSubmit}
    className="max-w-3xl mx-auto p-6"
  >
  <div className="max-w-3xl w-full bg-white p-6 rounded-xl shadow-md">
    <h1 className="text-3xl font-bold mb-6 text-center text-indigo-700">Manual Resume Form</h1>


{/* Basic section  */}

      <h2 className="text-2xl font-bold text-gray-800 mb-6">🧾 Basic Information</h2>
<motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/90 backdrop-blur-md shadow-xl rounded-2xl p-6 sm:p-10"
    >
 

      {/* === Name, Label, Image === */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" required placeholder="Your Name" value={formData.basics.name} onChange={e => handleBasicsChange("name", e.target.value)} />
        </div>

        <div>
          <Label htmlFor="label">Professional Title *</Label>
          <Input id="label" required placeholder="e.g. Software Engineer" value={formData.basics.label} onChange={e => handleBasicsChange("label", e.target.value)} />
        </div>

        <div className="col-span-2">
  <Label htmlFor="image">Upload Profile Image</Label>
  <input
    id="image"
    type="file"
    accept="image/*"
    onChange={(e) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result as string;
          handleBasicsChange("image", base64String); // Save base64 in formData
        };
        reader.readAsDataURL(file);
      }
    }}
    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
  />
</div>


      </div>

      {/* === Contact Details === */}
      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input id="email" required type="email" placeholder="your@email.com" value={formData.basics.email} onChange={e => handleBasicsChange("email", e.target.value)} />
        </div>

        <div>
          <Label htmlFor="phone">Phone *</Label>
          <Input id="phone" required placeholder="+92-xxx-xxxxxxx" value={formData.basics.phone} onChange={e => handleBasicsChange("phone", e.target.value)} />
        </div>

        <div className="col-span-2">
          <Label htmlFor="url">Website</Label>
          <Input id="url" type="url" placeholder="https://yourportfolio.com" value={formData.basics.url} onChange={e => handleBasicsChange("url", e.target.value)} />
        </div>
      </div>

      {/* === Summary === */}
      <div className="mb-6">
        <Label htmlFor="summary">Summary About You</Label>
        <Textarea id="summary" rows={4} placeholder="A short summary about you..." value={formData.basics.summary} onChange={e => handleBasicsChange("summary", e.target.value)} />
      </div>

      {/* === Location === */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">📍 Location</h3>
        <div className="grid sm:grid-cols-2 gap-4">
          <Input placeholder="Address" value={formData.basics.location.address} onChange={e => handleLocationChange("address", e.target.value)} />
          <Input placeholder="Postal Code" value={formData.basics.location.postalCode} onChange={e => handleLocationChange("postalCode", e.target.value)} />
          <Input placeholder="City" value={formData.basics.location.city} onChange={e => handleLocationChange("city", e.target.value)} />
          <Input placeholder="Country Code" value={formData.basics.location.countryCode} onChange={e => handleLocationChange("countryCode", e.target.value)} />
          <Input placeholder="Region" value={formData.basics.location.region} onChange={e => handleLocationChange("region", e.target.value)} />
        </div>
      </div>

      {/* === Social Profiles === */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3 text-gray-700">🔗 Social Profiles</h3>
        {formData.basics.profiles.map((profile: any, index: number) => (
          <div key={index} className="grid sm:grid-cols-3 gap-3 mb-3">
            <Input placeholder="Network" value={profile.network} onChange={e => handleProfileChange(index, "network", e.target.value)} />
            <Input placeholder="Username" value={profile.username} onChange={e => handleProfileChange(index, "username", e.target.value)} />
            <Input placeholder="URL" value={profile.url} onChange={e => handleProfileChange(index, "url", e.target.value)} />
          </div>
        ))}
      </div>
    </motion.div>


{/* ✅ WORK EXPERIENCE SECTION */}
<motion.div
  className="space-y-6 mt-12"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-2">
    💼 Work Experience
  </h2>

  {formData.work.map((work, index) => (
    <div
      key={index}
      className="border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300 space-y-4"
    >
      <Input
        placeholder="Company"
        value={work.company}
        onChange={e => handleWorkChange(index, "company", e.target.value)}
        required
      />
      <Input
        placeholder="Position"
        value={work.position}
        onChange={e => handleWorkChange(index, "position", e.target.value)}
        required
      />
      <Input
        placeholder="Website URL"
        value={work.website}
        onChange={e => handleWorkChange(index, "website", e.target.value)}
        type="url"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Start Date"
          value={work.startDate}
          onChange={e => handleWorkChange(index, "startDate", e.target.value)}
          required
          type="date"
        />
        <Input
          placeholder="End Date"
          value={work.endDate}
          onChange={e => handleWorkChange(index, "endDate", e.target.value)}
          type="date"
        />
      </div>

      <Textarea
        placeholder="Work Summary"
        value={work.summary}
        onChange={e => handleWorkChange(index, "summary", e.target.value)}
        required
        className="min-h-[100px]"
      />

      <div>
        <h4 className="font-medium text-lg text-muted-foreground">📌 Highlights</h4>
        <div className="space-y-2 mt-2">
          {work.highlights.map((highlight, hIndex) => (
            <Input
              key={hIndex}
              placeholder={`Highlight ${hIndex + 1}`}
              value={highlight}
              onChange={e =>
                handleWorkHighlightChange(index, hIndex, e.target.value)
              }
              required={hIndex === 0} // First highlight is required
            />
          ))}
        </div>
      </div>
    </div>
  ))}
</motion.div>

{/* ✅ Action Buttons */}
<div className="flex gap-4 mt-6">
  <Button
    type="button"
    onClick={addWorkExperience}
    className="bg-green-500 hover:bg-green-600 transition duration-300"
  >
    + Add Experience
  </Button>

  {formData.work.length > 1 && (
    <Button
      type="button"
      variant="destructive"
      onClick={() => removeWorkExperience(formData.work.length - 1)}
    >
      − Remove Last
    </Button>
  )}
</div>

{/* Education Saection  */}
<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-12 flex items-center gap-2">
  🎓 Education
</h2>

{formData.education.map((edu, index) => (
  <div
    key={index}
    className="border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300 space-y-4"
  >
    <Input
      placeholder="Institution"
      value={edu.institution}
      onChange={e => handleEducationChange(index, "institution", e.target.value)}
      required
    />
    <Input
      placeholder="Area of Study"
      value={edu.area}
      onChange={e => handleEducationChange(index, "area", e.target.value)}
      required
    />
    <Input
      placeholder="Study Type (e.g., Bachelor, Master)"
      value={edu.studyType}
      onChange={e => handleEducationChange(index, "studyType", e.target.value)}
      required
    />

    {/* ✅ Start/End Year Dropdowns */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        list={`start-year-options-${index}`}
        placeholder="Start Year"
        value={edu.startDate}
        onChange={e => handleEducationChange(index, "startDate", e.target.value)}
        required
        className="border rounded-md px-4 py-2 w-full"
      />
      <datalist id={`start-year-options-${index}`}>
        {generateYearOptions().map(year => (
          <option key={year} value={year} />
        ))}
      </datalist>

      <input
        list={`end-year-options-${index}`}
        placeholder="End Year"
        value={edu.endDate}
        onChange={e => handleEducationChange(index, "endDate", e.target.value)}
        className="border rounded-md px-4 py-2 w-full"
      />
      <datalist id={`end-year-options-${index}`}>
        {generateYearOptions().map(year => (
          <option key={year} value={year} />
        ))}
      </datalist>
    </div>

    {/* ✅ Courses Section */}
    <div>
      <h4 className="font-medium text-lg text-muted-foreground">📚 Courses</h4>
      <div className="space-y-2 mt-2">
        {edu.courses.map((course, cIndex) => (
          <div key={cIndex} className="flex items-center gap-2">
            <Input
              placeholder={`Course ${cIndex + 1}`}
              value={course}
              onChange={e =>
                handleCourseChange(index, cIndex, e.target.value)
              }
              required={cIndex === 0}
              className="flex-1"
            />
            {edu.courses.length > 1 && (
              <Button
                type="button"
                variant="destructive"
                size="sm"
                onClick={() => removeCourse(index, cIndex)}
              >
                ❌
              </Button>
            )}
          </div>
        ))}
        <Button
          type="button"
          size="sm"
          onClick={() => addCourse(index)}
          className="mt-2 bg-blue-500 hover:bg-blue-600 transition"
        >
          + Add Course
        </Button>
      </div>
    </div>

    {/* ✅ Remove this Education Entry */}
    {formData.education.length > 1 && (
      <Button
        type="button"
        variant="destructive"
        size="sm"
        onClick={() => removeEducationEntry(index)}
        className="mt-4"
      >
        🗑️ Remove Education Entry
      </Button>
    )}
  </div>
))}

{/* ✅ Action Button: Add Education Entry */}
<div className="flex gap-4 mt-6">
  <Button
    type="button"
    onClick={addEducationEntry}
    className="bg-green-500 hover:bg-green-600 transition duration-300"
  >
    + Add Education Entry
  </Button>
</div>



{/* ✅ SKILLS SECTION */}
<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-10 flex items-center gap-2">
  🧠 Skills
</h2>

<div className="space-y-6">
  {formData.skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300 space-y-4"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          placeholder="Skill Name (e.g. Programming) *"
          value={skill.name}
          required
          onChange={e => handleSkillChange(index, "name", e.target.value)}
        />
        <Input
          placeholder="Skill Level (e.g. Beginner, Expert) *"
          value={skill.level}
          required
          onChange={e => handleSkillChange(index, "level", e.target.value)}
        />
      </div>

      <div>
        <h4 className="font-medium text-lg text-muted-foreground">📌 Keywords</h4>
        <div className="space-y-2 mt-2">
          {skill.keywords.map((keyword, keywordIdx) => (
            <div key={keywordIdx} className="flex items-center gap-3">
              <Input
                placeholder={`Keyword ${keywordIdx + 1}`}
                value={keyword}
                required
                onChange={e => handleKeywordChange(index, keywordIdx, e.target.value)}
              />
              <Button
                type="button"
                variant="destructive"
                className="text-sm px-3 py-1"
                onClick={() => removeKeyword(index, keywordIdx)}
              >
                −
              </Button>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4 flex-wrap">
        <Button
          type="button"
          className="mt-2 bg-blue-500 hover:bg-blue-600 transition"
          onClick={() => addKeyword(index)}
        >
          + Add Keyword
        </Button>
        
      </div>

      <div className="flex justify-end">
        {formData.skills.length > 1 && (
          <Button
            type="button"
            variant="destructive"
            onClick={() => removeSkillEntry(index)}
          >
            − Remove Skill Entry
          </Button>
        )}
      </div>
    </motion.div>
  ))}
</div>

<div className="flex justify-start mt-6">
  <Button
    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2"
    type="button"
    onClick={addSkillEntry}
  >
    + Add Skill Entry
  </Button>
</div>



{/* ✅ PROJECTS SECTION */}
<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-12 flex items-center gap-2">
  💻 Projects
</h2>

<div className="space-y-6">
  {formData.projects.map((proj, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-white shadow-[0_0_10px_rgba(0,0,0,0.2)] p-6 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Project Title *"
          value={proj.title}
          required
          className="bg-white"
          onChange={e => handleProjectChange(index, "title", e.target.value)}
        />
        <Input
          placeholder="Project URL (optional)"
          value={proj.url}
          className="bg-white"
          onChange={e => handleProjectChange(index, "url", e.target.value)}
        />
      </div>

      <Textarea
        placeholder="Project Description *"
        value={proj.description}
        required
        className="bg-white mt-4"
        onChange={e => handleProjectChange(index, "description", e.target.value)}
      />

      <h4 className="font-medium text-md mt-4">Technologies Used</h4>
      <div className="space-y-2">
        {proj.technologies.map((tech, tIndex) => (
          <div key={tIndex} className="flex items-center gap-2">
            <Input
              placeholder={`Technology ${tIndex + 1} *`}
              value={tech}
              required
              className="bg-white flex-1"
              onChange={e => handleTechChange(index, tIndex, e.target.value)}
            />
            <Button
              type="button"
              variant="destructive"
              className="text-sm px-3 py-1"
              onClick={() => removeTechnology(index, tIndex)}
            >
              −
            </Button>
          </div>
        ))}
      </div>

      <div className="flex gap-4 mt-4 flex-wrap">
        <Button
          type="button"
          className="mt-2 bg-blue-500 hover:bg-blue-600 transition"
          onClick={() => addTechnology(index)}
        >
          + Add Technology
        </Button>
        
      </div>

      <div className="flex justify-end mt-6">
        {formData.projects.length > 1 && (
          <Button
            type="button"
            variant="destructive"
            onClick={() => removeProject(index)}
          >
            − Remove Project Entry
          </Button>
        )}
      </div>
    </motion.div>
  ))}
</div>

<Button
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2"
  type="button"
  onClick={addProject}
>
  + Add Project Entry
</Button>



{/* ✅ AWARDS SECTION */}
<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-12 flex items-center gap-2">
  🏆 Awards
</h2>

<div className="space-y-6">
  {formData.awards.map((award, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white border border-white shadow-[0_0_10px_rgba(0,0,0,0.2)] p-6 rounded-xl"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          placeholder="Award Title *"
          value={award.title}
          required
          className="bg-white"
          onChange={(e) => handleAwardChange(index, "title", e.target.value)}
        />
        <Input
          type="date"
          placeholder="Award Date *"
          value={award.date}
          required
          className="bg-white"
          onChange={(e) => handleAwardChange(index, "date", e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <Input
          placeholder="Awarder *"
          value={award.awarder}
          required
          className="bg-white"
          onChange={(e) => handleAwardChange(index, "awarder", e.target.value)}
        />
        <Textarea
          placeholder="Award Summary *"
          value={award.summary}
          required
          className="bg-white"
          onChange={(e) => handleAwardChange(index, "summary", e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-4">
        {formData.awards.length > 1 && (
          <Button
            type="button"
            variant="destructive"
            onClick={() => removeAward(index)}
          >
            − Remove Award
          </Button>
        )}
      </div>
    </motion.div>
  ))}
</div>

<Button
  className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-2"
  type="button"
  onClick={addAward}
>
  + Add Award
</Button>


{/* ✅ Certifications Section */}
<h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 mt-12 flex items-center gap-2">
  📄 Certifications
</h2>

{formData.certifications.map((cert, index) => (
  <div
    key={index}
    className="border border-gray-200 dark:border-gray-700 p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 hover:shadow-xl transition duration-300 space-y-4 mb-6"
  >
    <Input
      placeholder="Certification Title"
      value={cert.title}
      onChange={e => handleCertChange(index, "title", e.target.value)}
      required
    />

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Input
        placeholder="Date"
        value={cert.date}
        onChange={e => handleCertChange(index, "date", e.target.value)}
        type="date"
      />
      <Input
        placeholder="Issuer"
        value={cert.issuer}
        onChange={e => handleCertChange(index, "issuer", e.target.value)}
      />
    </div>

    {/* File Upload for Certification Document */}
    <div>
      <Label htmlFor={`cert-upload-${index}`}>Upload Certification (PDF/Image)</Label>
      <input
        type="file"
        id={`cert-upload-${index}`}
        accept=".pdf,image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
              const base64String = reader.result as string;
              handleCertChange(index, "url", base64String);
            };
            reader.readAsDataURL(file);
          }
        }}
        className="mt-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-white dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 p-2"
      />
      {cert.url && (
        <p className="text-sm mt-2 text-green-600 dark:text-green-400">
          File uploaded ✔️
        </p>
      )}
    </div>

    {formData.certifications.length > 1 && (
      <Button
        type="button"
        variant="destructive"
        className="mt-2"
        onClick={() => removeCert(index)}
      >
        − Remove Certification
      </Button>
    )}
  </div>
))}

<Button
  className="bg-green-500 hover:bg-green-600 text-white transition duration-300"
  type="button"
  onClick={addCert}
>
  + Add Certification
</Button>




<br></br>

    {/* ✅ SUBMIT BUTTON */}
    <Button className="mt-8" type="submit">
      Submit
    </Button>
  </div>

  </form>

  <Footer />
      </div>
);


}

