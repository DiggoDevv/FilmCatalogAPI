import { IsString, IsNotEmpty, IsOptional, IsEnum, Min, Max, IsNumberString, MaxLength, validateOrReject } from "class-validator";
import { EnumClassification } from './film.catalog.entity';

export class FilmCatalogDomain {
    @IsOptional()
    @IsString({ message: 'ID deve ser uma string válida' })
    readonly id?: string;

    @IsNotEmpty({ message: 'O título é obrigatório' })
    @IsString({ message: 'O título deve ser uma string válida' })
    @MaxLength(255, { message: 'O título deve ter no máximo 255 caracteres' })
    readonly titulo: string;

    @IsOptional()
    @IsString({ message: 'O diretor deve ser uma string válida' })
    @MaxLength(100, { message: 'O diretor deve ter no máximo 100 caracteres' })
    readonly diretor?: string;

    @IsOptional()
    @IsString({ message: 'O gênero deve ser uma string válida' })
    @MaxLength(50, { message: 'O gênero deve ter no máximo 50 caracteres' })
    readonly genero?: string;

    @IsOptional()
    @IsString({ message: 'A sinopse deve ser uma string válida' })
    readonly sinopse?: string;

    @IsOptional()
    @IsString({ message: 'O ano de lançamento deve ser uma string válida' })
    @MaxLength(4, { message: 'O ano de lançamento deve ter no máximo 4 caracteres' })
    readonly ano_lancamento?: string;

    @IsOptional()
    @IsString({ message: 'A duração deve ser uma string válida' })
    @MaxLength(8, { message: 'A duração deve ter no máximo 8 caracteres' })
    readonly duracao?: string;

    @IsOptional()
    @IsEnum(EnumClassification, { message: 'A classificação deve ser uma das opções válidas' })
    readonly classificacao?: EnumClassification;
}
