#!/bin/bash -e

echo "------------------------------------------------------------------------------------------------------------"
echo "Building:"
echo ""

mvn -Pdistribution -DskipTests -DskipTestsuite clean install


echo "------------------------------------------------------------------------------------------------------------"
echo "Deploying:"
echo ""

mvn -Pdistribution -DretryFailedDeploymentCount=10 -DskipTests -DskipTestsuite -DskipExamples \
-DaltDeploymentRepository=cosium-repo::default::https://repo.cosium.com/repository/internal/ deploy


echo "------------------------------------------------------------------------------------------------------------"
echo "Done"
echo "------------------------------------------------------------------------------------------------------------"
