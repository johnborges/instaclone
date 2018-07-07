# instaclone
Instagram clone built using react-native, AWS, & GraphQL

## Get Started
`$ yarn install`

## Running on Simulator
`$ yarn start`

## Backend Setup
This projects uses the AWS Mobile Hub as the starting point for creating a mobile backend infastructure. The following steps assume you have an AWS account with sufficient permissions with your IAM role.

Install & Configure for AWS Mobile

`$ npm i -g awsmobile-cli`

From within your project root run: 

`$ awsmobile configure`

Initialize your project in AWS Mobile Hub

`$ awsmobile init`

Follow subsequent prompts to finish project setup.

Link an the `aws-amplify` dependancy

`$ react-native link amazon-cognito-identity-js`


