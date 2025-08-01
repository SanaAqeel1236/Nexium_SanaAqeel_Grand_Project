import express from 'express';
import { supabase } from '../db/supabase.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const resumeData = req.body;

  try {
    // ✅ Validate required basics
    if (!resumeData || !resumeData.basics?.name || !resumeData.basics?.email) {
      return res.status(400).json({ error: 'Missing required resume basics (name, email)' });
    }

    console.log('📥 Resume received:', {
      name: resumeData.basics.name,
      email: resumeData.basics.email,
    });

    // ✅ Insert full resume into Supabase
    const { error: supabaseError, data } = await supabase.from('resumes').insert([
      {
        name: resumeData.basics.name,
        email: resumeData.basics.email,
        phone: resumeData.basics.phone || '',
        summary: resumeData.basics.summary || '',
        work: resumeData.work || [],
        education: resumeData.education || [],
        skills: resumeData.skills || [],
        projects: resumeData.projects || [],
        awards: resumeData.awards || [],
        certifications: resumeData.certifications || [],
        created_at: new Date().toISOString(),
      },
    ]);

    if (supabaseError) {
      console.error('❌ Supabase insert error:', supabaseError);
      return res.status(500).json({ error: 'Failed to save resume to Supabase' });
    }

    console.log('✅ Resume saved to Supabase');

    res.status(200).json({
      message: '✅ Resume saved successfully in Supabase',
      supabaseData: data,
    });
  } catch (error) {
    console.error('❌ Error submitting resume:', error);
    res.status(500).json({
      error: 'Failed to submit resume',
      details: error.message,
    });
  }
});

export default router;





