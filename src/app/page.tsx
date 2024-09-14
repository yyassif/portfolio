import Link from "next/link";
import { Metadata } from "next";
import Markdown from "react-markdown";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import { BLUR_FADE_DELAY } from "@/data/constants";
import { ResumeCard } from "@/components/resume-card";
import { HackathonCard } from "@/components/hackathon-card";
import { ProjectCard } from "@/components/project-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const metadata: Metadata = {
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  applicationName: "yyassif",
  generator: "yyassif",
  category: "technology",
  metadataBase: new URL(DATA.url),
  keywords: [
    "Yassine Yassif",
    "Software Engineer",
    "AI Engineer",
    "Machine Learning Engineer",
    "Deep Learning",
    "Full Stack Developer",
    "Web Developer",
    "AI Integration Specialist",
    "TypeScript Developer",
    "Python Developer",
    "Java Developer",
    "Rust Developer",
    "C++ Developer",
    "Go Developer",
    "R Programmer",
    "Node.js Developer",
    "Next.js Developer",
    "Django Developer",
    "FastAPI Developer",
    "React Developer",
    "TailwindCSS Expert",
    "LLM Specialist",
    "Large Language Models",
    "PyTorch Developer",
    "OpenAI-Gym",
    "OpenCV",
    "PostgreSQL",
    "Supabase",
    "Docker",
    "Kubernetes",
    "Terraform",
    "AWS",
    "Git",
    "GitHub",
    "GitLab",
    "RAG",
    "Retrieval-Augmented Generation",
    "Conversational AI",
    "Enterprise Data Analysis",
    "IoT Systems",
    "Real-time Data Logging",
    "Cloud Technology",
    "LLM Inference",
    "Data Interpretation",
    "SCADA Systems",
    "Networking Engineer",
    "Artificial Intelligence",
    "Data Science",
    "Front-end Development",
    "Back-end Development",
    "User Experience",
    "UX",
    "Web Applications",
    "Hackathon Participant",
    "Problem Solver",
    "Innovation Driver",
    "Quebec Software Engineer",
    "Canadian Tech Talent",
    "AI-Powered Solutions",
    "Enterprise Document Analysis",
    "Data-Driven Decision Making",
    "Cloud Architecture",
    "Software Architect",
    "Scalable Applications",
    "Efficient Coding",
    "Creative Problem Solving",
    "Tech Stack Versatility",
    "Industrial Solutions",
    "HR Tech",
    "CV Ranking",
    "Natural Language Processing",
    "NLP",
    "Data Augmentation",
    "GANs",
    "Generative Adversarial Networks",
    "Image Processing",
    "Sentiment Analysis",
    "kNN",
    "Gzip",
    "Multi-processing",
    "Software Development",
    "Code Optimization",
    "API Development",
    "Database Management",
    "Version Control",
    "Agile Methodologies",
    "Tech Innovation",
    "AI Ethics",
    "Data Privacy",
    "Cybersecurity",
    "Cloud Computing",
    "Microservices",
    "Serverless Architecture",
    "CI/CD",
    "DevOps",
    "Mobile App Development",
    "Cross-Platform Development",
    "UI/UX Design",
    "Responsive Web Design",
    "Performance Optimization",
    "Big Data",
    "Data Analytics",
    "Business Intelligence",
    "Blockchain",
    "IoT",
    "Internet of Things",
    "Edge Computing",
    "5G Technologies",
    "AR/VR Development",
    "quantum computing",
    "green tech",
    "sustainability solutions",
  ],
  openGraph: {
    title: DATA.name,
    description: DATA.description,
    url: DATA.url,
    siteName: DATA.name,
    images: [
      {
        url: DATA.ogImage,
        width: 1200,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  authors: [
    {
      name: "yyassif",
      url: "https://yyassif.dev",
    },
  ],
  creator: "YASSIF Yassine",
  publisher: "YASSIF Yassine",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: DATA.name,
    description: DATA.description,
    site: "@yassineyassif",
    creator: "@yassineyassif",
    images: [DATA.ogImage],
  },
  verification: {
    google: "",
    yandex: "",
  },
  viewport: {
    viewportFit: "cover",
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function Page() {
  return (
    <main className="min-h-screen max-w-4xl mx-auto py-12 sm:py-24 px-6">
      <div className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                />
                <BlurFadeText
                  className="max-w-[670px] md:text-xl"
                  delay={BLUR_FADE_DELAY}
                  text={DATA.description}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-28 md:size-32 border rounded-full">
                  <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                  <AvatarFallback>{DATA.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
            </div>
          </div>
        </section>
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">Skills</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I&apos;ve worked on a variety of projects, from simple to complex websites, AI integrations, and so many more. Here are a few of my favorites.
                  </p>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="hackathons">
          <div className="space-y-12 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    During my time in university, I attended{" "}
                    {DATA.hackathons.length}+ hackathons both as participant &/ mentor. People from around the
                    country would come together and build incredible things in 2-3
                    days.
                  </p>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just drop a DM{" "}
                  <Link
                    href={DATA.contact.social.X.url}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    @X
                  </Link>{" "}
                  and I&apos;ll respond whenever I can. Or, simply email me{" "}
                  <Link
                    href={`${DATA.contact.social.email.url}?subject=Hey%20Yassif`}
                    target="_blank"
                    className="text-blue-500 hover:underline"
                  >
                    @email.
                  </Link>
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </main>
  );
}
