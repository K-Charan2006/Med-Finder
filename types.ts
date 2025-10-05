export interface PotentialCondition {
  name: string;
  description: string;
  severity: 'Low' | 'Medium' | 'High' | 'Critical';
}

export interface Recommendation {
  action: string;
  urgency: 'Immediate' | 'Soon' | 'General';
}

export interface SymptomAnalysis {
  potentialConditions: PotentialCondition[];
  recommendations: Recommendation[];
  importantNote: string;
}

export interface HealthTipsResponse {
    tips: string[];
}

export interface AppointmentPrep {
    specialist: {
        type: string;
        reason: string;
    };
    questions: string[];
    symptomTips: string[];
}

export interface ForumPost {
    author: string;
    body: string;
    isOP?: boolean;
}

export interface ForumDiscussion {
    topic: string;
    posts: ForumPost[];
}

export interface WearableData {
    steps: number | string;
    sleepHours: number | string;
    restingHeartRate: number | string;
}

export interface WearableInsight {
    headline: string;
    detail: string;
    suggestion: string;
}

export interface HealthPlan {
    goal: string;
    diet: {
        summary: string;
        mealSuggestions: string[];
    };
    exercise: {
        summary: string;
        weeklyRoutine: string[];
    };
    wellbeing: {
        summary: string;
        practices: string[];
    };
}

export interface LifestyleData {
    age: number | string;
    lifestyleFactors: string[];
    familyHistory: string;
}

export interface HealthRisk {
    risk: string;
    explanation: string;
    preventionTips: string[];
    riskLevel: 'High' | 'Medium' | 'Low';
}
export interface PredictiveAnalysis {
    summary: string;
    potentialRisks: HealthRisk[];
}

export interface HolisticInsight {
    keyThemes: string[];
    potentialConnections: string[];
    gentleSuggestions: string[];
}

export interface GenomicMarkerExplanation {
    marker: string;
    gene: string;
    summary: string;
    reference_info: string;
}

export interface MedicalResource {
  id: string;
  name: string;
  address: string;
  type: 'Hospital' | 'Clinic' | 'Pharmacy';
  phone: string;
  distance: string;
  communityVerified: boolean;
}

export interface MedicineInfo {
    name: string;
    description: string;
    price: number;
    requiresPrescription: boolean;
}

export interface CartItem {
    medicine: MedicineInfo;
    quantity: number;
}