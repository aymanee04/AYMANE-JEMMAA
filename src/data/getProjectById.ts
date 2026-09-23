import {projectsData} from "@/data/projectsData";

export function getProjectById(id: string) {
    return projectsData.find((project) => project.id === id);
}