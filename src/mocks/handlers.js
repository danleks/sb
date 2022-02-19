// src/mocks/handlers.js
import { rest } from 'msw';

import { groups } from './data/groups';
import { students } from './data/students';

export const handlers = [
    rest.post('/students/search', (req, res, ctx) => {
        const matchingStudents = req.body.phrase
            ? students.filter((student) => student.name.toLowerCase().includes(req.body.phrase.toLowerCase()))
            : [];
        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            }),
        );
    }),
    rest.get('/students/:id', (req, res, ctx) => {
        console.log(req.params.id);
        if (req.params.id) {
            const matchingStudents = students.filter((student) => student.group === req.params.id);
            return res(
                ctx.status(200),
                ctx.json({
                    students: matchingStudents,
                }),
            );
        }
        return res(
            ctx.status(200),
            ctx.json({
                students,
            }),
        );
    }),
    rest.get('/groups', (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                groups,
            }),
        );
    }),
];
