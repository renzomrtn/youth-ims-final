import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CertificateGeneratorProps {
  darkMode: boolean;
  selectedProject: number | null;
  projects: Array<{
    id: number;
    title: string;
    lineItemId: string;
    lineItemArea: string;
  }>;
  onProjectChange: (projectId: number | null) => void;
}

interface NameFieldPosition {
  x: number;
  y: number;
  width: number;
}

const fontColors = [
  "#000000",
  "#FFFFFF",
  "#155dfc",
  "#FFFF00",
  "#00d9ff",
  "#FF0000",
  "#2aff00",
  "#FF00EE",
  "#00c950",
  "#b107ff"
];

const fontStyles = [
  "Arial",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Verdana",
  "Comic Sans MS",
  "Impact",
  "Palatino"
];

export function CertificateGenerator({
  darkMode,
  selectedProject,
  projects,
  onProjectChange,
}: CertificateGeneratorProps) {
  const [csvFile, setCsvFile] = useState<File | null>(null);
  const [templateFile, setTemplateFile] = useState<File | null>(null);
  const [templatePreview, setTemplatePreview] = useState<string | null>(null);
  const [namePosition, setNamePosition] = useState<NameFieldPosition>({
    x: 213.5,
    y: 263,
    width: 500
  });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [isResizing, setIsResizing] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#000000");
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [showFontPicker, setShowFontPicker] = useState(false);
  const [hexInput, setHexInput] = useState("#000000");
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [parsedNames, setParsedNames] = useState<string[]>([]);

  const certificateRef = useRef<HTMLDivElement>(null);

  // Get the line item ID for the selected project
  const selectedProjectData = projects.find(p => p.id === selectedProject);
  const lineItemId = selectedProjectData?.lineItemId || '';

  const handleCSVUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCsvFile(file);
      // Parse CSV file
      const reader = new FileReader();
      reader.onload = (event) => {
        const text = event.target?.result as string;
        const lines = text.split('\n');
        const names: string[] = [];
        
        // Skip header row and parse names
        for (let i = 1; i < lines.length; i++) {
          const columns = lines[i].split(',');
          if (columns.length >= 2) {
            const firstName = columns[0]?.trim();
            const lastName = columns[1]?.trim();
            const middleName = columns[2]?.trim() || '';
            
            if (firstName && lastName) {
              const fullName = middleName 
                ? `${firstName} ${middleName} ${lastName}`
                : `${firstName} ${lastName}`;
              names.push(fullName);
            }
          }
        }
        setParsedNames(names);
        setCurrentNameIndex(0);
      };
      reader.readAsText(file);
    }
  };

  const handleTemplateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setTemplateFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setTemplatePreview(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleMouseDownOnName = (e: React.MouseEvent) => {
    if (isResizing) return;
    setIsDragging(true);
    if (certificateRef.current) {
      const rect = certificateRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left - namePosition.x,
        y: e.clientY - rect.top - namePosition.y
      });
    }
  };

  const handleMouseDownOnResize = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging && certificateRef.current) {
      const rect = certificateRef.current.getBoundingClientRect();
      const newX = e.clientX - rect.left - dragOffset.x;
      const newY = e.clientY - rect.top - dragOffset.y;
      
      setNamePosition(prev => ({
        ...prev,
        x: Math.max(0, Math.min(newX, rect.width - prev.width)),
        y: Math.max(0, Math.min(newY, rect.height - 50))
      }));
    } else if (isResizing && certificateRef.current) {
      const rect = certificateRef.current.getBoundingClientRect();
      const newWidth = e.clientX - rect.left - namePosition.x;
      
      setNamePosition(prev => ({
        ...prev,
        width: Math.max(100, Math.min(newWidth, rect.width - prev.x))
      }));
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  // Add/remove mouse event listeners
  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, isResizing]);

  const handlePrevious = () => {
    if (currentNameIndex > 0) {
      setCurrentNameIndex(currentNameIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentNameIndex < parsedNames.length - 1) {
      setCurrentNameIndex(currentNameIndex + 1);
    }
  };

  const showPreview = csvFile && templateFile && templatePreview;

  const currentName = parsedNames[currentNameIndex] || "{{ Name }}";

  return (
    <div>
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-black dark:text-white mb-2">Certificate Generator</h2>
        <p className="text-gray-600 dark:text-gray-400">
          Upload your CSV data and certificate template, then position and resize the name field
        </p>
      </div>

      {/* Project and Upload Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex gap-6 items-start">
          {/* Left Column - Project Selection */}
          <div className="flex flex-col gap-3 w-[220px]">
            <div>
              <label className="text-black dark:text-white block mb-1">Project</label>
              <select
                value={selectedProject || ""}
                onChange={(e) => onProjectChange(e.target.value ? Number(e.target.value) : null)}
                className="w-full h-[38px] px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white"
              >
                <option value="">Select a project</option>
                {projects.map((project) => (
                  <option key={project.id} value={project.id}>
                    {project.title}
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="text-gray-600 dark:text-gray-400 text-sm block mb-1">Line Item ID:</label>
              <div className="w-full h-[38px] px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center">
                <span className="text-black dark:text-white">{lineItemId || '-'}</span>
              </div>
            </div>

            <button
              disabled={!showPreview}
              className={`w-full px-4 py-2 rounded-lg mt-2 ${
                showPreview
                  ? "bg-[#3b5998] hover:bg-[#2d4373] text-white"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-600 cursor-not-allowed"
              }`}
            >
              Generate
            </button>

            <div className="flex gap-2 mt-2">
              <button
                onClick={handlePrevious}
                disabled={!showPreview || currentNameIndex === 0}
                className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border ${
                  showPreview && currentNameIndex > 0
                    ? "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm">Previous</span>
              </button>
              <button
                onClick={handleNext}
                disabled={!showPreview || currentNameIndex >= parsedNames.length - 1}
                className={`flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg border ${
                  showPreview && currentNameIndex < parsedNames.length - 1
                    ? "bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                    : "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-400 dark:text-gray-600 cursor-not-allowed"
                }`}
              >
                <span className="text-sm">Next</span>
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Middle Column - Upload Sections */}
          <div className="flex gap-5">
            {/* CSV Upload */}
            <div className="w-[240px] h-[160px] bg-gray-50 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center">
              <svg className="w-5 h-5 text-gray-400 mb-2" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1667 6.66667L10 2.5L5.83333 6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-black dark:text-white mb-1 text-center text-sm">Click to upload CSV</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-2 text-center">
                First Name, Last Name, Middle Name
              </p>
              <input
                type="file"
                accept=".csv"
                onChange={handleCSVUpload}
                disabled={!selectedProject}
                className="hidden"
                id="csv-upload"
              />
              <label
                htmlFor="csv-upload"
                className={`text-xs px-3 py-1.5 rounded-lg cursor-pointer ${
                  selectedProject
                    ? "bg-white dark:bg-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
                    : "bg-gray-300 dark:bg-gray-800 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                }`}
              >
                {csvFile ? csvFile.name.substring(0, 20) + (csvFile.name.length > 20 ? '...' : '') : "Choose File"}
              </label>
            </div>

            {/* Template Upload */}
            <div className="w-[240px] h-[160px] bg-gray-50 dark:bg-gray-700 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 flex flex-col items-center justify-center">
              <svg className="w-5 h-5 text-gray-400 mb-2" viewBox="0 0 20 20" fill="none">
                <path d="M10 2.5V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14.1667 6.66667L10 2.5L5.83333 6.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-black dark:text-white mb-1 text-center text-sm">Click to upload template</p>
              <p className="text-gray-500 dark:text-gray-400 text-xs mb-2 text-center">PNG, JPG (max 10MB)</p>
              <input
                type="file"
                accept="image/*"
                onChange={handleTemplateUpload}
                disabled={!selectedProject}
                className="hidden"
                id="template-upload"
              />
              <label
                htmlFor="template-upload"
                className={`text-xs px-3 py-1.5 rounded-lg cursor-pointer ${
                  selectedProject
                    ? "bg-white dark:bg-gray-600 text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-500"
                    : "bg-gray-300 dark:bg-gray-800 text-gray-500 dark:text-gray-600 cursor-not-allowed"
                }`}
              >
                {templateFile ? templateFile.name.substring(0, 20) + (templateFile.name.length > 20 ? '...' : '') : "Choose File"}
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Preview Section */}
      {showPreview && (
        <div className="p-6">
          <div className="flex gap-36 items-start w-full">
            {/* Controls */}
            <div className="flex flex-col gap-8 shrink-0">
              {/* Color Picker */}
              <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-2.5 w-[280px]">
                <p className="text-center text-black dark:text-white text-sm mb-2.5">Change Font Color</p>
                <div className="flex gap-0 border border-gray-400 dark:border-gray-500">
                  {fontColors.map((color) => (
                    <button
                      key={color}
                      onClick={() => {
                        setSelectedColor(color);
                        setHexInput(color);
                      }}
                      className="w-6 h-6 shrink-0 hover:opacity-80 transition-opacity"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                  <button
                    onClick={() => setShowColorPicker(!showColorPicker)}
                    className="w-6 h-6 shrink-0 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 hover:opacity-80 transition-opacity"
                    title="Custom Color"
                  />
                </div>
                <input
                  type="text"
                  value={hexInput}
                  onChange={(e) => {
                    setHexInput(e.target.value);
                    if (/^#[0-9A-F]{6}$/i.test(e.target.value)) {
                      setSelectedColor(e.target.value);
                    }
                  }}
                  placeholder="# Input Color HEX"
                  className="w-full mt-2.5 px-2.5 py-1 text-sm border border-gray-400 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white text-center"
                />
              </div>

              {/* Font Style Picker */}
              <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl p-2.5 w-[280px]">
                <p className="text-center text-black dark:text-white text-sm mb-2.5">Change Font Style</p>
                <div className="relative">
                  <button
                    onClick={() => setShowFontPicker(!showFontPicker)}
                    className="w-full px-2.5 py-1 text-sm border border-gray-400 dark:border-gray-500 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white flex items-center justify-between"
                  >
                    <span>{selectedFont}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {showFontPicker && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white dark:bg-gray-700 border border-gray-400 dark:border-gray-500 rounded-lg shadow-lg z-10 max-h-48 overflow-auto">
                      {fontStyles.map((font) => (
                        <button
                          key={font}
                          onClick={() => {
                            setSelectedFont(font);
                            setShowFontPicker(false);
                          }}
                          className="w-full px-2.5 py-2 text-left text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-black dark:text-white"
                          style={{ fontFamily: font }}
                        >
                          {font}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Certificate Preview */}
            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-2xl p-2.5">
              <div
                ref={certificateRef}
                className="relative w-[939px] h-[664px] mx-auto"
                style={{
                  backgroundImage: `url(${templatePreview})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {/* Draggable Name Field */}
                <div
                  onMouseDown={handleMouseDownOnName}
                  style={{
                    position: 'absolute',
                    left: `${namePosition.x}px`,
                    top: `${namePosition.y}px`,
                    width: `${namePosition.width}px`,
                    cursor: isDragging ? 'grabbing' : 'grab',
                    padding: '10px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '2px dashed rgba(0, 0, 0, 0.3)',
                    userSelect: 'none'
                  }}
                >
                  <p
                    style={{
                      fontFamily: selectedFont,
                      color: selectedColor,
                      fontSize: '40px',
                      textAlign: 'center',
                      margin: 0,
                      lineHeight: '1'
                    }}
                  >
                    {currentName}
                  </p>
                  
                  {/* Resize Handle */}
                  <div
                    onMouseDown={handleMouseDownOnResize}
                    style={{
                      position: 'absolute',
                      right: '-5px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '10px',
                      height: '40px',
                      backgroundColor: '#174499',
                      cursor: 'ew-resize',
                      borderRadius: '2px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Instructions - only show if no preview */}
      {!showPreview && (
        <div className="p-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
            <h3 className="text-black dark:text-white mb-4">How to Use:</h3>
            <ol className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>1. Select a project from the dropdown</li>
              <li>2. Upload a CSV file with columns: First Name, Last Name, Middle Name (optional)</li>
              <li>3. Upload your certificate template image (PNG or JPG)</li>
              <li>4. Drag the name field to position it on the template</li>
              <li>5. Drag the right edge of the field to resize it</li>
              <li>6. Use the color picker to change the text color</li>
              <li>7. Select a font style from the dropdown</li>
              <li>8. Click "Previous" or "Next" to preview different names</li>
              <li>9. Click "Generate" to create certificates for all names</li>
            </ol>
          </div>
        </div>
      )}
    </div>
  );
}