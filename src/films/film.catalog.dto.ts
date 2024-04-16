import { EnumClassification } from './film.catalog.entity';
export class FilmsCatalogDTO {
    readonly id?: string;
    readonly name: string;
    readonly titulo: string;
    readonly genero: string;
    readonly sinopse: string;
    readonly ano_lancamento: string;
    readonly duracao: string;
    readonly classificacao?: EnumClassification;
    readonly avaliacao: number;
}