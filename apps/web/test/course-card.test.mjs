import test from 'node:test';
import assert from 'node:assert/strict';
test('course cards expose required learning metadata',()=>{const course={title:'AI for Public Health',university:'IIT Madras',level:'Intermediate',rating:4.9,hours:42};assert.equal(Object.keys(course).length,5);assert.ok(course.rating>=0&&course.rating<=5);});
