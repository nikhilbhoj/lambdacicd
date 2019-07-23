#!/usr/bin/env node
import 'source-map-support/register';
import cdk = require('@aws-cdk/core');
import { LambdapipelineStack } from '../lib/lambdapipeline-stack';

const app = new cdk.App();
new LambdapipelineStack(app, 'LambdapipelineStack');
