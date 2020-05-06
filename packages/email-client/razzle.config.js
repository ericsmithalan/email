"use strict";

const path = require("path");

module.exports = {
    plugins: [
        {
            name: "typescript",
            options: {
                useBabel: false,
                useEslint: false,
                forkTsChecker: {
                    tsconfig: "./tsconfig.build.json",
                    tslint: false,
                    watch: "./src",
                    typeCheck: true,
                },
            },
        },
    ],
};
