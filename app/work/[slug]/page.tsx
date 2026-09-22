import { redirect } from 'next/navigation';
import { PROJECTS } from '@/data/projects';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyRedirectPage({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/case-studies/${slug}`);
}

