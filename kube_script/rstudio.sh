#!/bin/bash
if [ $# -ne 1 ] ;then
   echo "Please check the args"
   exit 0
fi

USER_ID=$1
USER_UID="1000178"
USER_GID="1000178"
IMAGE_NAME="jwpark\/r-server\:03R01"

#sed -e 's/$IMAGE_NAME/'$IMAGE_NAME'/g;s/$USER_ID/'$USER_ID'/g;s/$USER_UID/'$USER_UID'/g;s/$USER_GID/'$USER_GID'/g' deploy.yaml
kubectl create ns $1
sed -e 's/$IMAGE_NAME/'$IMAGE_NAME'/g;s/$USER_ID/'$USER_ID'/g;s/$USER_UID/'$USER_UID'/g;s/$USER_GID/'$USER_GID'/g' ./kube_script/rstudio.yaml | kubectl create -n $1 -f -