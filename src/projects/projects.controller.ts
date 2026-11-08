import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateProjectsDto } from "../dto/CreateProjectsDto.js";
import { ProjectsService } from "./projects.service.js";

@Controller("projects")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) { }

  @Get()
  getAll() {
    return this.projectsService.getAll();
  }

  @Get(':id')
  getById(@Param('id', ) id: string) {
    return this.projectsService.getById(id)
  }

  @Post()
  create(@Body() dto: CreateProjectsDto) {
    return this.projectsService.create(dto);
  }
}
