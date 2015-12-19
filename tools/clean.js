import del from 'del';
import fs from 'fs';

/**
 * Cleans up the output (build) directory.
 */
async function clean() {
  await del(['build/*'], { dot: true });
};

export default clean;
