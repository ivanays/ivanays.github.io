export const funcDelay = (ms) => {
    const delay = ms => new Promise(
        resolve => setTimeout(resolve, ms)
    );
}