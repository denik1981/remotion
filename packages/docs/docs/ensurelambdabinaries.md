---
id: ensurelambdabinaries
title: ensureLambdaBinaries()
---

Ensures that a [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) with the necessary binaries exists.

The Remotion lambda layer contains the binaries for FFMPEG and Chromium and is necessary for Remotion Lambda to work.

The binaries are downloaded from a Remotion-hosted S3 bucket and copied into your AWS account.

The binaries are hosted at the following URL:

```
https://lambda-remotion-binaries-<any-s3-region>.s3.<any-s3-region>.amazonaws.com/remotion.zip
```

This value is hardcoded into the `ensureLambdaBinaries()` function - you only need to call it.

## Arguments

### `region`

The AWS region in which you would like to install the binaries. You have to install the binaries separately for each region that you would like to use Remotion Lambda.

## Example

```ts
import {ensureLambdaBinaries} from '@remotion/lambda';

// ...

await ensureLambdaBinaries('us-east-1');
```