import { faker } from '@faker-js/faker';
import { Tour } from "./interface";

export const tour = {
    name: createRandomTour().name.trim(),
    duration: createRandomTour().duration,
    maxGroupSize: createRandomTour().maxGroupSize,
    difficulty: createRandomTour().difficulty,
    price: createRandomTour().price,
    summary: createRandomTour().summary.trim(),
    description: createRandomTour().description,
    imageCover: createRandomTour().imageCover,
    images: createRandomTour().images,
    startLocation: {
        type: 'Point',
        coordinates: createRandomTour().startLocation
    }
}

export function createRandomTour(): Tour {
    const arr = ['easy', 'medium', 'difficult'];
    const randomElement = arr[Math.floor(Math.random() * arr.length)];

    return {
        name: faker.lorem.sentence(2),
        duration: faker.number.int({min: 1, max: 14}),
        maxGroupSize: faker.number.int({ min: 1, max: 15}),
        difficulty: randomElement,
        ratingsAverage: faker.number.int({min: 1, max: 10}),
        ratingsQuntity: faker.number.int({min: 1, max: 10}),
        price: faker.number.int({min: 50, max: 1000}),
        summary: faker.lorem.sentence(10),
        description: faker.lorem.sentence ({min: 5, max: 15}),
        imageCover: faker.lorem.sentence ({min: 5, max: 15}),
        createdAT: faker.date.recent({days: 5}),
        startDates: faker.date.soon({days: 7}),
        startLocation: faker.location.nearbyGPSCoordinate()
    }
}

