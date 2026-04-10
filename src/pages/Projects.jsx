import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import useKeyboardShortcuts from '../hooks/useKeyboardShortcuts';

const projectsData = [
  {
    id: 1,
    title: 'Pantry Tracker.',
    description: 'A smart inventory management app that tracks <span class="highlight-orange">pantry items.</span>',
    category: 'Development',
    github: 'https://github.com/tharagaramanbalaji/Pantry-Tracker',
    demo: '#',
  },
  {
    id: 2,
    title: 'Quiz Generator.',
    description: 'A generative AI-powered quiz system that creates, stores,<br> and retrieves questions using <span class="highlight-orange">Express APIs & Gemini.</span>',
    category: 'Development',
    github: 'https://github.com/tharagaramanbalaji/flashcards-backend',
    demo: '#',
  },
  {
    id: 3,
    title: 'Job Hub.',
    description: 'A full-stack job listing platform featuring structured <span class="highlight-orange">SQL <br> data models and CRUD operations with Express.</span>',
    category: 'Development',
    github: 'https://github.com/tharagaramanbalaji/job_hub',
    demo: '#',
  },
  {
    id: 4,
    title: 'GitHub Extract.',
    description: 'An advanced GitHub profile analyzer using ML to extract <br> deep <span class="highlight-orange">technical insights from user repositories.</span>',
    category: 'Development',
    github: 'https://github.com/tharagaramanbalaji/github-extract',
    demo: '#',
  },
  {
    id: 5,
    title: 'Game Stats.',
    description: 'A Flask web application for managing game statistics with a <span class="highlight-orange">MySQL database.</span>',
    category: 'Development',
    github: 'https://github.com/tharagaramanbalaji/game-stats',
    demo: '#',
  },
  {
    id: 6,
    title: 'Autograd Engine from Scratch.',
    description: 'A minimal automatic differentiation engine built from scratch to <br><span class="highlight-red">understand computation graphs and backpropagation.</span>',
    category: 'Core ML',
    github: 'https://github.com/tharagaramanbalaji/from-scratch/blob/main/micrograd_from_scratch.ipynb',
  },
  {
    id: 7,
    title: 'Smart Loan Recovery Study.',
    description: 'A data-driven loan recovery prediction system using <span class="highlight-red">exploratory <br> data analysis and ML techniques.</span>',
    category: 'Core ML',
    github: 'https://colab.research.google.com/drive/1yj8VSn8j07wxKV2PmPXJym1DTxKAFbiA?usp=sharing',
  },
  {
    id: 8,
    title: 'Movie Recommendation Logic.',
    description: 'A content-based recommender engine using <span class="highlight-red">vector embeddings <br> and cosine similarity to suggest movies based on user preferences.</span>',
    category: 'Core ML',
    github: 'https://colab.research.google.com/drive/19zj5IuzGHNpFN04atuQBxUfFoDsAa7kw?usp=sharing',
  },
  {
    id: 9,
    title: 'NN from Scratch.',
    description: 'A fully self-implemented feed-forward neural network demonstrating <br> <span class="highlight-red">forward pass, backpropagation, activations, and training loops.</span>',
    category: 'Core ML',
    github: 'https://github.com/tharagaramanbalaji/NNfromscratch',
  },
  {
    id: 10,
    title: 'Pokémon MCP Tools.',
    description: 'A set of tools for interacting with Pokémon data, built using the <span class="highlight-green">FastMCP framework and the PokéAPI.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/learning-mcp',
  },
  {
    id: 11,
    title: 'Website Intelligence Agent.',
    description: 'A Streamlit app using a <span class="highlight-green">LangChain agent and Gemini to scrape content, answer questions, and summarize information from websites in real-time.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/starter-scraper-agent',
  },
  {
    id: 12,
    title: 'Multi-Agent Mental Health Assistant.',
    description: 'A conversational AI with a <span class="highlight-green">multi-agent system and intelligent router built with LangChain and Streamlit to provide targeted mental health support.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/mentalhealth-multiagentsystem',
  },
  {
    id: 13,
    title: 'CropSense.',
    description: 'A domain-specific agriculture assistant that <span class="highlight-green">runs ML models for crop and fertilizer recommendations, feeds the results into an LLM.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/CropSense',
    demo: '#',
  },
  {
    id: 14,
    title: 'Docsense.',
    description: 'An AI-powered document understanding tool that <span class="highlight-green">extracts text from PDFs, injects it into structured prompts, and generates answers.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/DocSense',
    demo: '#',
  },
  {
    id: 15,
    title: 'ChatWithDB.',
    description: 'An AI-driven web application that enables users to ask questions in plain English and <span class="highlight-green">dynamically generates SQL queries against an Oracle/MySQL database using LLMs.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/chatwithdb',
  },
  {
    id: 16,
    title: 'Basic Visual AI.',
    description: 'A computer-vision pipeline that <span class="highlight-green">ingests images/video, runs detection/segmentation/classification models, and presents results.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/basic-visual-ai',
  },
  {
    id: 17,
    title: 'Retrieval RAG System.',
    description: 'A Retrieval-Augmented Generation system built using Google ADK and Vertex AI to <span class="highlight-green">accurately retrieve HSN codes from a custom dataset and generate context-aware responses.</span>',
    category: 'Applied AI & LLM',
    github: 'https://github.com/tharagaramanbalaji/rag-hns',
  },
];

const categories = ['Development', 'Core ML', 'Applied AI & LLM'];

const Projects = () => {
  const [activeTab, setActiveTab] = useState(0);

  useKeyboardShortcuts(categories, activeTab, setActiveTab);

  const filteredProjects = projectsData.filter(
    (project) => project.category === categories[activeTab]
  );

  return (
    <main className="projects-page-section">
      <div className="page-shortcuts fade-in delay-4">
        <span>[P] Switch Category</span>
      </div>

      <motion.h1 
        className="page-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Projects.
      </motion.h1>

      <div className="filter-tabs">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`tab-btn ${activeTab === index ? 'active' : ''}`}
            onClick={() => setActiveTab(index)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="project-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="project-list"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Projects;
