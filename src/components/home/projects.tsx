import { useState } from 'react';
import { SectionHeading } from '../ui/section-heading';
import { ProjectCard, type Project } from '../ui/project-card';
import { Button } from '@/components/ui/button';
import { MotionDiv } from '../ui/motion-div';
import { Router } from 'lucide-react';

const ALL_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Trivia Quiz App',
    description:
      'A quiz application with authorization, multiple choice questions, difficulty levels, and a global leaderboard.',
    image: '/images/quiz.png',
    tags: ['React', 'React Router', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://trivia-quiz-develop.vercel.app/',
    githubUrl: 'https://github.com/bink-git/trivia-quiz',
  },
  {
    id: '2',
    title: 'Digital Agency Website',
    description:
      'A digital agency website with a modern design, smooth animations.',
    image: '/images/raven.png',
    tags: ['React', 'Tailwind CSS', 'Swiper'],
    liveUrl: 'https://raven-digital-bink.vercel.app/',
    githubUrl: 'https://github.com/bink-git/raven-digital',
  },
  {
    id: '3',
    title: 'Weather Forecast App',
    description:
      'A weather forecast app with current conditions and location-based data.',
    image: '/images/weather.png',
    tags: ['React', 'API Integration'],
    liveUrl: 'https://weather-app-bink.vercel.app/',
    githubUrl: 'https://github.com/bink-git/weather-app',
  },
  {
    id: '4',
    title: 'Password generator',
    description:
      'A simple password generator that generates a random password based on user-selected criteria.',
    image: '/images/work-7.jpg',
    tags: ['HTML', 'JavaScript', 'CSS'],
    liveUrl: 'https://bink-git.github.io/password-generator/',
    githubUrl: 'https://github.com/bink-git/password-generator',
  },
  {
    id: '5',
    title: 'Surfing Club Website',
    description:
      'A surfing club website with a modern design, smooth animations.',
    image: '/images/work-2.jpg',
    tags: ['HTML', 'JavaScript', 'CSS'],
    liveUrl: 'https://bink-git.github.io/go-surf/',
    githubUrl: 'https://github.com/bink-git/go-surf',
  },
  {
    id: '6',
    title: 'Car Repair Service',
    description:
      'A car repair service website with a modern design, smooth animations.',
    image: '/images/work-1.jpg',
    tags: ['HTML', 'JavaScript', 'CSS', 'GSAP'],
    liveUrl: 'https://car-repair-bink.vercel.app/',
    githubUrl: 'https://github.com/bink-git/car-repair',
  },
];

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const hasMoreProjects = visibleProjects < ALL_PROJECTS.length;

  const handleLoadMore = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, ALL_PROJECTS.length));
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading
          subtitle="My Work"
          title="Featured Projects"
          description="A selection of my recent projects showcasing my skills and experience in web development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {ALL_PROJECTS.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {hasMoreProjects && (
          <MotionDiv animation="fade-in" className="flex justify-center mt-10">
            <Button
              onClick={handleLoadMore}
              size="lg"
              className="rounded-full px-6"
            >
              Load More Projects
            </Button>
          </MotionDiv>
        )}
      </div>
    </section>
  );
}
