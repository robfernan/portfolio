import { useState } from 'react';
import { Plus, Minus, Printer, Download } from 'lucide-react';
import React from 'react';
interface Checkpoint {
  id: string;
  name: string;
  trueCourse: string;
  altitude: string;
  windDirection: string;
  windVelocity: string;
  temperature: string;
  planTAS: string;
  windCorrection: string;
  trueHeading: string;
  variation: string;
  magHeading: string;
  deviation: string;
  compassHeading: string;
  distance: string;
  remaining: string;
  groundSpeed: string;
  est: string;
  act: string;
  ete: string;
  ate: string;
  eta: string;
  ata: string;
  fuelUsed: string;
  fuelRemaining: string;
  vorFreq: string;
  vorRadial: string;
  vorIdent: string;
}

interface FlightPlanFormProps {
  darkMode: boolean;
}

const FlightPlanForm: React.FC<FlightPlanFormProps> = ({ darkMode }) => {
  const [checkpoints, setCheckpoints] = useState<Checkpoint[]>([
    { 
      id: '1', 
      name: 'DEPARTURE', 
      trueCourse: '', 
      altitude: '', 
      windDirection: '', 
      windVelocity: '', 
      temperature: '', 
      planTAS: '', 
      windCorrection: '', 
      trueHeading: '', 
      variation: '', 
      magHeading: '', 
      deviation: '', 
      compassHeading: '', 
      distance: '', 
      remaining: '', 
      groundSpeed: '', 
      est: '', 
      act: '', 
      ete: '', 
      ate: '', 
      eta: '', 
      ata: '', 
      fuelUsed: '', 
      fuelRemaining: '', 
      vorFreq: '', 
      vorRadial: '',
      vorIdent: '' 
    },
    { 
      id: '2', 
      name: 'CHECKPOINT 1', 
      trueCourse: '', 
      altitude: '', 
      windDirection: '', 
      windVelocity: '', 
      temperature: '', 
      planTAS: '', 
      windCorrection: '', 
      trueHeading: '', 
      variation: '', 
      magHeading: '', 
      deviation: '', 
      compassHeading: '', 
      distance: '', 
      remaining: '', 
      groundSpeed: '', 
      est: '', 
      act: '', 
      ete: '', 
      ate: '', 
      eta: '', 
      ata: '', 
      fuelUsed: '', 
      fuelRemaining: '', 
      vorFreq: '', 
      vorRadial: '',
      vorIdent: '' 
    },
    { 
      id: '3', 
      name: 'DESTINATION', 
      trueCourse: '', 
      altitude: '', 
      windDirection: '', 
      windVelocity: '', 
      temperature: '', 
      planTAS: '', 
      windCorrection: '', 
      trueHeading: '', 
      variation: '', 
      magHeading: '', 
      deviation: '', 
      compassHeading: '', 
      distance: '', 
      remaining: '', 
      groundSpeed: '', 
      est: '', 
      act: '', 
      ete: '', 
      ate: '', 
      eta: '', 
      ata: '', 
      fuelUsed: '', 
      fuelRemaining: '', 
      vorFreq: '', 
      vorRadial: '',
      vorIdent: '' 
    }
  ]);

  const [flightInfo, setFlightInfo] = useState({
    aircraft: '',
    tailNumber: '',
    pilot: '',
    departure: '',
    destination: '',
    route: '',
    altitude: '',
    airspeed: '',
    fuelOnBoard: '',
    alternateAirport: '',
    remarks: ''
  });

  const addCheckpoint = () => {
    // Find the destination checkpoint (last one)
    const destinationIndex = checkpoints.length - 1;
    const enRouteCount = checkpoints.length - 2; // Subtract DEPARTURE and DESTINATION

    let newCheckpointName: string;
    if (enRouteCount === 0) {
      // First en route checkpoint
      newCheckpointName = 'EN ROUTE';
    } else if (enRouteCount === 1) {
      // Adding second en route checkpoint, renumber existing to CHECKPOINT 1
      const updatedCheckpoints = checkpoints.map((cp, index) => {
        if (index === 1) { // The EN ROUTE checkpoint becomes CHECKPOINT 1
          return { ...cp, name: 'CHECKPOINT 1' };
        }
        return cp;
      });
      setCheckpoints(updatedCheckpoints);
      newCheckpointName = 'CHECKPOINT 2';
    } else {
      // Multiple checkpoints already exist
      newCheckpointName = `CHECKPOINT ${enRouteCount + 1}`;
    }

    const newCheckpoint: Checkpoint = {
      id: Date.now().toString(),
      name: newCheckpointName,
      trueCourse: '',
      altitude: '',
      windDirection: '',
      windVelocity: '',
      temperature: '',
      planTAS: '',
      windCorrection: '',
      trueHeading: '',
      variation: '',
      magHeading: '',
      deviation: '',
      compassHeading: '',
      distance: '',
      remaining: '',
      groundSpeed: '',
      est: '',
      act: '',
      ete: '',
      ate: '',
      eta: '',
      ata: '',
      fuelUsed: '',
      fuelRemaining: '',
      vorFreq: '',
      vorRadial: '',
      vorIdent: ''
    };

    // Insert the new checkpoint before the destination
    const updatedCheckpoints = [
      ...checkpoints.slice(0, destinationIndex),
      newCheckpoint,
      ...checkpoints.slice(destinationIndex)
    ];

    setCheckpoints(updatedCheckpoints);
  };

  const removeCheckpoint = (id: string) => {
    if (checkpoints.length > 2) {
      const updatedCheckpoints = checkpoints.filter(cp => cp.id !== id);

      // Renumber checkpoints after removal
      const renumberedCheckpoints = updatedCheckpoints.map((cp, index) => {
        if (index === 0) {
          return { ...cp, name: 'DEPARTURE' };
        } else if (index === updatedCheckpoints.length - 1) {
          return { ...cp, name: 'DESTINATION' };
        } else if (updatedCheckpoints.length === 3) {
          // If only one en route checkpoint, call it EN ROUTE
          return { ...cp, name: 'EN ROUTE' };
        } else {
          // Multiple en route checkpoints, number them
          return { ...cp, name: `CHECKPOINT ${index}` };
        }
      });

      setCheckpoints(renumberedCheckpoints);
    }
  };

  const updateCheckpoint = (id: string, field: keyof Checkpoint, value: string) => {
    setCheckpoints(checkpoints.map(cp => 
      cp.id === id ? { ...cp, [field]: value } : cp
    ));
  };

  const calculateTotals = () => {
    const totalDistance = checkpoints.reduce((sum, cp) =>
      sum + (parseFloat(cp.distance) || 0), 0
    );

    // Calculate total flight time from the last checkpoint's ETA
    const lastCheckpoint = checkpoints[checkpoints.length - 1];
    let totalETE = 0;
    if (lastCheckpoint && lastCheckpoint.eta) {
      const etaParts = lastCheckpoint.eta.split(':');
      if (etaParts.length === 2) {
        const hours = parseFloat(etaParts[0]) || 0;
        const minutes = parseFloat(etaParts[1]) || 0;
        totalETE = hours * 60 + minutes;
      }
    }

    const totalFuelUsed = checkpoints.reduce((sum, cp) =>
      sum + (parseFloat(cp.fuelUsed) || 0), 0
    );

    return { totalDistance, totalETE, totalFuelUsed };
  };

  const { totalDistance, totalETE, totalFuelUsed } = calculateTotals();

  const handlePrint = () => {
    // Create a print-friendly version
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>Flight Plan - ${flightInfo.tailNumber || 'Unknown'}</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; }
              h1 { color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px; }
              table { width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 12px; }
              th, td { border: 1px solid #ccc; padding: 8px; text-align: center; }
              th { background-color: #f3f4f6; font-weight: bold; }
              .flight-info { margin: 20px 0; }
              .flight-info div { margin: 5px 0; }
              .summary { background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0; }
              @media print { 
                body { margin: 0; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <h1>FLIGHT PLAN</h1>
            <div class="flight-info">
              <div><strong>Aircraft:</strong> ${flightInfo.aircraft || 'N/A'}</div>
              <div><strong>Tail Number:</strong> ${flightInfo.tailNumber || 'N/A'}</div>
              <div><strong>Pilot:</strong> ${flightInfo.pilot || 'N/A'}</div>
              <div><strong>Fuel on Board:</strong> ${flightInfo.fuelOnBoard || 'N/A'} gal</div>
            </div>
            
            <table>
              <thead>
                <tr>
                  <th rowspan="2">Checkpoint</th>
                  <th colspan="2">A Planned</th>
                  <th colspan="2">Predicted Wind</th>
                  <th>TEMP</th>
                  <th>Plan TAS</th>
                  <th>WCA -L +R</th>
                  <th>True HDG</th>
                  <th>Var -E +W</th>
                  <th>Mag HDG</th>
                  <th>Dev +-</th>
                  <th>Compass HDG</th>
                  <th colspan="2">Distance</th>
                  <th>GS</th>
                  <th colspan="2">Time</th>
                  <th colspan="2">ETE/ATE</th>
                  <th colspan="2">ETA/ATA</th>
                  <th colspan="2">Fuel</th>
                  <th colspan="3">VOR</th>
                </tr>
                <tr>
                  <th>TC</th><th>ALT</th><th>DIR</th><th>VEL</th><th>°C</th><th>kts</th><th>°</th>
                  <th>°</th><th>°</th><th>°</th><th>°</th><th>°</th><th>Leg</th><th>Rem</th>
                  <th>kts</th><th>EST</th><th>ACT</th><th>ETE</th><th>ATE</th><th>ETA</th>
                  <th>ATA</th>                  <th>Used</th><th>Rem</th><th>FREQ</th><th>RADIAL</th><th>ID</th>
                </tr>
              </thead>
              <tbody>
                ${checkpoints.map(cp => `
                  <tr>
                    <td>${cp.name}</td>
                    <td>${cp.trueCourse || ''}</td>
                    <td>${cp.altitude || ''}</td>
                    <td>${cp.windDirection || ''}</td>
                    <td>${cp.windVelocity || ''}</td>
                    <td>${cp.temperature || ''}</td>
                    <td>${cp.planTAS || ''}</td>
                    <td>${cp.windCorrection || ''}</td>
                    <td>${cp.trueHeading || ''}</td>
                    <td>${cp.variation || ''}</td>
                    <td>${cp.magHeading || ''}</td>
                    <td>${cp.deviation || ''}</td>
                    <td>${cp.compassHeading || ''}</td>
                    <td>${cp.distance || ''}</td>
                    <td>${cp.remaining || ''}</td>
                    <td>${cp.groundSpeed || ''}</td>
                    <td>${cp.est || ''}</td>
                    <td>${cp.act || ''}</td>
                    <td>${cp.ete || ''}</td>
                    <td>${cp.ate || ''}</td>
                    <td>${cp.eta || ''}</td>
                    <td>${cp.ata || ''}</td>
                    <td>${cp.fuelUsed || ''}</td>
                    <td>${cp.fuelRemaining || ''}</td>
                    <td>${cp.vorFreq || ''}</td>
                    <td>${cp.vorRadial || ''}</td>
                    <td>${cp.vorIdent || ''}</td>
                  </tr>
                `).join('')}
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="13"><strong>TOTALS</strong></td>
                  <td><strong>${totalDistance.toFixed(1)} nm</strong></td>
                  <td></td><td></td><td></td><td></td>
                  <td><strong>${totalETE.toFixed(1)} min</strong></td>
                  <td></td><td></td><td></td>
                  <td><strong>${totalFuelUsed.toFixed(1)} gal</strong></td>
                  <td></td><td></td><td></td><td></td>
                </tr>
              </tfoot>
            </table>
            
            <div class="summary">
              <h3>Flight Summary</h3>
              <div><strong>Total Distance:</strong> ${totalDistance.toFixed(1)} nm</div>
              <div><strong>Total Flight Time:</strong> ${Math.floor(totalETE / 60)}h ${(totalETE % 60).toFixed(0)}m</div>
              <div><strong>Total Fuel Required:</strong> ${totalFuelUsed.toFixed(1)} gal</div>
              <div><strong>Fuel on Board:</strong> ${flightInfo.fuelOnBoard || 'N/A'} gal</div>
              <div><strong>Fuel Reserve:</strong> ${flightInfo.fuelOnBoard ? (parseFloat(flightInfo.fuelOnBoard) - totalFuelUsed).toFixed(1) : 'N/A'} gal</div>
              <div><strong>Generated:</strong> ${new Date().toLocaleString()}</div>
            </div>
          </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleDownload = () => {
    const flightPlanData = {
      flightInfo,
      checkpoints,
      totals: { totalDistance, totalETE, totalFuelUsed },
      generatedAt: new Date().toISOString()
    };

    const dataStr = JSON.stringify(flightPlanData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    const exportFileDefaultName = `flight-plan-${flightInfo.tailNumber || 'unknown'}-${new Date().toISOString().split('T')[0]}.json`;

    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  return (
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg border-2 ${
      darkMode ? 'border-blue-400' : 'border-blue-600'
    }`}>
      {/* Header */}
      <div className={`${darkMode ? 'bg-gray-700' : 'bg-blue-50'} border-b-2 ${
        darkMode ? 'border-blue-400' : 'border-blue-600'
      } p-6`}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">FLIGHT PLAN</h2>
          <div className="flex space-x-2">
            <button 
              onClick={handlePrint}
              className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-700'
            } border border-gray-300`}>
              <Printer className="w-4 h-4" />
            </button>
            <button 
              onClick={handleDownload}
              className={`p-2 rounded-lg transition-colors ${
              darkMode 
                ? 'bg-gray-600 hover:bg-gray-500 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-700'
            } border border-gray-300`}>
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Aircraft Type</label>
            <input
              type="text"
              value={flightInfo.aircraft}
              onChange={(e) => setFlightInfo({...flightInfo, aircraft: e.target.value})}
              className={`w-full p-2 border rounded-md ${
                darkMode 
                  ? 'bg-gray-600 border-gray-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="C172, PA28, etc."
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Tail Number</label>
            <input
              type="text"
              value={flightInfo.tailNumber}
              onChange={(e) => setFlightInfo({...flightInfo, tailNumber: e.target.value})}
              className={`w-full p-2 border rounded-md ${
                darkMode 
                  ? 'bg-gray-600 border-gray-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="N12345"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Pilot in Command</label>
            <input
              type="text"
              value={flightInfo.pilot}
              onChange={(e) => setFlightInfo({...flightInfo, pilot: e.target.value})}
              className={`w-full p-2 border rounded-md ${
                darkMode 
                  ? 'bg-gray-600 border-gray-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="Pilot Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Fuel on Board (gal)</label>
            <input
              type="number"
              value={flightInfo.fuelOnBoard}
              onChange={(e) => setFlightInfo({...flightInfo, fuelOnBoard: e.target.value})}
              className={`w-full p-2 border rounded-md ${
                darkMode 
                  ? 'bg-gray-600 border-gray-500 text-white' 
                  : 'bg-white border-gray-300 text-gray-900'
              }`}
              placeholder="40"
            />
          </div>
        </div>
      </div>

      {/* Checkpoints Table */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Route Planning</h3>
          <div className="space-x-2">
            <button
              onClick={addCheckpoint}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                darkMode 
                  ? 'bg-blue-600 hover:bg-blue-500 text-white' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              <Plus className="w-4 h-4 inline mr-1" />
              Add Checkpoint
            </button>
          </div>
        </div>

        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse border border-gray-300 text-base min-w-[2800px]">
            <thead>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[100px]" rowSpan={2}>Checkpoint</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>A Planned</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>Predicted Wind</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">TEMP</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Plan<br/>TAS</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">WCA<br/>-L +R</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">True<br/>HDG</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Var<br/>-E +W</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Mag<br/>HDG</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Dev<br/>+-</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Compass<br/>HDG</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>Distance</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">GS</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>Time</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>ETE/ATE</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>ETA/ATA</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={2}>Fuel</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={3}>VOR</th>
                <th className="border border-gray-300 p-4 text-center text-base font-medium min-w-[80px]">Actions</th>
              </tr>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">TC</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ALT</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">DIR</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">VEL</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°C</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">kts</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">°</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">Leg</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">Rem</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">kts</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">EST</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ACT</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ETE</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ATE</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ETA</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ATA</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">Used</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">Rem</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">FREQ</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">RADIAL</th>
                <th className="border border-gray-300 p-3 text-center text-base min-w-[80px]">ID</th>
                <th className="border border-gray-300 p-3 text-center text-base"></th>
              </tr>
            </thead>
            <tbody>
              {checkpoints.map((checkpoint, index) => (
                <tr key={checkpoint.id} className={index % 2 === 0 ? 
                  (darkMode ? 'bg-gray-800' : 'bg-white') : 
                  (darkMode ? 'bg-gray-750' : 'bg-gray-50')
                }>
                  <td className="border border-gray-300 p-4">
                    <input
                      type="text"
                      value={checkpoint.name}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'name', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-base font-medium ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.trueCourse}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'trueCourse', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.altitude}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'altitude', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.windDirection}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'windDirection', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.windVelocity}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'windVelocity', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.temperature}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'temperature', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.planTAS}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'planTAS', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.windCorrection}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'windCorrection', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.trueHeading}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'trueHeading', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.variation}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'variation', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.magHeading}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'magHeading', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.deviation}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'deviation', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.compassHeading}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'compassHeading', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.distance}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'distance', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.remaining}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'remaining', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      value={checkpoint.groundSpeed}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'groundSpeed', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.est}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'est', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="HH:MM"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.act}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'act', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="HH:MM"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.ete}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'ete', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.ate}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'ate', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.eta}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'eta', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="HH:MM"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.ata}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'ata', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="HH:MM"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.fuelUsed}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'fuelUsed', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="number"
                      step="0.1"
                      value={checkpoint.fuelRemaining}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'fuelRemaining', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.vorFreq}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'vorFreq', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="113.00"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[120px]">
                    <input
                      type="text"
                      value={checkpoint.vorRadial}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'vorRadial', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="090"
                    />
                  </td>
                  <td className="border border-gray-300 p-4 min-w-[100px]">
                    <input
                      type="text"
                      value={checkpoint.vorIdent}
                      onChange={(e) => updateCheckpoint(checkpoint.id, 'vorIdent', e.target.value)}
                      className={`w-full p-2 border-0 bg-transparent text-center text-base ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}
                      placeholder="ABC"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {checkpoints.length > 2 && (
                      <button
                        onClick={() => removeCheckpoint(checkpoint.id)}
                        className="text-red-500 hover:text-red-700 p-1"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} font-semibold`}>
                <td className="border border-gray-300 p-4 text-center text-base font-medium" colSpan={15}>TOTALS</td>
                <td className="border border-gray-300 p-4 text-center text-base">{totalDistance.toFixed(1)} nm</td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4 text-center text-base">{Math.floor(totalETE / 60)}h {totalETE % 60}m</td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4 text-center text-base">{totalFuelUsed.toFixed(1)} gal</td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
                <td className="border border-gray-300 p-4"></td>
              </tr>
            </tfoot>
          </table>
        </div>

        {/* Summary Section */}
        <div className={`mt-6 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h4 className="font-semibold mb-4 text-lg">Flight Summary</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Total Distance:</span> {totalDistance.toFixed(1)} nm
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Total Flight Time:</span> {Math.floor(totalETE / 60)}h {(totalETE % 60).toFixed(0)}m
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Total Fuel Required:</span> {totalFuelUsed.toFixed(1)} gal
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Fuel on Board:</span> {flightInfo.fuelOnBoard || '---'} gal
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Fuel Reserve:</span> {
                flightInfo.fuelOnBoard ? 
                Math.max(0, parseFloat(flightInfo.fuelOnBoard) - totalFuelUsed).toFixed(1) : '---'
              } gal
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Reserve Time:</span> {
                flightInfo.fuelOnBoard && totalFuelUsed > 0 && totalETE > 0 ?
                Math.floor(Math.max(0, ((parseFloat(flightInfo.fuelOnBoard) - totalFuelUsed) / (totalFuelUsed / totalETE)) * 60)) : '---'
              } min
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Average Ground Speed:</span> {
                totalDistance > 0 && totalETE > 0 ? 
                (totalDistance / (totalETE / 60)).toFixed(0) : '---'
              } kts
            </div>
            <div className={`p-3 rounded ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <span className="font-medium">Fuel Burn Rate:</span> {
                totalDistance > 0 && totalFuelUsed > 0 && totalETE > 0 ?
                (totalFuelUsed / (totalDistance / (totalETE / 60))).toFixed(2) : '---'
              } gal/hr
            </div>
          </div>
        </div>

        {/* Instructions Section */}
        <div className={`mt-8 p-6 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
          <h4 className="font-semibold mb-6 text-xl text-center">Flight Planning Instructions</h4>

          <div className="space-y-6">
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-blue-800 dark:text-white">1. Getting Started - Distance & Route Planning</h5>
              <div className="space-y-2 text-sm">
                <p><strong>Using Sectional Charts:</strong> Measure distance between airports using the scale at the bottom of the chart. Use a plotter or ruler for accuracy.</p>
                <p><strong>Using ForeFlight:</strong> Enter departure and destination airports, then use the route planner to get accurate distances and suggested checkpoints.</p>
                <p><strong>Using Garmin Pilot:</strong> Create a flight plan, then use the route analysis to get precise distances and recommended waypoints.</p>
                <p><strong>Checkpoint Selection:</strong> Choose checkpoints every 20-30 minutes of flight time, preferably at VOR stations, airports, or prominent landmarks for flight following.</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-green-800 dark:text-white">2. Filling Out the Table - Step by Step</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h6 className="font-medium mb-2">Basic Information:</h6>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Enter aircraft type and tail number</li>
                    <li>Add fuel on board (from aircraft manual)</li>
                    <li>Enter pilot name</li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-medium mb-2">Route Setup:</h6>
                  <ul className="space-y-1 list-disc list-inside">
                    <li>Add checkpoints using the "+" button</li>
                    <li>Enter checkpoint names (VOR IDs, airports, etc.)</li>
                    <li>Enter leg distances from your planning tool</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-purple-800 dark:text-white">3. Navigation Calculations</h5>
              <div className="space-y-3 text-sm">
                <div>
                  <h6 className="font-medium mb-1">True Course (TC):</h6>
                  <p>From sectional chart or flight planning software - the magnetic course corrected for wind to get true course.</p>
                </div>
                <div>
                  <h6 className="font-medium mb-1">Altitude:</h6>
                  <p>Planned cruising altitude for each leg. Consider terrain, airspace, and weather.</p>
                </div>
                <div>
                  <h6 className="font-medium mb-1">Wind Information:</h6>
                  <p>From aviation weather reports (TAF/METAR) or flight planning services.</p>
                </div>
                <div>
                  <h6 className="font-medium mb-1">Plan TAS:</h6>
                  <p>True Airspeed from aircraft manual at planned altitude and temperature.</p>
                </div>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-orange-800 dark:text-white">4. Using the CX-6 Flight Computer</h5>
              <div className="space-y-2 text-sm">
                <p><strong>Wind Correction Angle (WCA):</strong> Use CX-6 to calculate wind correction from true course, wind direction/velocity, and TAS.</p>
                <p><strong>True Heading:</strong> TC + WCA = True Heading</p>
                <p><strong>Magnetic Heading:</strong> True Heading ± Variation (from sectional chart)</p>
                <p><strong>Compass Heading:</strong> Magnetic Heading ± Deviation (from aircraft compass card)</p>
                <p><strong>Ground Speed:</strong> Use CX-6 with TAS, wind velocity, and WCA</p>
                <p><strong>ETE (Estimated Time En Route):</strong> Distance ÷ Ground Speed × 60 = ETE in minutes</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-red-800 dark:text-white">5. Manual Calculations (Alternative Method)</h5>
              <div className="space-y-2 text-sm">
                <p><strong>E6-B Flight Computer Procedures</strong></p>
                <p><strong>Wind Triangle Solution:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Set True Course on outer scale</li>
                  <li>• Align wind direction arrow with wind velocity</li>
                  <li>• Read wind correction angle and ground speed</li>
                  <li>• True Heading = True Course + Wind Correction Angle</li>
                </ul>

                <p><strong>Ground Speed Formula:</strong> GS = TAS + Wind Component</p>
                <ul className="ml-4 space-y-1">
                  <li>• Headwind component = - (subtracts from TAS)</li>
                  <li>• Tailwind component = + (adds to TAS)</li>
                  <li>• Crosswind component affects heading but not speed</li>
                </ul>

                <p><strong>Time Calculations:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• ETE = Distance ÷ Ground Speed × 60 (minutes)</li>
                  <li>• ETA = Departure Time + ETE</li>
                  <li>• Always convert to consistent units (NM, knots, minutes)</li>
                </ul>

                <p><strong>Fuel Calculations:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• Fuel Burn Rate from POH (gallons per hour)</li>
                  <li>• Trip Fuel = Burn Rate × (ETE ÷ 60)</li>
                  <li>• Reserve Fuel = 45 minutes (VFR) or 45 minutes (IFR)</li>
                  <li>• Total Fuel Required = Trip Fuel + Reserve + Taxi Fuel</li>
                </ul>

                <p><strong>E6-B Computer Scale Usage:</strong></p>
                <ul className="ml-4 space-y-1">
                  <li>• A Scale (Minutes): Time/speed/distance conversions, Fuel consumption calculations</li>
                  <li>• B Scale (Hours): Long-range flight planning, Endurance calculations</li>
                  <li>• C Scale (Wind): Wind triangle solutions, Ground speed calculations</li>
                  <li>• D Scale (Rate): Climb/descent rates, Fuel flow rates</li>
                </ul>

                <p><strong>Cross-Check Digital vs Manual:</strong> Always verify digital calculations with manual E6-B results. If they differ by more than 5%, investigate the discrepancy before flight.</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-teal-800 dark:text-white">6. VOR Navigation Setup</h5>
              <div className="space-y-2 text-sm">
                <p><strong>VOR Frequency:</strong> From sectional chart or airport/facility directory</p>
                <p><strong>VOR Radial:</strong> The radial FROM the VOR station to your position</p>
                <p><strong>VOR Identifier:</strong> 3-letter code for the VOR station (e.g., LAX, PSP)</p>
                <p><strong>Usage:</strong> Set up VOR navigation for flight following and position reporting</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-indigo-800 dark:text-white">7. In-Flight Updates</h5>
              <div className="space-y-2 text-sm">
                <p><strong>Actual Times:</strong> Update ACT, ATA, and ATE columns during flight</p>
                <p><strong>Fuel Remaining:</strong> Track actual fuel burn vs. planned</p>
                <p><strong>Position Reports:</strong> Use checkpoints for ATC position reports</p>
                <p><strong>Weather Updates:</strong> Adjust calculations if wind or weather changes</p>
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-white'}`}>
              <h5 className="font-semibold mb-3 text-lg text-gray-800 dark:text-white">8. Safety Considerations</h5>
              <div className="space-y-2 text-sm">
                <p><strong>Fuel Reserves:</strong> Always plan for VFR Day (45 min), VFR Night (45 min), or IFR (45 min) reserves</p>
                <p><strong>Alternate Airports:</strong> Plan for weather contingencies</p>
                <p><strong>Checkpoint Spacing:</strong> Ensure checkpoints are within gliding distance in emergency</p>
                <p><strong>Cross-Check Calculations:</strong> Verify all calculations using multiple methods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightPlanForm;