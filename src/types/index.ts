export interface Topic {
  title: string;
  done: boolean;
  desc: string;
}

export interface Phase {
  phase: string;
  color: string;
  topics: Topic[];
}

export interface QuizQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface InterviewQuestion {
  cat: string;
  q: string;
  a: string;
  icon: string;
}

export interface TrackedTopic extends Topic {
  phase: string;
  track: string;
  color: string;
}

export type NavSection = 'Home' | 'Roadmap' | 'Quiz' | 'Progress' | 'Interview';
