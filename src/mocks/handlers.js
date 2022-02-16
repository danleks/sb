// src/mocks/handlers.js
import { rest } from 'msw';

import { groups } from './data/groups';
import { students } from './data/students';

export const handlers = [
    rest.get('/students/search/:id', (req, res, ctx) => {
        const matchingStudents = students.filter((student) => student.name.toLowerCase().includes(req.params.id.toLowerCase()));
        return res(
            ctx.status(200),
            ctx.json({
                students: matchingStudents,
            }),
        );
    }),
    rest.get('/students/:id', (req, res, ctx) => {
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
