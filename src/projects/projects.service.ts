import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProjectsDto } from "../dto/CreateProjectsDto.js";
import { UpdateProjectDto } from '../dto/UpdateProjectsDto.js';
import { Project } from "../types/projects.types.js";

@Injectable()
export class ProjectsService {
  private readonly projects: Project[] = [];

  getAll(): Project[] {
    return this.projects;
  }

  getById(id: string): Project {
    const result = this.projects.find((project) => project.id === id);
    if (!result) {
      throw new NotFoundException(`Project with ID: ${id} not found`);
    }
    return result;
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
  update(id: string, dto: UpdateProjectDto): Project {
    const project = this.getById(id);

    return Object.assign(project, dto);
  }

  delete(id: string) {
    const index = this.projects.findIndex((project) => project.id === id);

    if (index === -1) {
      throw new NotFoundException(`Project with ID: ${id} not found`);
    }

    this.projects.splice(index, 1);
  }
}
