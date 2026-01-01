import { useState } from 'react';
import { Database } from 'lucide-react';
import { seedDatabase } from '../utils/seedData';

export function DatabaseInit() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [showButton, setShowButton] = useState(true);

  const handleSeed = async () => {
    if (!confirm('This will seed the database with sample data. Continue?')) {
      return;
    }

    setIsSeeding(true);
    try {
      const result = await seedDatabase();
      if (result.success) {
        alert('Database seeded successfully! The page will now reload to show the data.');
        setShowButton(false);
        // Reload page to fetch new data
        window.location.reload();
      } else {
        alert(`Error seeding database: ${result.error}`);
      }
    } catch (error) {
      alert(`Error: ${error}`);
    } finally {
      setIsSeeding(false);
    }
  };

  if (!showButton) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleSeed}
        disabled={isSeeding}
        className="flex items-center gap-2 px-6 py-3 bg-[#174499] hover:bg-[#123a7d] text-white rounded-lg shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Database className="w-5 h-5" />
        <span>{isSeeding ? 'Seeding Database...' : 'Initialize Database'}</span>
      </button>
    </div>
  );
}
