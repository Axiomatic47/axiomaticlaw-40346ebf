import { Discipline } from '@/types/content';

export async function loadContent(disciplineId: string): Promise<Discipline | null> {
  try {
    const response = await fetch(`/content/pages/${disciplineId}.json`);
    if (!response.ok) {
      throw new Error(`Failed to load content for ${disciplineId}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading content for ${disciplineId}:`, error);
    return null;
  }
}
