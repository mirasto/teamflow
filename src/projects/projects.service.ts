import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProjectsDto } from "../dto/CreateProjectsDto.js";
import { Project } from "../types/projects.types.js";

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [];

  getAll() {
    return this.projects;
  }

  getById(id:string) {
    const result = this.projects.find(project => project.id === id)
    if (!result) {
      throw new NotFoundException(`Project with ID: ${id} not found`)
    }
    return result
  }

  create(dto: CreateProjectsDto) {
    const project: Project = {
      id: crypto.randomUUID(),
      name: dto.name,
      description: dto.description,
    };
    this.projects.push(project);
    return project;
  }
}
