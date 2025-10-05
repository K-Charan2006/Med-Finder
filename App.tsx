import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import SymptomChecker from './features/SymptomChecker';
import HealthTips from './features/HealthTips';
import EmergencyInfo from './features/EmergencyInfo';
import Dashboard from './features/Dashboard';
import Telemedicine from './features/Telemedicine';
import HealthRecords from './features/HealthRecords';
import AppointmentBooking from './features/AppointmentBooking';
import CommunityForum from './features/CommunityForum';
import WearableIntegration from './features/WearableIntegration';
import MedicineFinder from './features/MedicineFinder';
import MentalHealthSupport from './features/MentalHealthSupport';
import PersonalizedHealthPlan from './features/PersonalizedHealthPlan';
import PredictiveAnalytics from './features/PredictiveAnalytics';
import GenomicAnalysis from './features/GenomicAnalysis';
import AIInsights from './features/AIInsights';
import ResourceFinder from './features/ResourceFinder';
import Favorites from './features/Favorites';
import Cart from './features/Cart';
import { VoiceControlProvider, useVoiceControl } from './context/VoiceControlContext';
import { LanguageProvider } from './context/LanguageContext';
import { useGlobalVoiceCommands } from './hooks/useGlobalVoiceCommands';
import { VoiceControlButton } from './components/VoiceControlButton';
import { CommandToast } from './components/CommandToast';


export type View = 'dashboard' | 'symptom-checker' | 'health-tips' | 'emergency-info' | 
                   'telemedicine' | 'records' | 'appointments' | 'forum' | 
                   'wearables' | 'price-comparison' | 'mental-health' | 'health-plan' |
                   'predictive-analytics' | 'genomic-analysis' | 'ai-insights' |
                   'resource-finder' | 'favorites' | 'cart';

const AppContent: React.FC = () => {
  const [activeView, setActiveView] = useState<View>('dashboard');
  const [isLowConnectivity, setIsLowConnectivity] = useState(false);

  const {
      setSymptomInput,
      setMedicineInput,
      setResourceInput,
      triggerSubmit,
      isListening,
      setIsListening,
      setToastMessage,
      setProcessingCommand,
  } = useVoiceControl();

  const { toggleListening } = useGlobalVoiceCommands({
      activeView,
      setActiveView,
      setSymptomInput,
      setMedicineInput,
      setResourceInput,
      triggerSubmit,
      isListening,
      setIsListening,
      setToastMessage,
      setProcessingCommand,
  });


  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard setActiveView={setActiveView} />;
      case 'symptom-checker':
        return <SymptomChecker />;
      case 'health-tips':
        return <HealthTips />;
      case 'emergency-info':
        return <EmergencyInfo />;
      case 'telemedicine':
        return <Telemedicine />;
      case 'records':
         return <HealthRecords />;
      case 'appointments':
          return <AppointmentBooking />;
      case 'forum':
        return <CommunityForum />;
      case 'wearables':
        return <WearableIntegration />;
      case 'price-comparison':
        return <MedicineFinder setActiveView={setActiveView} />;
      case 'mental-health':
        return <MentalHealthSupport />;
      case 'health-plan':
        return <PersonalizedHealthPlan />;
      case 'predictive-analytics':
        return <PredictiveAnalytics />;
      case 'genomic-analysis':
        return <GenomicAnalysis />;
      case 'ai-insights':
        return <AIInsights />;
      case 'resource-finder':
        return <ResourceFinder isLowConnectivity={isLowConnectivity} />;
      case 'favorites':
        return <Favorites isLowConnectivity={isLowConnectivity} />;
      case 'cart':
        return <Cart />;
      default:
        return <Dashboard setActiveView={setActiveView} />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      <Sidebar 
        activeView={activeView} 
        setActiveView={setActiveView}
        isLowConnectivity={isLowConnectivity}
        setIsLowConnectivity={setIsLowConnectivity}
      />
      <main className="flex-1 p-6 sm:p-8 lg:p-10 overflow-y-auto">
        {renderView()}
      </main>
      <VoiceControlButton toggleListening={toggleListening} />
      <CommandToast />
    </div>
  );
};


const App: React.FC = () => {
  return (
    <LanguageProvider>
        <VoiceControlProvider>
            <AppContent />
        </VoiceControlProvider>
    </LanguageProvider>
  );
};

export default App;
