import { X, Download, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";

interface PDFViewerModalProps {
    isOpen: boolean;
    onClose: () => void;
    fileData: string;
    fileMimeType: string;
    fileName: string;
    darkMode: boolean;
}

export function PDFViewerModal({
    isOpen,
    onClose,
    fileData,
    fileMimeType,
    fileName,
    darkMode
}: PDFViewerModalProps) {
    const [blobUrl, setBlobUrl] = useState<string>("");

    useEffect(() => {
        if (isOpen && fileData) {
            try {
                const base64Data = fileData.trim();
                const byteCharacters = atob(base64Data);
                const byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                const byteArray = new Uint8Array(byteNumbers);
                const blob = new Blob([byteArray], { type: fileMimeType });
                const url = URL.createObjectURL(blob);
                setBlobUrl(url);

                return () => URL.revokeObjectURL(url);
            } catch (error) {
                console.error('Error creating blob URL:', error);
            }
        }
    }, [isOpen, fileData, fileMimeType]);

    if (!isOpen) return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = blobUrl;
        link.download = fileName;
        link.click();
    };

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <div 
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
                onClick={onClose} 
            />

            {/* Modal Container */}
            <div className={`relative w-full h-full max-w-6xl flex flex-col rounded-2xl overflow-hidden shadow-2xl transition-all ${
                darkMode ? 'bg-gray-900 border border-gray-700' : 'bg-white'
            }`}>
                
                {/* Header */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${
                    darkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-100 bg-gray-50/50'
                }`}>
                    <div className="flex items-center gap-3 overflow-hidden">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                            <Maximize2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h3 className={`text-lg font-medium truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                            {fileName}
                        </h3>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={handleDownload}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                                darkMode 
                                ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' 
                                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200'
                            }`}
                        >
                            <Download className="w-4 h-4" />
                            <span className="hidden sm:inline">Download</span>
                        </button>
                        
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg transition-colors ${
                                darkMode ? 'hover:bg-gray-800 text-gray-400' : 'hover:bg-gray-200 text-gray-500'
                            }`}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* PDF Viewer Body */}
                <div className="flex-1 bg-gray-100 dark:bg-gray-800 relative">
                    {blobUrl ? (
                        <iframe
                            src={`${blobUrl}#toolbar=1&navpanes=0`}
                            className="w-full h-full"
                            title="PDF Viewer"
                        />
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
                            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>Preparing document...</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}