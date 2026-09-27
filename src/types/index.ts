export type Language = 'en' | 'ne' | 'zh' | 'ja' | 'ru' | 'de' | 'fr';

export interface LeadershipMember {
  id: string;
  name: string;
  nameNe: string;
  role: string;
  roleNe: string;
  titles: string[];
  titlesNe: string[];
  additionalTitles?: string;
  additionalTitlesNe?: string;
  academicBackground: string[];
  academicBackgroundNe: string[];
  bio: string;
  bioNe: string;
  notice: string;
  noticeNe: string;
}

export interface PailaEvent {
  id: string;
  title: string;
  titleNe: string;
  category: 'workshop' | 'school-program' | 'community' | 'training' | 'drill';
  categoryNe: string;
  date: string;
  dateNe: string;
  time?: string;
  timeNe?: string;
  location: string;
  locationNe: string;
  description: string;
  descriptionNe: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  registrationOpen: boolean;
  capacity?: string;
  capacityNe?: string;
  feeNote?: string;
  feeNoteNe?: string;
  audience?: string;
  audienceNe?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  titleNe: string;
  description: string;
  descriptionNe: string;
  category: 'mental-health' | 'child-family' | 'training' | 'disaster';
  keyPoints: string[];
  keyPointsNe: string[];
}

export interface ProgramItem {
  id: string;
  title: string;
  titleNe: string;
  tagline?: string;
  taglineNe?: string;
  category: 'mental-health' | 'disaster' | 'training' | 'community';
  focus: string[];
  focusNe: string[];
  description: string;
  descriptionNe: string;
  pillars?: {
    number: number;
    title: string;
    titleNe: string;
    description: string;
    descriptionNe: string;
  }[];
}

export interface TrainingCourse {
  id: string;
  title: string;
  titleNe: string;
  subtitle: string;
  subtitleNe: string;
  duration: string;
  totalHours: string;
  ojtHours: string;
  learningModel: string;
  learningModelNe: string;
  curriculumTopics: {
    title: string;
    titleNe: string;
    description: string;
    descriptionNe: string;
  }[];
  targetParticipants: string[];
  targetParticipantsNe: string[];
  engagementAreas: string[];
  engagementAreasNe: string[];
  disclaimer: string;
  disclaimerNe: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  titleNe: string;
  category: 'Mental Health' | 'Psychological First Aid' | 'Counselling' | 'Child & Family Wellbeing' | 'Disaster Preparedness' | 'Emergency Psychosocial Support' | 'Community Resilience';
  categoryNe: string;
  description: string;
  descriptionNe: string;
  readTime: string;
  keyPoints: string[];
  content: {
    heading: string;
    text: string;
  }[];
}

export interface FAQItem {
  id: string;
  question: string;
  questionNe: string;
  answer: string;
  answerNe: string;
  category: string;
}

export interface AdminSettings {
  announcementActive: boolean;
  announcementTextEn: string;
  announcementTextNe: string;
  nextTrainingBatchEn: string;
  nextTrainingBatchNe: string;
  trainingFeeNoteEn: string;
  trainingFeeNoteNe: string;
  contactPhone1: string;
  contactPhone2: string;
  contactEmail: string;
  addressEn: string;
  addressNe: string;
  facebookUrl: string;
}
