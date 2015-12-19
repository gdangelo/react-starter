import run from './run';
import clean from './clean';
import bundle from './bundle';

async function build() {
  await run(clean);
  await run(bundle);
};

export default build;
