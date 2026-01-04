import { ChevronDown, Edit } from "lucide-react";

interface Project {
    id: number;
    proponent: string;
    title: string;
    lineItemId: string;
    lineItemArea: string;
    budget: string;
    spent: string;
    startDate: string;
    dueDate: string;
    accomplished: string;
    progress: number;
    status: "Completed" | "In Progress" | "Pending";
    expenseStatus: "Verified" | "Pending" | "Rejected";
    committees: any[];
}

interface ProjectsByYearContentProps {
    darkMode: boolean;
    projects: Project[];
    expandedYears: number[];
    onToggleYear: (year: number) => void;
}

export function ProjectsByYearContent({
    darkMode,
    projects,
    expandedYears,
    onToggleYear
}: ProjectsByYearContentProps) {
    const projects2025 = projects;
    const projects2024: Project[] = [];
    const projects2023: Project[] = [];
    const projects2022: Project[] = [];

    return (
        <section className="p-8" aria-labelledby="projects-by-year-heading">
            <header className="flex items-center justify-between mb-6">
                <h2 id="projects-by-year-heading" className="text-black dark:text-white">Projects by Year</h2>
                <input
                    type="search"
                    placeholder="Search projects..."
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-black dark:text-white placeholder:text-gray-400"
                    aria-label="Search projects"
                />
            </header>

            {/* Projects for 2025 */}
            <article className="mb-6">
                <button
                    onClick={() => toggleYear(2025)}
                    className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-expanded={expandedYears.includes(2025)}
                    aria-controls="projects-2025"
                >
                    <h3 className="text-black dark:text-white">Projects for 2025</h3>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2025) ? "rotate-180" : ""
                            }`}
                        aria-hidden="true"
                    />
                </button>
                {expandedYears.includes(2025) && (
                    <div id="projects-2025" className="overflow-x-auto">
                        <table className="w-full" aria-label="2025 Projects">
                            <thead className="bg-gray-50 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Proponent</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Project Title</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Line Item Information</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Budgeting Information</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Date Information</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Progress & Status</th>
                                    <th scope="col" className="px-6 py-3 text-left text-gray-600 dark:text-gray-300">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {projects2025.map((project) => (
                                    <tr
                                        key={project.id}
                                        className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
                                    >
                                        <td className="px-6 py-4 text-black dark:text-white">{project.proponent}</td>
                                        <td className="px-6 py-4 text-black dark:text-white">{project.title}</td>
                                        <td className="px-6 py-4">
                                            <p className="text-black dark:text-white">{project.lineItemId}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">{project.lineItemArea}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-black dark:text-white">Budget: {project.budget}</p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">Spent: {project.spent}</p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <p className="text-black dark:text-white text-sm">Started: <time>{project.startDate}</time></p>
                                            <p className="text-black dark:text-white text-sm">Due Date: <time>{project.dueDate}</time></p>
                                            <p className="text-gray-600 dark:text-gray-400 text-sm">Accomplished: <time>{project.accomplished}</time></p>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-sm border-2 flex items-center gap-1.5 w-fit ${project.status === "Completed"
                                                ? "bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-600 dark:border-green-400"
                                                : "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400"
                                                }`} role="status" aria-label={`Status: ${project.status}`}>
                                                <span className={`w-1.5 h-1.5 rounded-full ${project.status === "Completed" ? "bg-green-600 dark:bg-green-400" : "bg-orange-600 dark:bg-orange-400"
                                                    }`} aria-hidden="true" />
                                                {project.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded" aria-label={`Edit ${project.title}`}>
                                                <Edit className="w-4 h-4 text-gray-600 dark:text-gray-400" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </article>

            {/* Projects for 2024 */}
            <article className="mb-6">
                <button
                    onClick={() => toggleYear(2024)}
                    className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-expanded={expandedYears.includes(2024)}
                    aria-controls="projects-2024"
                >
                    <h3 className="text-black dark:text-white">Projects for 2024</h3>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2024) ? "rotate-180" : ""
                            }`}
                        aria-hidden="true"
                    />
                </button>
                {expandedYears.includes(2024) && (
                    <p id="projects-2024" className="p-4 text-gray-600 dark:text-gray-400">
                        No projects for this year
                    </p>
                )}
            </article>

            {/* Projects for 2023 */}
            <article className="mb-6">
                <button
                    onClick={() => toggleYear(2023)}
                    className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-expanded={expandedYears.includes(2023)}
                    aria-controls="projects-2023"
                >
                    <h3 className="text-black dark:text-white">Projects for 2023</h3>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2022) ? "rotate-180" : ""
                            }`}
                        aria-hidden="true"
                    />
                </button>
                {expandedYears.includes(2023) && (
                    <p id="projects-2023" className="p-4 text-gray-600 dark:text-gray-400">
                        No projects for this year
                    </p>
                )}
            </article>

            {/* Projects for 2022 */}
            <article className="mb-6">
                <button
                    onClick={() => toggleYear(2022)}
                    className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700 p-4 rounded-lg mb-2 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                    aria-expanded={expandedYears.includes(2022)}
                    aria-controls="projects-2022"
                >
                    <h3 className="text-black dark:text-white">Projects for 2022</h3>
                    <ChevronDown
                        className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${expandedYears.includes(2022) ? "rotate-180" : ""
                            }`}
                        aria-hidden="true"
                    />
                </button>
                {expandedYears.includes(2022) && (
                    <p id="projects-2022" className="p-4 text-gray-600 dark:text-gray-400">
                        No projects for this year
                    </p>
                )}
            </article>

            {/* Pagination */}
            <nav className="flex items-center justify-center gap-2 p-6" aria-label="Pagination">
                <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" aria-label="Go to previous page">
                    Previous
                </button>
                <button className="px-4 py-2 bg-[#174499] text-white rounded" aria-current="page" aria-label="Page 1, current page">
                    1
                </button>
                <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded" aria-label="Go to next page">
                    Next
                </button>
            </nav>
        </section>
    );
}