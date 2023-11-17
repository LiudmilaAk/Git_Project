module.exports = {
    bail: 0,
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    reporters: [
      'default',
      'jest-junit',
      [
        'jest-html-reporters',
        {
          pageTitle: 'Calculator Test Report',
          publicPath: './reports',
          filename: 'test-report.html',
          enableMergeData: true,
          dataMergeLevel: 3,
        },
      ],
    ],
  };
  