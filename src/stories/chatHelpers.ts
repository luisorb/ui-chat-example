import { AxeResults } from 'axe-core';

export const runA11yCheck = async (element: HTMLElement): Promise<AxeResults> => {
  const { default: axe } = await import('axe-core');
  return new Promise((resolve) => {
    axe.run(element, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
      }
    }, (err, results) => {
      if (err) throw err;
      resolve(results);
    });
  });
};

export const checkA11yViolations = (results: AxeResults) => {
  const violations = results.violations;
  if (violations.length > 0) {
    violations.forEach(violation => {
      console.error(
        `[A11y] ${violation.help} (${violation.id})`,
        violation.nodes.map(node => node.html)
      );
    });
    throw new Error(`${violations.length} accessibility violations found`);
  }
};