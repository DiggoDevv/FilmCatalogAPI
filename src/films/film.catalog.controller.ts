import { Controller, Res, Get, Body, Post} from '@nestjs/common';
import { FilmCatalogService } from './film.catalog.service';
import { Response } from 'express';
import { FilmCatalogDomain } from './film.catalog.domain';

@Controller('film')
export class FilmController {
    constructor(
        private readonly filmCatalogService: FilmCatalogService
    ) { }

    @Get()
    async findAllFilmCatalog(@Res() response: Response){
        const filmCatalog = await this.filmCatalogService.findAllFilmCatalog();
        return response.status(200).json(filmCatalog);   
    }

    @Post()
    async createFilmCatalog(@Res() response: Response, @Body() filmCatalog: FilmCatalogDomain){
        const filmCatalogCreated = await this.filmCatalogService.createFilmCatalog(filmCatalog);
        return response.status(201).json(filmCatalogCreated);   
    }
}
