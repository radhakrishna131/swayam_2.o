import test from 'node:test';
import assert from 'node:assert/strict';
function buildSearchFilters(input){return {query:input.query?.trim()||'*',filters:Object.entries(input).filter(([key,value])=>key!=='query'&&value!==undefined).map(([key,value])=>`${key} = ${JSON.stringify(value)}`)}}
test('builds meilisearch-compatible course filters',()=>{assert.deepEqual(buildSearchFilters({query:' data ',language:'Hindi',certificate:true}),{query:'data',filters:['language = "Hindi"','certificate = true']});});
