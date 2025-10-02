# FORGE Curriculum Website

## Project Overview
- **Name**: FORGE - Forging Emotional Resilience and Relational Clarity
- **Goal**: A Christ-Centered Social Emotional Learning (SEL) & Leadership Formation Program for grades 9-12 at Bishop Diego High School
- **Features**: 
  - Grade-level curriculum organization
  - PowerPoint presentation downloads
  - Comprehensive lesson details with CASEL framework alignment
  - Catholic Social Teaching integration
  - Mobile-responsive design

## URLs
- **Development**: https://3000-ixxso9nagivo4ularyebx-6532622b.e2b.dev
- **Production**: https://forge-9xl.pages.dev (Cloudflare Pages)
- **GitHub**: https://github.com/Eggmanaa/Forge

## Data Architecture
- **Data Models**: Grade-based curriculum structure with lesson modules, learning objectives, and key activities
- **Storage Services**: Static file hosting for PowerPoint presentations and curriculum materials
- **Data Flow**: JSX-rendered pages with curriculum data imported from TypeScript modules

## Course Structure

### Grade 9 - Freshman Year: Foundational Emotional Awareness
1. **Living Life in Color**: Understanding emotions as non-judgmental signals
2. **The Time-Traveling Emotional Brain**: How emotional triggers connect to past experiences

### Grade 10 - Sophomore Year: Managing Anxiety and Empathetic Communication
1. **Understanding and Managing Anxiety**: Psychoeducation and coping strategies
2. **Verbal Villains & Empathy**: Communication patterns and empathy-building skills

### Grade 11 - Junior Year: Understanding Personality Differences
1. **Relating Through Differences**: 7 Motivational Gifts of the Father framework
2. **9 Temperaments**: Understanding natural reaction patterns to environmental stimuli

### Grade 12 - Senior Year: Developing Healthy Character
1. **Healthy Character I: Boundaries**: Character Structure of Separation and saying "no"
2. **Healthy Character II: Facing Reality**: Character Structure of Integration and embracing realities

## User Guide
1. **Navigate by Grade Level**: Use the main navigation or homepage grade cards to access specific grade levels
2. **Browse Lessons**: Each grade page displays all course modules with detailed descriptions
3. **Access Materials**: Download PowerPoint presentations directly from lesson cards
4. **Learn About Framework**: Visit the About page to understand CASEL alignment and Catholic Social Teaching integration
5. **Audio Summaries**: Coming soon - audio files will be added to complement PowerPoint materials

## Technical Details
- **Platform**: Cloudflare Pages with Hono framework
- **Status**: ✅ Active deployment
- **Tech Stack**: 
  - **Backend**: Hono (TypeScript web framework)
  - **Frontend**: JSX with custom CSS using FORGE brand colors
  - **Deployment**: Cloudflare Workers/Pages
  - **File Storage**: Static file serving for PowerPoint presentations
- **Last Updated**: October 2, 2024

## Standards Alignment
- **CASEL Framework**: Self-Awareness, Self-Management, Social Awareness, Relationship Skills, and Responsible Decision-Making
- **NSBECS Standards**: Integrates Catholic Social Teaching and provides developmentally appropriate character formation
- **Accreditation**: Contributes to WCEA & WASC accreditation by delivering standards-aligned SEL curriculum

## Development Notes
- One large PowerPoint file (33MB) exceeds Cloudflare's 25MB limit and requires instructor access
- All other curriculum materials are accessible via direct download
- Brand colors: Deep burgundy (#8B1538), gold (#DAA520), charcoal (#36454F), and cream (#F5F5DC)
- Mobile-responsive design ensures accessibility across devices

## Future Enhancements
- Audio summary files for each lesson module
- Interactive activities and assessments
- Student progress tracking
- Teacher resources and discussion guides