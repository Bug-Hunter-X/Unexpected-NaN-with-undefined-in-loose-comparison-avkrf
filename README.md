# JavaScript Loose Comparison Bug

This repository demonstrates a common error in JavaScript related to loose comparisons (==) when handling null and undefined values. The issue arises from the fact that JavaScript's loose comparison does not strictly distinguish between null and undefined, resulting in unexpected behavior, specifically the production of NaN in certain scenarios.

## Description

The `foo` function is designed to add two numbers.  However, when one of the inputs is `undefined` instead of `null`, the result is `NaN` due to the loose comparison.  This is different than expected behavior, where `null` is explicitly handled.