export default function two_crystal_balls(breaks: boolean[]): number {
    // Calc sqrt of N
    const jmpAmount = Math.floor(Math.sqrt(breaks.length));

    // Start at sqrt of N
    let i = jmpAmount;

    // Keep jumping until we find true OR we run out of things to check
    for (; i < breaks.length; i += jmpAmount){
        if (breaks[i]) {
            break;
        }
    }

    // Jump back to last check pos
    i -= jmpAmount;

    // Walk the array looking for our first true value
    for (let j = 0; j < jmpAmount && i < breaks.length; ++j, ++i){
        if (breaks[i]){
            return i;
        }
    }

    // Not found fallback
    return -1;
}
