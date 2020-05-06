"use strict";

module.exports = {
    plugins: [
        {
            name: "typescript",
            options: {
                useBabel: true,
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
