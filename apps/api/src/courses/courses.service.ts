import { Injectable } from '@nestjs/common';
export type CourseSearch={query?:string;category?:string;language?:string;certificate?:boolean;difficulty?:'BEGINNER'|'INTERMEDIATE'|'ADVANCED'};
@Injectable()
export class CoursesService {buildSearchFilters(input:CourseSearch){return {query:input.query?.trim()||'*',filters:Object.entries(input).filter(([key,value])=>key!=='query'&&value!==undefined).map(([key,value])=>`${key} = ${JSON.stringify(value)}`)}}}
