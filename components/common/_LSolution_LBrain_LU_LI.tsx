import React from 'react';
import { Solution, RuntimeError } from '../models/ErrorModels';
import { ErrorAnalysisEngine, ErrorLog } from '../utils/ErrorAnalysisEngine';

interface SolutionBrainUIProps {
  recommendations: Solution[];
}

export const SolutionBrainUI: React.FC<SolutionBrainUIProps> = ({ recommendations }) => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [matchingErrors, setMatchingErrors] = React.useState<RuntimeError[]>([]);
  const [display, setDisplay] = React.useState<JSX.Element | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    const errorAnalysisEngine = new ErrorAnalysisEngine();
    const parsedErrors: ErrorLog[] = errorAnalysisEngine.parseErrorLogs();
    const matchingErrors: RuntimeError[] = parsedErrors.map(error => ({
      ...error,
      dateEncountered: new Date(error.dateEncountered)
    })).filter(error => error.description.includes(searchTerm) || error.code.includes(searchTerm));
    setMatchingErrors(matchingErrors);
    setDisplay(
      <ul>
        {matchingErrors.map((error, index) => (
          <li key={index}>{error.code} - {error.description}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Error Search</h2>
      <div className="search-container flex gap-2 mb-4">
        <input className="flex-grow p-2 border rounded" type="text" placeholder="Enter error code or description..." onChange={handleInputChange} />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSearch}>Search</button>
      </div>
      <h2 className="text-xl font-bold mb-4">Recommended Solutions</h2>
      <ul className="list-disc pl-5">
        {recommendations.map((solution, index) => (
          <li key={index} className="mb-2">{solution.description}</li>
        ))}
      </ul>
      {display}
    </div>
  );
};