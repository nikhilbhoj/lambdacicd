#!/usr/bin/env node

import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { LambdaStack } from '../lib/lambda-stack';
import { PipelineStack } from '../lib/pipeline-stack';

const app = new cdk.App();

const lambdaStack = new LambdaStack(app, 'LambdaStack');

new PipelineStack(app, 'PipelineDeployingLambdaStack', {
  lambdaCode: lambdaStack.lambdaCode,
});

app.synth();
