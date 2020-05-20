class Logger {
    log = (...args: any[]) => {
        console.log(args);
    };

    warn = (...args: any[]) => {
        console.warn(args);
    };

    error = (...args: any[]) => {
        console.error(args);
    };

    throwError = (message: string) => {
        new Error(message);
    };
}

const Log = new Logger();

export { Log };
