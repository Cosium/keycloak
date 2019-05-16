#!/bin/bash -e

echo "------------------------------------------------------------------------------------------------------------"
echo "Building:"
echo ""

mvn -Pdistribution -DskipTests -DskipTestsuite clean install


echo "------------------------------------------------------------------------------------------------------------"
echo "Deploying:"
echo ""

mvn -Pdistribution -DretryFailedDeploymentCount=10 -DskipTests -DskipTestsuite -DskipExamples deploy


echo "------------------------------------------------------------------------------------------------------------"
echo "Done"
echo "------------------------------------------------------------------------------------------------------------"
